'use client';

import React from 'react';
import { Watch, ShieldCheck, Phone, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#07090E]/95 backdrop-blur-xl border-b border-slate-800/80 transition-all shadow-2xl">
      {/* Top Chronometer Ticker */}
      <div className="bg-gradient-to-r from-obsidian-950 via-slate-900 to-obsidian-950 text-slate-300 py-2 px-4 text-[11px] font-mono tracking-wider text-center border-b border-slate-800/60 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-rolex-500 font-semibold">
          <span className="w-2 h-2 rounded-full bg-rolex-500 animate-pulse"></span>
          ATELIER CASABLANCA EN DIRECT
        </span>
        <span className="hidden md:inline text-slate-600">|</span>
        <span className="hidden md:inline">🇲🇦 EXPÉDITION EXPRESS SOUS 24H AVEC INSPECTION AVANT PAIEMENT (COD)</span>
        <span className="hidden md:inline text-slate-600">|</span>
        <span className="text-champagne-400 font-semibold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-champagne-400" /> ÉCRIN LUXE & GARANTIE 1 AN OFFERTS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/80 flex items-center justify-center text-champagne-400 shadow-inner group">
            <Watch className="w-6 h-6 text-champagne-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-xl sm:text-2xl font-black tracking-[0.2em] text-white hover:text-champagne-400 transition-colors uppercase">
              MA MONTRE <span className="text-champagne-400">MAROC</span>
            </a>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-slate-400 uppercase font-mono">
              Haute Horlogerie & Garde-Temps • Maroc
            </span>
          </div>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
          <a href="#catalogue" className="hover:text-champagne-400 transition-colors py-1 border-b-2 border-transparent hover:border-champagne-400">
            Datejust 41mm
          </a>
          <a href="#catalogue" className="hover:text-champagne-400 transition-colors py-1 border-b-2 border-transparent hover:border-champagne-400">
            GMT-Master II
          </a>
          <a href="#catalogue" className="hover:text-champagne-400 transition-colors py-1 border-b-2 border-transparent hover:border-champagne-400">
            Submariner Plongeur
          </a>
          <a href="#catalogue" className="hover:text-champagne-400 transition-colors py-1 border-b-2 border-transparent hover:border-champagne-400">
            Chronographes
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <a
            href="https://wa.me/212645222009?text=Salam%20MA%20MONTRE%20MAROC%2C%20je%20souhaite%20des%20informations%20sur%20un%20garde-temps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-950/80 hover:bg-emerald-900/90 text-emerald-400 hover:text-emerald-300 rounded-lg text-xs font-mono font-medium transition-all border border-emerald-700/60 shadow-lg shadow-emerald-950/40"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="hidden sm:inline">Concierge WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <a
            href="#catalogue"
            className="px-4 py-2 bg-gradient-to-r from-champagne-500 to-champagne-600 hover:from-champagne-400 hover:to-champagne-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md shadow-champagne-500/20 active:scale-95"
          >
            Commander COD
          </a>
        </div>
      </div>
    </header>
  );
}
