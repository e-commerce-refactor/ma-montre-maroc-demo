'use strict';
'use client';

import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenCodModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenCodModal }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/212645222009?text=${encodeURIComponent(
    `Salam MA MONTRE MAROC, je souhaite commander le modèle "${product.name}" au prix de ${product.priceMad} DH.`
  )}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      {/* Visual */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#0F172A] text-white text-[10px] tracking-wider uppercase font-bold px-2.5 py-1 rounded">
            {product.badge}
          </span>
        )}

        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded border border-gray-200">
          {product.material}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider">{product.category}</span>
          <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors leading-snug pt-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        <div>
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-bold text-[#0F172A]">
              {product.priceMad.toLocaleString('fr-FR')} DH
            </span>
            {product.originalPriceMad && (
              <span className="text-xs text-gray-400 line-through">
                {product.originalPriceMad.toLocaleString('fr-FR')} DH
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
            <button
              onClick={() => onOpenCodModal(product)}
              className="w-full py-2.5 bg-[#0F172A] hover:bg-[#D4AF37] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Commander (COD)</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>WhatsApp</span>
              <span className="text-xs">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
