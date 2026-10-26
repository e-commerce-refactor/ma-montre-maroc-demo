import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MA MONTRE MAROC — Horlogerie & Montres de Prestige au Maroc | Paiement à la Livraison',
  description: 'Garde-temps d’exception, calibres automatiques et finitions suisses à Casablanca & tout le Maroc. Livraison express sécurisée 24h/48h avec vérification et paiement en espèces à la livraison (COD).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <body className="min-h-screen flex flex-col bg-[#07090E] text-slate-100 antialiased selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
