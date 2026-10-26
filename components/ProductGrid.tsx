'use strict';
'use client';

import React, {{ useState }} from 'react';
import {{ PRODUCTS, Product }} from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({ onSelectProduct }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Rolex & Prestige', 'Montres Homme'];

  const filtered = activeCategory === 'Tous'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase().substring(0, 5)));

  return (
    <section id="catalogue" className="py-16 md:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Catalogue Officiel 2026</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-bold">
            La Collection MA MONTRE MAROC
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto font-light">
            Chaque modèle est accompagné de son écrin de luxe et de son certificat de garantie. Commandez en toute sérénité avec paiement à la réception.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0F172A] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
