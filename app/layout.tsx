import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ma Montre Maroc — Horlogerie & Montres de Prestige au Maroc | Paiement à la Livraison',
  description: 'Découvrez notre collection exclusive de montres de prestige à Casablanca et partout au Maroc. Livraison rapide 24h/48h et paiement en espèces à la livraison (COD).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
