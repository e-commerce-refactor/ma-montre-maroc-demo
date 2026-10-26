export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  material: string;
  priceMad: number;
  originalPriceMad?: number;
  image: string;
  badge?: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "rolex-datejust-41-wimbledon",
    name: "Rolex Datejust 41 ‘Wimbledon’ Dial Two-Tone Jubilee",
    subtitle: "Cadran Ardoise Chiffres Romains Verts & Lunette Cannelée Or Jaune",
    category: "Rolex & Prestige",
    material: "Acier Oystersteel & Or Jaune",
    priceMad: 1599,
    originalPriceMad: 1999,
    badge: "Bestseller",
    image: "https://mamontre.ma/cdn/shop/files/WTC_Rolex-Datejust-41-Wimbledon-Jubilee-Two-Tone_126333_600x_2_-Photoroom.png?v=1747662732&width=533",
    description: "Le garde-temps iconique combinant élégance sportive et prestige horloger. Cadran ardoise aux chiffres romains surlignés de vert, bracelet Jubilee à cinq mailles haute finition et loupe Cyclope sur la date à 3 heures."
  },
  {
    id: "rolex-gmt-master-ii-noir-jubilee",
    name: "Montre Rolex GMT‑MASTER II Noir Jubilee",
    subtitle: "Lunette Tournante Bidirectionnelle Céramique Noire & Aiguille 24h",
    category: "Montres Homme",
    material: "Céramique Noire & Acier 904L",
    priceMad: 1599,
    originalPriceMad: 1950,
    badge: "Coup de Cœur",
    image: "https://mamontre.ma/cdn/shop/files/WhatsApp_Image_2025-06-22_at_9.05.45_PM.jpg?v=1750623144&width=533",
    description: "Conçue pour les grands voyageurs et passionnés d'aviation. Boîtier robuste en acier poli et brossé, disque Cerachrom noir inaltérable et aiguille GMT indépendante pour la lecture d'un second fuseau horaire."
  },
  {
    id: "rolex-datejust-vert-36mm",
    name: "Rolex Datejust Cadran Vert Olive 36 mm",
    subtitle: "Cadran Soleil Vert Émeraude, Lunette Cannelée & Bracelet Jubilee",
    category: "Montres Homme",
    material: "Acier 904L & Verre Saphir",
    priceMad: 1599,
    originalPriceMad: 1899,
    badge: "Nouveauté",
    image: "https://mamontre.ma/cdn/shop/files/WhatsAppImage2025-06-22at9.05.45PM_1.jpg?v=1750624110&width=533",
    description: "L'harmonie absolue du vert olive impérial et de la lunette cannelée classique. Diamètre de 36 mm polyvalent pour poignet masculin ou féminin sophistiqué. Écrin haute horlogerie offert."
  },
  {
    id: "rolex-submariner-date-noir",
    name: "Montre Rolex Submariner Date Céramique Noire",
    subtitle: "Lunette Tournante Unidirectionnelle Graduée & Index Chromalight Luminescents",
    category: "Montres Homme",
    material: "Acier Oyster & Céramique Cerachrom",
    priceMad: 1699,
    originalPriceMad: 2100,
    badge: "Édition Limitée",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description: "La référence absolue des montres de plongée de luxe. Aiguilles Mercedes emblématiques, affichage Chromalight haute lisibilité dans l'obscurité et fermoir de sécurité Oysterlock ajustable."
  },
  {
    id: "rolex-cosmograph-daytona-or",
    name: "Rolex Cosmograph Daytona Chronographe Or",
    subtitle: "Triple Compteur Chronomètre, Lunette Tachymétrique & Finition PVD Or Jaune",
    category: "Rolex & Prestige",
    material: "PVD Or Jaune & Verre Saphir",
    priceMad: 1799,
    originalPriceMad: 2350,
    badge: "Prestige",
    image: "https://images.unsplash.com/photo-1547996160-71dfabb1a7cf?auto=format&fit=crop&w=800&q=80",
    description: "Née pour la vitesse et les circuits de course légendaires. Chronographe d'une précision millimétrée doté d'une échelle tachymétrique gravée sur la lunette pour mesurer la vitesse moyenne jusqu'à 400 unités par heure."
  },
  {
    id: "audemars-piguet-royal-oak-bleu",
    name: "Montre Style Royal Oak Cadran Bleu Grande Tapisserie",
    subtitle: "Boîtier Octogonal Ciselé Vis Apparentes & Bracelet Intégré Acier",
    category: "Rolex & Prestige",
    material: "Acier Inoxydable Brossé Main",
    priceMad: 1850,
    originalPriceMad: 2400,
    badge: "Pièce Unique",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Une silhouette architecturale révolutionnaire reconnaissable au premier coup d'œil. Cadran guilloché motif Grande Tapisserie bleu nuit réfléchissant la lumière avec subtilité."
  }
];

export const MOROCCAN_CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
  "Oujda",
  "Kénitra",
  "Tétouan",
  "Salé",
  "Mohammédia",
  "El Jadida",
  "Nador",
  "Béni Mellal"
];
