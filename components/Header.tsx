'use strict';
'use client';

import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all shadow-sm">
      {/* Top bar announcement */}
      <div className="bg-[#0F172A] text-white py-2 px-4 text-xs tracking-wider text-center flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
        <span>🇲🇦 LIVRAISON EXPRESS 24H CASABLANCA & 48H PARTOUT AU MAROC • PAIEMENT À LA LIVRAISON</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex flex-col">
          <a href="#" className="font-serif text-2xl md:text-3xl tracking-[0.15em] font-bold text-[#0F172A] hover:text-[#D4AF37] transition-colors">
            MA MONTRE MAROC
          </a>
          <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">
            Horlogerie & Montres de Prestige au Maroc
          </span>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#catalogue" className="hover:text-[#D4AF37] transition-colors">Rolex & Prestige</a>
          <a href="#catalogue" className="hover:text-[#D4AF37] transition-colors">Montres Homme</a>
          <a href="#catalogue" className="hover:text-[#D4AF37] transition-colors">Montres Femme</a>
          <a href="#catalogue" className="hover:text-[#D4AF37] transition-colors">Nouveautés</a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/212645222009?text=Salam%20MA%20MONTRE%20MAROC%2C%20je%20souhaite%20des%20renseignements%20sur%20un%20mod%C3%A8le"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-semibold transition-colors border border-emerald-200"
          >
            <span>WhatsApp Direct</span>
            <span>💬</span>
          </a>
          <a
            href="#catalogue"
            className="hidden sm:inline-block px-5 py-2.5 bg-[#0F172A] hover:bg-[#D4AF37] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
          >
            Commander (COD)
          </a>
        </div>
      </div>
    </header>
  );
}
