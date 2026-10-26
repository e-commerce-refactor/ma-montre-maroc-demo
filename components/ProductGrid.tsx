'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import ProductCard from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({ onSelectProduct }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = [
    'Tous',
    'Datejust & Classic',
    'GMT & Pilote',
    'Submariner & Plongée',
    'Chronographe & Sport',
  ];

  const filtered = activeCategory === 'Tous'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase().substring(0, 7)));

  return (
    <section id="catalogue" className="py-16 md:py-24 bg-[#07090E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-champagne-400 text-[10px] font-mono tracking-widest uppercase">
            <span>● REGISTRE DES GARDES-TEMPS 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
            La Collection <span className="text-champagne-400">MA MONTRE MAROC</span>
          </h2>

          <p className="text-sm text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            Boîtiers Acier 904L, verres saphir inrayables et mouvements automatiques inspectés à Casablanca. Commandez sans risque avec paiement en espèces au livreur.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-rolex-600 to-rolex-700 text-white shadow-lg shadow-rolex-600/30 border border-rolex-500'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onOpenCodModal={onSelectProduct}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
