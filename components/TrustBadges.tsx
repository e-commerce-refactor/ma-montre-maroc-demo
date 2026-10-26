'use strict';
'use client';

import React from 'react';

export default function TrustBadges() {
  const guarantees = [
    {
      title: "Garantie & Authenticité",
      desc: "Chaque garde-temps est vérifié et certifié avant expédition",
      icon: "💎"
    },
    {
      title: "Paiement à la Réception",
      desc: "Inspectez votre montre avant de régler en espèces au livreur",
      icon: "💵"
    },
    {
      title: "Livraison Partout au Maroc",
      desc: "Expédition express sous 24h à Casablanca et 48h dans toutes les villes",
      icon: "🇲🇦"
    },
    {
      title: "Service Client Dédié",
      desc: "Conseils et suivi de livraison personnalisés sur WhatsApp 7j/7",
      icon: "📲"
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-gray-50/70 border border-gray-100 flex items-start gap-4">
              <span className="text-3xl">{g.icon}</span>
              <div>
                <h4 className="font-serif text-sm font-bold text-gray-900">{g.title}</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
