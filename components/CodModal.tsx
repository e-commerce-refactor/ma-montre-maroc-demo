'use client';

import React, { useState } from 'react';
import { Product, MOROCCAN_CITIES } from '../data/products';
import { supabase } from '../lib/supabase';
import { ShieldCheck, Truck, X, Check, Lock, Watch } from 'lucide-react';

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
  const [wristSize, setWristSize] = useState('Standard Ajustable (17-18 cm)');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Shipping calculation logic
  const isCasablanca = city.toLowerCase() === 'casablanca';
  const shippingFee = isCasablanca ? 0 : 35;
  const totalToPay = product.priceMad + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Moroccan phone verification (06 / 07 / 05 / +212)
    const cleanPhone = phone.replace(/[\s\-\.]+/g, '');
    const phoneRegex = /^(?:\+212|0)[5-7]\d{8}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMsg('Veuillez entrer un numéro de téléphone marocain valide (ex: 06 12 34 56 78 ou 07 ...).');
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
          address: address || 'Non précisée (Confirmation WhatsApp)',
          items_summary: `${product.name} [Taille: ${wristSize}]`,
          total: totalToPay,
          status: 'en_attente',
          notes: `Horlogerie COD - Frais: ${shippingFee === 0 ? 'Gratuit (Casablanca)' : '35 DH'} - Montre: ${product.diameter}`
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
        diameter: product.diameter,
        priceMad: product.priceMad,
        shippingFee,
        totalToPay,
        customerName: fullName,
        customerPhone: phone,
        customerCity: city,
        customerAddress: address,
        wristSize: wristSize,
      });
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0B101D] text-slate-100 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-700/80 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#07090E] p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-champagne-400">
              <Watch className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-champagne-400 uppercase font-mono font-bold">
                COMMANDE RAPIDE SANS CARTE BANCAIRE
              </span>
              <h3 className="text-base font-bold text-white">
                Paiement à la Livraison (COD)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Selected Watch Summary */}
        <div className="bg-slate-900/80 p-4 border-b border-slate-800/80 flex items-center gap-3.5">
          <div className="w-16 h-16 rounded-xl bg-obsidian-950 border border-slate-800 flex-shrink-0 overflow-hidden p-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-champagne-400 font-mono font-semibold uppercase">{product.category}</span>
              <span className="text-[10px] text-slate-400 font-mono">{product.diameter}</span>
            </div>
            <h4 className="text-sm font-bold text-white truncate">{product.name}</h4>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-slate-400">{product.movement.split('(')[0]}</span>
              <span className="text-sm font-black text-white font-mono">
                {product.priceMad.toLocaleString('fr-FR')} <span className="text-champagne-400 text-xs">DH</span>
              </span>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 overflow-y-auto space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-950/80 border border-red-800 text-red-200 text-xs rounded-xl font-medium">
              ⚠️ {errorMsg}
            </div>
          )}

          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 mb-1 uppercase tracking-wider">
              Nom et Prénom *
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Yassine Bennani"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-sm px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-champagne-400"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 mb-1 uppercase tracking-wider">
              Numéro de Téléphone WhatsApp *
            </label>
            <input
              type="tel"
              required
              placeholder="Ex: 06 61 23 45 67"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full text-sm px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-champagne-400"
            />
            <p className="text-[10px] text-slate-500 mt-1">Notre équipe vous contactera sur WhatsApp pour confirmer l'heure de passage.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                Ville de Livraison *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full text-sm px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-champagne-400"
              >
                {MOROCCAN_CITIES.map((c) => (
                  <option key={c} value={c} className="bg-slate-900 text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                Ajustement Tour de Poignet
              </label>
              <select
                value={wristSize}
                onChange={(e) => setWristSize(e.target.value)}
                className="w-full text-sm px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-champagne-400"
              >
                <option value="Standard Ajustable (17-18 cm)" className="bg-slate-900 text-white">Standard Ajustable (17-18 cm)</option>
                <option value="Poignet Fin (15-16 cm)" className="bg-slate-900 text-white">Poignet Fin (15-16 cm)</option>
                <option value="Poignet Large (+Maillons inclus)" className="bg-slate-900 text-white">Poignet Large (+Maillons inclus)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 mb-1 uppercase tracking-wider">
              Adresse ou Quartier (Optionnel)
            </label>
            <input
              type="text"
              placeholder="Ex: Boulevard Zerktouni, Maarif"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full text-sm px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-champagne-400"
            />
          </div>

          {/* Pricing calculation */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-400">
              <span>Montre {product.name.split(' ')[0]} {product.diameter}</span>
              <span>{product.priceMad.toLocaleString('fr-FR')} DH</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Livraison ({city})</span>
              <span className={shippingFee === 0 ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                {shippingFee === 0 ? 'Gratuit (Casablanca 24h)' : `${shippingFee} DH (48h)`}
              </span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Écrin & Certificat d'authenticité</span>
              <span className="text-champagne-400 font-bold">OFFERT (0 DH)</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
              <span>Total à régler au livreur :</span>
              <span className="text-base text-champagne-400 font-mono font-black">
                {totalToPay.toLocaleString('fr-FR')} DH
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-gradient-to-r from-rolex-600 to-rolex-700 hover:from-rolex-500 hover:to-rolex-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-rolex-600/30 active:scale-95 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <span>Enregistrement sécurisé...</span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Confirmer Ma Commande (Paiement Réception)</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Inspection à la livraison
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-champagne-400" />
              Suivi WhatsApp 24/7
            </span>
          </div>
        </form>

      </div>
    </div>
  );
}
