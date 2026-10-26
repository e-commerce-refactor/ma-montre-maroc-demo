'use strict';
'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-white to-[#FDFBF7] py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left copy */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              <span>NOUVELLE COLLECTION 2026 • LIVRAISON 24H/48H</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-bold leading-tight tracking-tight">
              L'Excellence Horlogère au Poignet
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Découvrez notre collection exclusive de montres de prestige. Finitions soignées, boîtier haute résistance et livraison express avec paiement à la réception partout au Maroc.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalogue"
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#0F172A] hover:bg-[#D4AF37] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all tracking-wide uppercase"
              >
                Explorer la Collection
              </a>
              <a
                href="https://wa.me/212645222009?text=Salam%20MA%20MONTRE%20MAROC%2C%20je%20souhaite%20consulter%20votre%20catalogue%20complet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Conseiller Clientèle</span>
                <span className="text-xs text-gray-400">📲</span>
              </a>
            </div>

            {/* Micro assurances */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/70 text-center">
              <div>
                <p className="text-lg font-bold text-[#0F172A]">100%</p>
                <p className="text-xs text-gray-500 font-medium">Qualité & Finitions</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#0F172A]">24-48h</p>
                <p className="text-xs text-gray-500 font-medium">Partout au Maroc</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#0F172A]">0 DH</p>
                <p className="text-xs text-gray-500 font-medium">Paiement Réception</p>
              </div>
            </div>
          </div>

          {/* Image visual */}
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
                alt="Ma Montre Maroc"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Garde-Temps de Prestige</span>
                  <p className="font-serif text-2xl font-bold">Garantie 1 An & Écrin Luxe Offert</p>
                  <p className="text-xs text-gray-200">Chaque montre est minutieusement inspectée et réglée avant expédition sécurisée.</p>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-[#D4AF37] font-bold text-lg">
                ★
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">4.9/5 Avis Clients</p>
                <p className="text-[11px] text-gray-500">+1 200 Clients comblés au Maroc</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
