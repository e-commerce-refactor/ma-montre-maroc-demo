'use client';

import React from 'react';
import { CheckCircle2, MessageSquare, ShieldCheck, X } from 'lucide-react';

interface OrderSuccessModalProps {
  orderInfo: any;
  onClose: () => void;
}

export default function OrderSuccessModal({ orderInfo, onClose }: OrderSuccessModalProps) {
  if (!orderInfo) return null;

  const whatsappMessage = encodeURIComponent(
    `Salam MA MONTRE MAROC, je viens de valider ma commande N° ${orderInfo.orderId} pour la montre "${orderInfo.productName}" (${orderInfo.totalToPay} DH). Merci de confirmer mon expédition pour ${orderInfo.customerCity}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0B101D] text-slate-100 rounded-2xl max-w-md w-full p-6 text-center shadow-2xl border border-slate-700 space-y-4">
        
        {/* Glowing Status Icon */}
        <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-lg shadow-emerald-950/50">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>

        <div>
          <span className="text-[10px] tracking-widest text-champagne-400 font-mono font-bold uppercase">
            RÉSERVATION ENREGISTRÉE
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Commande Confirmée !
          </h3>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Merci <strong className="text-white">{orderInfo.customerName}</strong>. Votre garde-temps est mis de côté dans notre atelier pour préparation et scellage immédiat.
        </p>

        {/* Reference */}
        <div className="bg-slate-950 py-3 px-4 rounded-xl font-mono text-sm font-bold text-champagne-400 border border-slate-800">
          N° RÉFÉRENCE : {orderInfo.orderId}
        </div>

        {/* Order Details */}
        <div className="text-xs text-left bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-1.5 font-mono">
          <div className="flex justify-between">
            <span className="text-slate-500">Modèle :</span>
            <span className="text-white font-semibold truncate max-w-[200px]">{orderInfo.productName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Montant COD :</span>
            <span className="text-champagne-400 font-bold">{orderInfo.totalToPay} DH</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Destination :</span>
            <span className="text-slate-300">{orderInfo.customerCity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Poignet :</span>
            <span className="text-slate-300">{orderInfo.wristSize}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2">
          <a
            href={`https://wa.me/212645222009?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Accélérer la Livraison sur WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-300 font-semibold transition-colors"
          >
            Retourner au Catalogue Horloger
          </button>
        </div>

      </div>
    </div>
  );
}
