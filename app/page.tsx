'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import ProductGrid from '../components/ProductGrid';
import CodModal from '../components/CodModal';
import OrderSuccessModal from '../components/OrderSuccessModal';
import Footer from '../components/Footer';
import { Product } from '../data/products';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  const handleOpenCodModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleOrderSuccess = (orderInfo: any) => {
    setSelectedProduct(null);
    setCompletedOrder(orderInfo);
  };

  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <ProductGrid onSelectProduct={handleOpenCodModal} />
      </main>
      <Footer />

      {/* Interactive 1-Click Fast Moroccan COD Modal */}
      <CodModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSuccess={handleOrderSuccess}
      />

      {/* Order Confirmation Handoff Modal */}
      <OrderSuccessModal
        orderInfo={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />
    </div>
  );
}
