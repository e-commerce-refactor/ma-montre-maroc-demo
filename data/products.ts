export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  material: string;
  diameter: string;
  movement: string;
  glass: string;
  waterResistance: string;
  priceMad: number;
  originalPriceMad?: number;
  image: string;
  badge?: string;
  description: string;
  stockLeft?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "rolex-datejust-41-wimbledon",
    name: "Rolex Datejust 41 ‘Wimbledon’ Two-Tone",
    subtitle: "Cadran Ardoise Chiffres Romains Verts & Lunette Cannelée Or Jaune",
    category: "Datejust & Classic",
    material: "Acier Oystersteel 904L & Or Jaune 18K",
    diameter: "41 mm",
    movement: "Calibre Automatique 3235 (70h Réserve)",
    glass: "Saphir Cyclope Antireflet",
    waterResistance: "Étanche 100M",
    priceMad: 1599,
    originalPriceMad: 1999,
    badge: "BESTSELLER CASABLANCA",
    stockLeft: 3,
    image: "https://mamontre.ma/cdn/shop/files/WTC_Rolex-Datejust-41-Wimbledon-Jubilee-Two-Tone_126333_600x_2_-Photoroom.png?v=1747662732&width=533",
    description: "Le garde-temps le plus convoité des amateurs d'horlogerie au Maroc. Cadran ardoise aux chiffres romains surlignés de vert Rolex impérial, bracelet Jubilee à cinq mailles haute finition et loupe Cyclope sur la date à 3 heures."
  },
  {
    id: "rolex-gmt-master-ii-noir-jubilee",
    name: "Rolex GMT‑Master II Céramique Noire",
    subtitle: "Lunette Tournante Cerachrom Bidirectionnelle & Aiguille GMT 24h",
    category: "GMT & Pilote",
    material: "Acier 904L & Disque Cerachrom Noir",
    diameter: "40 mm",
    movement: "Calibre Automatique 3186 Dual-Time",
    glass: "Saphir Inrayable Haute Dureté",
    waterResistance: "Étanche 100M",
    priceMad: 1599,
    originalPriceMad: 1950,
    badge: "LIVRAISON 24H",
    stockLeft: 2,
    image: "https://mamontre.ma/cdn/shop/files/WhatsApp_Image_2025-06-22_at_9.05.45_PM.jpg?v=1750623144&width=533",
    description: "Conçue pour les grands voyageurs et les hommes d'action. Boîtier robuste en acier poli et brossé, disque Cerachrom noir inaltérable et aiguille verte indépendante pour la lecture instantanée d'un second fuseau horaire."
  },
  {
    id: "rolex-datejust-vert-36mm",
    name: "Rolex Datejust 36 mm Cadran Vert Olive",
    subtitle: "Cadran Soleil Vert Olive, Lunette Cannelée & Index Chromalight",
    category: "Datejust & Classic",
    material: "Acier Oystersteel & Verre Saphir",
    diameter: "36 mm",
    movement: "Calibre Mécanique Automatique 3235",
    glass: "Saphir Résistant aux Rayures",
    waterResistance: "Étanche 100M",
    priceMad: 1599,
    originalPriceMad: 1899,
    badge: "CADRAN EMERAUDE",
    stockLeft: 4,
    image: "https://mamontre.ma/cdn/shop/files/WhatsAppImage2025-06-22at9.05.45PM_1.jpg?v=1750624110&width=533",
    description: "L'harmonie absolue du vert olive impérial et de la lunette cannelée classique. Diamètre polyvalent de 36 mm pour un porté élégant et discret au quotidien. Livrée sous boîte écrin haute horlogerie."
  },
  {
    id: "rolex-submariner-date-noir",
    name: "Rolex Submariner Date Céramique Noire",
    subtitle: "Lunette Plongeur Unidirectionnelle Graduée & Index Chromalight Bleus",
    category: "Submariner & Plongée",
    material: "Acier Oyster & Céramique Cerachrom",
    diameter: "41 mm",
    movement: "Calibre Automatique Haute Précision",
    glass: "Saphir Cyclope Grossissant 2.5x",
    waterResistance: "Étanche 300M Réel",
    priceMad: 1699,
    originalPriceMad: 2100,
    badge: "ICÔNE MONDIALE",
    stockLeft: 2,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description: "La référence absolue et indétrônable des montres de plongée de luxe. Aiguilles Mercedes luminescentes dans l'obscurité, fermoir Glidelock ajustable sans outil et robustesse à toute épreuve."
  },
  {
    id: "rolex-cosmograph-daytona-or",
    name: "Rolex Cosmograph Daytona Chronographe Or",
    subtitle: "Triple Compteur Chronomètre, Lunette Tachymétrique & Finition PVD Or Jaune",
    category: "Chronographe & Sport",
    material: "PVD Or Jaune 18K & Acier 904L",
    diameter: "40 mm",
    movement: "Chronographe Mécanique Calibre 4130",
    glass: "Verre Saphir Inrayable",
    waterResistance: "Étanche 100M",
    priceMad: 1799,
    originalPriceMad: 2350,
    badge: "PRESTIGE VIP",
    stockLeft: 1,
    image: "https://images.unsplash.com/photo-1547996160-71dfabb1a7cf?auto=format&fit=crop&w=800&q=80",
    description: "Née pour la vitesse et le sport automobile de haut niveau. Chronographe d'une précision millimétrée doté d'une échelle tachymétrique gravée sur la lunette pour mesurer la vitesse moyenne jusqu'à 400 unités par heure."
  },
  {
    id: "audemars-piguet-royal-oak-bleu",
    name: "Montre Style Royal Oak Bleu Nuit Tapisserie",
    subtitle: "Boîtier Octogonal Ciselé Vis Apparentes & Bracelet Intégré Acier",
    category: "Haute Horlogerie",
    material: "Acier Inoxydable Brossé & Poli Main",
    diameter: "41 mm",
    movement: "Automatique Ultra-Plat Calibre 4302",
    glass: "Saphir Antireflet Double Face",
    waterResistance: "Étanche 50M",
    priceMad: 1850,
    originalPriceMad: 2400,
    badge: "PIÈCE D'EXCEPTION",
    stockLeft: 2,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    description: "Une silhouette architecturale révolutionnaire reconnaissable au premier coup d'œil. Cadran guilloché motif Grande Tapisserie bleu nuit réfléchissant la lumière avec subtilité."
  }
];

export const MOROCCAN_CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tanger",
  "Fès",
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
