'use client';

import React from 'react';
import { Product } from '../data/products';
import { Shield, Zap, MessageSquare, Check, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenCodModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenCodModal }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/212645222009?text=${encodeURIComponent(
    `Salam MA MONTRE MAROC, je souhaite commander la montre "${product.name}" (${product.diameter}) au prix de ${product.priceMad} DH.`
  )}`;

  return (
    <div className="group bg-gradient-to-b from-slate-900/90 to-obsidian-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/20">
      
      {/* Visual Showcase */}
      <div className="relative aspect-square bg-[#06080E] overflow-hidden flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge status */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md text-champagne-400 border border-champagne-500/40 text-[9px] font-mono tracking-widest uppercase font-bold px-2.5 py-1 rounded">
            {product.badge}
          </span>
        )}

        {/* Technical specs pill */}
        <span className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700">
          {product.diameter} • {product.waterResistance}
        </span>

        {/* Bottom image overlay specs */}
        <div className="absolute bottom-2 inset-x-2 bg-slate-950/80 backdrop-blur-md rounded-lg py-1 px-2.5 border border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span>{product.material}</span>
          <span className="text-emerald-400">● En Stock</span>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-champagne-400 font-mono font-semibold uppercase tracking-widest">
              {product.category}
            </span>
            {product.stockLeft && (
              <span className="text-[10px] text-amber-400/90 font-mono">
                Reste {product.stockLeft} ex.
              </span>
            )}
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-champagne-400 transition-colors leading-snug pt-1">
            {product.name}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed font-light">
            {product.subtitle}
          </p>

          {/* Quick Technical Specs Line */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-500">Mouvement :</span>
              <span className="text-slate-300 truncate max-w-[170px]">{product.movement}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Verre :</span>
              <span className="text-slate-300">{product.glass}</span>
            </div>
          </div>
        </div>

        <div>
          {/* Price */}
          <div className="flex items-baseline justify-between mb-3 pt-2">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white font-mono">
                  {product.priceMad.toLocaleString('fr-FR')} <span className="text-xs text-champagne-400">DH</span>
                </span>
                {product.originalPriceMad && (
                  <span className="text-xs text-slate-500 line-through font-mono">
                    {product.originalPriceMad.toLocaleString('fr-FR')} DH
                  </span>
                )}
              </div>
              <p className="text-[10px] text-emerald-400 font-mono">Livraison & Écrin Prestige inclus</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onOpenCodModal(product)}
              className="w-full py-2.5 bg-gradient-to-r from-rolex-600 to-rolex-700 hover:from-rolex-500 hover:to-rolex-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-rolex-600/20 active:scale-95 flex items-center justify-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Commander COD</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
