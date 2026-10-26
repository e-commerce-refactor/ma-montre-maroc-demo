'use client';

import React from 'react';
import { ShieldCheck, Eye, PackageCheck, Truck } from 'lucide-react';

export default function TrustBadges() {
  const commitments = [
    {
      title: "Garantie Mécanique 1 An",
      desc: "Révision et bon fonctionnement garantis 12 mois avec atelier basé à Casablanca.",
      icon: ShieldCheck,
      badge: "SÉRÉNITÉ TOTALE"
    },
    {
      title: "Vérification Avant Paiement",
      desc: "Inspectez la finition, le poids et le mouvement en main propre avant de remettre l'argent au livreur.",
      icon: Eye,
      badge: "ZÉRO RISQUE"
    },
    {
      title: "Écrin Prestige & Tournevis Inclus",
      desc: "Livré dans sa boîte de protection haute horlogerie avec outil d'ajustement de maillons offert.",
      icon: PackageCheck,
      badge: "COMPLET"
    },
    {
      title: "Expédition Sécurisée 24H/48H",
      desc: "Livraison le jour même sur Casablanca et sous 48h partout au Maroc avec suivi WhatsApp.",
      icon: Truck,
      badge: "EXPRESS MAROC"
    }
  ];

  return (
    <section className="py-12 bg-[#090D15] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-champagne-400 group-hover:text-rolex-400 group-hover:border-rolex-500/50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    {c.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-champagne-400 transition-colors">
                    {c.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
