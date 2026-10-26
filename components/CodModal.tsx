'use strict';
'use client';

import React, { useState } from 'react';
import { Product, MOROCCAN_CITIES } from '../data/products';
import { supabase } from '../lib/supabase';

interface CodModalProps {
  product: Product | null;
  onClose: () => void;
  onSuccess: (orderInfo: any) => void;
}

export default function CodModal({ product, onClose, onSuccess }: CodModalProps) {
  if (!product) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Casablanca');
  const [address, setAddress] = useState('');
  const [preference, setPreference] = useState('Standard (Ajustable)');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Shipping calculation logic
  const isCasablanca = city.toLowerCase() === 'casablanca';
  const shippingFee = isCasablanca ? 0 : 35;
  const totalToPay = product.priceMad + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Moroccan phone verification (06 / 07 / +212)
    const cleanPhone = phone.replace(/\s+/g, '');
    const phoneRegex = /^(?:\+212|0)[5-7]\d{8}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMsg('Veuillez entrer un numéro de téléphone marocain valide (ex: 06 12 34 56 78).');
      return;
    }

    if (!fullName.trim() || fullName.trim().length < 3) {
      setErrorMsg('Veuillez indiquer votre nom et prénom complets.');
      return;
    }

    setSubmitting(true);
    const orderRef = `MMM-${Math.floor(100000 + Math.random() * 900000)}`;

    // Persist to Supabase
    try {
      supabase.from('orders').insert([
        {
          ref: orderRef,
          customer_name: fullName,
          phone: cleanPhone,
          city: city,
          address: address || 'Non précisée',
          items_summary: `${product.name} (${preference})`,
          total: totalToPay,
          status: 'en_attente',
          notes: `Livraison: ${shippingFee === 0 ? 'Gratuite (Casablanca)' : '35 DH (Hors Casablanca)'}`
        }
      ]).then((res) => {
        if (res.error) {
          console.warn('Supabase insert warning:', res.error);
        }
      });
    } catch (err) {
      console.log('Supabase sync notice:', err);
    }

    setTimeout(() => {
      setSubmitting(false);
      onSuccess({
        orderId: orderRef,
        productName: product.name,
        priceMad: product.priceMad,
        shippingFee,
        totalToPay,
        customerName: fullName,
        customerPhone: phone,
        customerCity: city,
        customerAddress: address,
        preference: preference,
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0F172A] text-white p-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">Commande Éclair 1-Clic</span>
            <h3 className="font-serif text-lg font-bold">Paiement à la Livraison (COD)</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl p-1 font-bold"
          >
            ✕
          </button>
        </div>

        {/* Selected Product Summary */}
        <div className="bg-amber-50/50 p-4 border-b border-amber-100 flex items-center gap-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-14 h-14 object-cover rounded-lg border border-amber-200"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-gray-900 truncate">{product.name}</h4>
            <p className="text-xs text-gray-500">{product.material}</p>
            <p className="text-sm font-bold text-[#0F172A] pt-0.5">
              {product.priceMad.toLocaleString('fr-FR')} DH
            </p>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
              ⚠️ {errorMsg}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Nom et Prénom *
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Yassine El Mansouri"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-sm px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Numéro de Téléphone WhatsApp *
            </label>
            <input
              type="tel"
              required
              placeholder="Ex: 06 45 22 20 09"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full text-sm px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Ville de Livraison *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full text-sm px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white"
              >
                {MOROCCAN_CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Ajustement Bracelet
              </label>
              <select
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                className="w-full text-sm px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white"
              >
                <option value="Standard (Ajustable)">Standard (Ajustable)</option>
                <option value="Poignet Fin">Poignet Fin</option>
                <option value="Poignet Large (+Maillons)">Poignet Large (+Maillons)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Adresse de Livraison ou Quartier
            </label>
            <input
              type="text"
              placeholder="Ex: Boulevard d'Anfa, Quartier Racine"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full text-sm px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          {/* Pricing calculation */}
          <div className="bg-gray-50 p-3.5 rounded-lg text-xs space-y-1.5 border border-gray-200">
            <div className="flex justify-between text-gray-600">
              <span>Prix du modèle</span>
              <span>{product.priceMad.toLocaleString('fr-FR')} DH</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Frais de livraison ({city})</span>
              <span className={shippingFee === 0 ? 'text-[#059669] font-bold' : ''}>
                {shippingFee === 0 ? 'Gratuit (Casablanca)' : `${shippingFee} DH`}
              </span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#0F172A] pt-1 border-t border-gray-200">
              <span>Total à payer au livreur</span>
              <span className="text-base text-[#D4AF37]">{totalToPay.toLocaleString('fr-FR')} DH</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 bg-[#0F172A] hover:bg-[#D4AF37] text-white text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            {submitting ? (
              <span>Validation en cours...</span>
            ) : (
              <>
                <span>Confirmer Ma Commande (COD)</span>
                <span>✓</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-gray-400 text-center">
            🔒 Vos données sont protégées. Zéro paiement requis aujourd'hui (Paiement à la réception).
          </p>
        </form>

      </div>
    </div>
  );
}
