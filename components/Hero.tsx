'use client';

import React from 'react';
import { ShieldCheck, Truck, Clock, CheckCircle2, Award, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07090E] via-[#0B0F17] to-[#07090E] py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-champagne-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Horlogerie Description (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-champagne-400 text-xs font-mono tracking-wider shadow-inner">
              <span className="w-2 h-2 rounded-full bg-rolex-500 animate-pulse"></span>
              <span>NOUVELLE ÉDITION HORLOGÈRE 2026 • STOCK LIMITÉ CASABLANCA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-[1.1] tracking-tight">
              L’Art de l’Horlogerie.<br />
              <span className="bg-gradient-to-r from-champagne-400 via-champagne-200 to-slate-200 bg-clip-text text-transparent">
                La Puissance au Poignet.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Découvrez la quintessence des garde-temps mécaniques au Maroc. Boîtiers forgés en <strong className="text-slate-200 font-semibold">Acier Oystersteel 904L</strong>, verres saphir inrayables et mouvements automatiques certifiés.
            </p>

            {/* Technical Horlogerie Specs Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-2.5 text-center">
                <span className="block text-[10px] text-slate-500 uppercase font-mono">Boîtier</span>
                <span className="text-xs font-bold text-slate-200">Acier 904L</span>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-2.5 text-center">
                <span className="block text-[10px] text-slate-500 uppercase font-mono">Lunette</span>
                <span className="text-xs font-bold text-champagne-400">Cerachrom</span>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-2.5 text-center">
                <span className="block text-[10px] text-slate-500 uppercase font-mono">Calibre</span>
                <span className="text-xs font-bold text-slate-200">Automatique</span>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-2.5 text-center">
                <span className="block text-[10px] text-slate-500 uppercase font-mono">Garantie</span>
                <span className="text-xs font-bold text-rolex-500">1 An Inclus</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#catalogue"
                className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-rolex-600 to-rolex-700 hover:from-rolex-500 hover:to-rolex-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl shadow-rolex-600/20 hover:shadow-rolex-500/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Commander avec Paiement à la Livraison</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/212645222009?text=Salam%20MA%20MONTRE%20MAROC%2C%20je%20souhaite%20consulter%20le%20catalogue%20complet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Atelier WhatsApp 💬</span>
              </a>
            </div>

            {/* Micro assurances */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-center">
              <div>
                <p className="text-base sm:text-lg font-black text-white font-mono">0 DH</p>
                <p className="text-[11px] text-slate-400">Paiement à la réception</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-black text-champagne-400 font-mono">24H / 48H</p>
                <p className="text-[11px] text-slate-400">Livraison express Maroc</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-black text-rolex-500 font-mono">100%</p>
                <p className="text-[11px] text-slate-400">Inspection avant paiement</p>
              </div>
            </div>
          </div>

          {/* Right Showcase Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/60 to-slate-950/80 p-2 border border-slate-700/80 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-obsidian-900">
                <img
                  src="https://mamontre.ma/cdn/shop/files/WTC_Rolex-Datejust-41-Wimbledon-Jubilee-Two-Tone_126333_600x_2_-Photoroom.png?v=1747662732&width=533"
                  alt="Rolex Datejust 41 Wimbledon Ma Montre Maroc"
                  className="w-full h-full object-contain p-6 transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Glass Badges */}
                <div className="absolute top-4 left-4 bg-obsidian-950/80 backdrop-blur-md border border-slate-700 text-champagne-400 text-[10px] font-mono uppercase px-2.5 py-1 rounded">
                  Calibre 3235 • 70H Réserve
                </div>

                <div className="absolute bottom-4 inset-x-4 bg-obsidian-950/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-rolex-500 font-bold font-mono">PIÈCE MAÎTRESSE</span>
                    <span className="text-xs font-mono font-bold text-champagne-400">1 599 DH</span>
                  </div>
                  <p className="text-xs font-bold text-white">Datejust 41 Wimbledon Cadran Ardoise</p>
                  <p className="text-[11px] text-slate-400">Écrin vert haute horlogerie et carte de garantie inclus.</p>
                </div>
              </div>
            </div>

            {/* Floating Live Moroccan Customer Proof */}
            <div className="absolute -bottom-5 -left-5 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl shadow-2xl border border-slate-700 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rolex-900/50 border border-rolex-600/50 flex items-center justify-center text-rolex-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white font-mono">+1 280 Montres Livrées</p>
                <p className="text-[11px] text-slate-400">À Casablanca, Rabat, Marrakech & Tanger</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
