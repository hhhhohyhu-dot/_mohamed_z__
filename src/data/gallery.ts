export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: Category;
  price: string;
  description: string;
}

export type Category =
  | 'all'
  | 'nature'
  | 'cars'
  | 'anime'
  | 'portrait'
  | 'wallpaper'
  | 'fantasy'
  | 'architecture'
  | 'animals';

export const CATEGORIES: { value: Category; label: string; emoji: string }[] = [
  { value: 'all', label: 'All', emoji: '✦' },
  { value: 'nature', label: 'Nature', emoji: '🌿' },
  { value: 'cars', label: 'Cars', emoji: '🚗' },
  { value: 'anime', label: 'Anime', emoji: '⚡' },
  { value: 'portrait', label: 'Portrait', emoji: '🎭' },
  { value: 'wallpaper', label: 'Wallpaper', emoji: '🌌' },
  { value: 'fantasy', label: 'Fantasy', emoji: '🐉' },
  { value: 'architecture', label: 'Architecture', emoji: '🏛️' },
  { value: 'animals', label: 'Animals', emoji: '🦁' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 0,
    src: '/gallery/anime_pool_selfie.png',
    title: 'Poolside Legends',
    category: 'anime',
    price: '$25',
    description: 'Awesome anime style portrait of two friends at a swimming pool enjoying the summer vibes.',
  },
  {
    id: 0.5,
    src: '/gallery/river_peace_art.png',
    title: 'River Peace',
    category: 'anime',
    price: '$20',
    description: 'Beautiful hand-drawn artistic illustration of a young man swimming in a natural rocky river.',
  },
  // ─── Morocco & Meknes ──────────────────────────────
  {
    id: 0.6,
    src: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
    title: 'Moroccan Architecture',
    category: 'architecture',
    price: '$15',
    description: 'Stunning intricate Moroccan architecture and zellige tiles',
  },
  {
    id: 0.7,
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    title: 'Sahara Magic',
    category: 'nature',
    price: '$25',
    description: 'Golden sand dunes of the Moroccan Sahara desert at sunset',
  },
  {
    id: 0.8,
    src: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=800&q=80',
    title: 'Meknes Imperial',
    category: 'architecture',
    price: '$18',
    description: 'Beautiful imperial city of Meknes with its historic monuments and walls',
  },
  {
    id: 0.9,
    src: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    title: 'Blue Medina',
    category: 'architecture',
    price: '$22',
    description: 'The famous blue city streets of Chefchaouen, Morocco',
  },
  {
    id: 1,
    src: '/gallery/nature1.png',
    title: 'Enchanted Forest',
    category: 'nature',
    price: '$12',
    description: 'Golden sunlight through ancient misty trees',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    title: 'Aurora Dreams',
    category: 'nature',
    price: '$18',
    description: 'Stunning Northern Lights over Iceland',
  },
  
  
  {
    id: 5,
    src: '/gallery/anime1.png',
    title: 'Cyber Sakura',
    category: 'anime',
    price: '$10',
    description: 'Neon cyberpunk warrior with glowing blade',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    title: 'Digital Cosmos',
    category: 'anime',
    price: '$12',
    description: 'Vibrant digital art in cosmic style',
  },
  
  
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80',
    title: 'Cosmic Drift',
    category: 'wallpaper',
    price: 'Free',
    description: 'Deep space with colorful nebula formations',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
    title: 'Nebula Storm',
    category: 'wallpaper',
    price: '$8',
    description: 'Swirling galactic dust and starlight',
  },
  {
    id: 11,
    src: '/gallery/fantasy1.png',
    title: 'Dragon Isle',
    category: 'fantasy',
    price: '$18',
    description: 'Epic floating islands with soaring dragons',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
    title: 'Crystal Cave',
    category: 'fantasy',
    price: '$15',
    description: 'Magical crystalline underground cavern',
  },
  {
    id: 13,
    src: '/gallery/architecture1.png',
    title: 'Glass Tower',
    category: 'architecture',
    price: '$20',
    description: 'Futuristic skyscraper at dusk',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    title: 'Geometric Zen',
    category: 'architecture',
    price: '$17',
    description: 'Minimalist modern architectural design',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80',
    title: 'King of Savanna',
    category: 'animals',
    price: '$14',
    description: 'Majestic tiger in golden light',
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80',
    title: 'Arctic Fox',
    category: 'animals',
    price: '$12',
    description: 'Arctic fox in winter landscape',
  },

  // ─── Mountains ───────────────────────────────────
  {
    id: 17,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: 'Majestic Peaks',
    category: 'nature',
    price: '$14',
    description: 'Epic mountain range under dramatic storm clouds',
  },
  {
    id: 18,
    src: 'https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&q=80',
    title: 'Alpine Crown',
    category: 'nature',
    price: '$16',
    description: 'Sharp Dolomite peaks piercing through morning mist',
  },
  {
    id: 19,
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    title: 'Valley of Giants',
    category: 'nature',
    price: '$18',
    description: 'Breathtaking aerial view of mountain valley at sunrise',
  },
  {
    id: 20,
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    title: 'Midnight Summit',
    category: 'wallpaper',
    price: '$20',
    description: 'Snowy mountain peaks under the Milky Way galaxy',
  },

  // ─── Sea & Ocean ─────────────────────────────────
  {
    id: 21,
    src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
    title: 'Ocean Fury',
    category: 'nature',
    price: '$15',
    description: 'Dramatic crashing ocean waves against rocky cliffs',
  },
  {
    id: 22,
    src: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&q=80',
    title: 'Crystal Waters',
    category: 'nature',
    price: '$13',
    description: 'Turquoise tropical sea with pristine white sand beach',
  },
  {
    id: 23,
    src: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=800&q=80',
    title: 'Golden Shore',
    category: 'nature',
    price: '$17',
    description: 'Stunning beach at golden hour with vibrant sky reflections',
  },
  {
    id: 24,
    src: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80',
    title: 'Sea of Fire',
    category: 'wallpaper',
    price: '$19',
    description: 'Blazing orange sunset mirrored perfectly on calm ocean surface',
  },

  // ─── Anime ───────────────────────────────────────
  {
    id: 25,
    src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80',
    title: 'Neon Dreams',
    category: 'anime',
    price: '$11',
    description: 'Vibrant colorful digital artwork in anime aesthetic style',
  },
  {
    id: 26,
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    title: 'Cyber World',
    category: 'anime',
    price: '$13',
    description: 'Futuristic cyberpunk anime-inspired digital atmosphere',
  },
  
  // ─── Legendary Additions (Nano Banana) ───────────
  // Fantasy
  {
    id: 27,
    src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80',
    title: 'Dragon\'s Lair',
    category: 'fantasy',
    price: '$25',
    description: 'Mystical ancient ruin surrounded by magical glowing fog',
  },
  {
    id: 28,
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
    title: 'Enchanted Forest',
    category: 'fantasy',
    price: '$20',
    description: 'Deep woodland glowing with mysterious magical lights',
  },
  {
    id: 29,
    src: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80',
    title: 'The Dark Tower',
    category: 'fantasy',
    price: '$30',
    description: 'Imposing gothic castle underneath a blood-red moon',
  },
  {
    id: 30,
    src: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=800&q=80',
    title: 'Crystal Kingdom',
    category: 'fantasy',
    price: '$28',
    description: 'Floating islands with giant glowing crystals',
  },
  
  // Cars
  
  
  
  
  

  // Architecture
  {
    id: 36,
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    title: 'Modern Minimalism',
    category: 'architecture',
    price: '$17',
    description: 'Stunning modern luxury villa with infinity pool at dusk',
  },
  {
    id: 37,
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    title: 'Glass Giants',
    category: 'architecture',
    price: '$15',
    description: 'Towering skyscrapers reflecting each other in dense city',
  },
  {
    id: 38,
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Corporate Elegance',
    category: 'architecture',
    price: '$16',
    description: 'Sleek, futuristic interior of a tech company headquarters',
  },
  {
    id: 39,
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    title: 'Geometric Harmony',
    category: 'architecture',
    price: '$14',
    description: 'Abstract architectural shapes casting sharp dramatic shadows',
  },

  // Animals
  {
    id: 40,
    src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80',
    title: 'The King\'s Stare',
    category: 'animals',
    price: '$24',
    description: 'Intense close-up of a majestic male lion',
  },
  {
    id: 41,
    src: 'https://images.unsplash.com/photo-1540126081273-df26b528b19a?w=800&q=80',
    title: 'Silent Predator',
    category: 'animals',
    price: '$20',
    description: 'Beautiful spotted leopard resting on a tree branch',
  },
  {
    id: 42,
    src: 'https://images.unsplash.com/photo-1555169062-013468b47731?w=800&q=80',
    title: 'Sky Hunter',
    category: 'animals',
    price: '$18',
    description: 'Bald eagle captured mid-flight with wings fully spread',
  },
  {
    id: 43,
    src: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&q=80',
    title: 'Ocean Monarch',
    category: 'animals',
    price: '$22',
    description: 'Massive great white shark breaching the ocean surface',
  },

  // Portrait
  
  
  
  

  // Wallpaper
  {
    id: 48,
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    title: 'Liquid Gold',
    category: 'wallpaper',
    price: '$12',
    description: 'Abstract flowing liquid metal with golden highlights',
  },
  {
    id: 49,
    src: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80',
    title: 'Purple Haze',
    category: 'wallpaper',
    price: '$11',
    description: 'Smooth gradient wallpaper transitioning from deep purple to pink',
  },
  {
    id: 50,
    src: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&q=80',
    title: 'Neon Grid',
    category: 'wallpaper',
    price: '$14',
    description: 'Retrowave 80s style glowing grid receding into the horizon',
  },
  {
    id: 51,
    src: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80',
    title: 'Dark Matter',
    category: 'wallpaper',
    price: '$15',
    description: 'Deep black 3D abstract shapes with subtle metallic edges',
  },

  // Nature
  {
    id: 52,
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
    title: 'Autumn Serenity',
    category: 'nature',
    price: '$16',
    description: 'Peaceful lake reflecting vibrant orange and red autumn trees',
  },
  {
    id: 53,
    src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80',
    title: 'Into the Wild',
    category: 'nature',
    price: '$17',
    description: 'A moody, misty pine forest path fading into the fog',
  },
  {
    id: 54,
    src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80',
    title: 'Emerald Canopy',
    category: 'nature',
    price: '$15',
    description: 'Looking up through the dense, lush green leaves of a rainforest',
  },
  
  // Anime
  {
    id: 55,
    src: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?w=800&q=80',
    title: 'Spirited Away',
    category: 'anime',
    price: '$20',
    description: 'Beautiful traditional Japanese street looking like a Ghibli scene',
  },
  {
    id: 56,
    src: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&q=80',
    title: 'City in the Clouds',
    category: 'anime',
    price: '$22',
    description: 'Breathtaking fantasy anime sky-city floating above the clouds',
  }
];
