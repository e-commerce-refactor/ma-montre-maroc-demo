'use client';

import React from 'react';
import { Watch, ShieldCheck, MapPin, Phone, MessageSquare, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05070B] text-slate-300 pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-champagne-400">
                <Watch className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-black tracking-[0.2em] text-white uppercase">
                MA MONTRE <span className="text-champagne-400">MAROC</span>
              </h3>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              La référence horlogère au Maroc. Sélection rigoureuse de garde-temps de prestige, calibres automatiques et finitions haute résistance.
            </p>

            <div className="flex items-center gap-2 text-xs text-champagne-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
              <span>Atelier & Distribution : Casablanca, Maroc</span>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Modèles Phares</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#catalogue" className="hover:text-champagne-400 transition-colors">Rolex Datejust 41 Wimbledon</a></li>
              <li><a href="#catalogue" className="hover:text-champagne-400 transition-colors">Rolex GMT-Master II Céramique</a></li>
              <li><a href="#catalogue" className="hover:text-champagne-400 transition-colors">Rolex Submariner Date Céramique</a></li>
              <li><a href="#catalogue" className="hover:text-champagne-400 transition-colors">Rolex Cosmograph Daytona Or</a></li>
              <li><a href="#catalogue" className="hover:text-champagne-400 transition-colors">Style Royal Oak Bleu Nuit</a></li>
            </ul>
          </div>

          {/* Concierge & Assistance */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Conciergerie WhatsApp</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp : <a href="https://wa.me/212645222009" className="text-emerald-400 font-bold hover:underline">+212 6 45 22 20 09</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <span>Disponibilité : 7j/7 de 9h à 22h</span>
              </li>
              <li>Livraison : 24h Casablanca / 48h Maroc</li>
              <li>Règlement : Espèces à la livraison (COD)</li>
            </ul>
          </div>

          {/* Instagram & Community */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Communauté</h4>
            <p className="text-xs text-slate-400">Suivez nos nouveaux arrivages et vidéos HD des cadrans :</p>
            <a
              href="https://instagram.com/mamontre.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-champagne-400 hover:text-champagne-300 transition-colors border border-slate-800 bg-slate-900/60 px-3 py-2 rounded-lg"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>@mamontre.ma sur Instagram</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <p>© {new Date().getFullYear()} MA MONTRE MAROC. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span className="text-emerald-400">● 100% Paiement à la réception</span>
            <span>Next.js 14 Ultra-Fast</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
