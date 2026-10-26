'use strict';
'use client';

import React from 'react';

interface OrderSuccessModalProps {
  orderInfo: any;
  onClose: () => void;
}

export default function OrderSuccessModal({ orderInfo, onClose }: OrderSuccessModalProps) {
  if (!orderInfo) return null;

  const whatsappMessage = encodeURIComponent(
    `Salam MA MONTRE MAROC, je viens de valider la commande N° ${orderInfo.orderId} pour ${orderInfo.productName} (${orderInfo.totalToPay} DH). Merci de confirmer ma livraison à ${orderInfo.customerCity}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center shadow-2xl border border-gray-100 space-y-4">
        
        <div className="w-16 h-16 bg-emerald-100 text-[#059669] rounded-full flex items-center justify-center mx-auto text-3xl">
          ✓
        </div>

        <h3 className="font-serif text-2xl font-bold text-gray-900">
          Commande Validée avec Succès !
        </h3>

        <p className="text-xs text-gray-600 leading-relaxed">
          Merci <strong className="text-gray-900">{orderInfo.customerName}</strong>. Votre commande a bien été enregistrée sous la référence :
        </p>

        <div className="bg-gray-50 py-2.5 px-4 rounded-lg font-mono text-sm font-bold text-[#0F172A] border border-gray-200">
          Réf : {orderInfo.orderId}
        </div>

        <div className="text-xs text-left bg-amber-50 p-3.5 rounded-lg border border-amber-200 space-y-1">
          <p><strong>Modèle :</strong> {orderInfo.productName}</p>
          <p><strong>Montant Total :</strong> {orderInfo.totalToPay} DH (Paiement au livreur)</p>
          <p><strong>Ville :</strong> {orderInfo.customerCity}</p>
          <p><strong>Téléphone :</strong> {orderInfo.customerPhone}</p>
        </div>

        <div className="space-y-2 pt-2">
          <a
            href={`https://wa.me/212645222009?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Accélérer ma Livraison sur WhatsApp</span>
            <span>💬</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-800 font-semibold transition-colors"
          >
            Fermer et Continuer mes Achats
          </button>
        </div>

      </div>
    </div>
  );
}
