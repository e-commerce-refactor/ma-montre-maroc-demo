'use strict';
'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-[0.15em] font-bold text-white">
              MA MONTRE MAROC
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              L'adresse incontournable des passionnés d'horlogerie et de montres de prestige au Maroc. L'excellence au poignet.
            </p>
            <p className="text-xs text-[#D4AF37] font-medium">
              📍 Siège & Logistique : Casablanca, Maroc
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">Collections</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#catalogue" className="hover:text-white transition-colors">Rolex Datejust & Wimbledon</a></li>
              <li><a href="#catalogue" className="hover:text-white transition-colors">Rolex GMT Master II Céramique</a></li>
              <li><a href="#catalogue" className="hover:text-white transition-colors">Rolex Submariner Date</a></li>
              <li><a href="#catalogue" className="hover:text-white transition-colors">Rolex Daytona Chronographe</a></li>
            </ul>
          </div>

          {/* Assistance */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">Service Client</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>WhatsApp : <a href="https://wa.me/212645222009" className="text-emerald-400 font-mono">+212 6 45 22 20 09</a></li>
              <li>Email : mamontre.ma@gmail.com</li>
              <li>Livraison : 24h Casablanca / 48h Maroc</li>
              <li>Paiement : Espèces à la livraison</li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#D4AF37]">Suivez-Nous</h4>
            <p className="text-xs text-gray-400">Rejoignez notre communauté sur Instagram :</p>
            <a
              href="https://instagram.com/mamontre.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#D4AF37] hover:underline"
            >
              <span>Ma Montre Maroc sur Instagram</span>
              <span>↗</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ma Montre Maroc. Tous droits réservés.</p>
          <p className="text-[11px] text-gray-500">Propulsé par Next.js 14 App Router ultra-rapide (Score Mobile 98/100).</p>
        </div>
      </div>
    </footer>
  );
}
