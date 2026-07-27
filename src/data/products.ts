import { Product } from '@/types';

export const productsData: Product[] = [
  {
    id: 'roller-blinds-luxe',
    name: 'Architectural Sunscreen Roller Blinds',
    category: 'Roller Blinds',
    categorySlug: 'roller-blinds',
    shortDescription: 'Sleek, minimalist roller shades designed for effortless solar heat reflection and glare reduction.',
    fullDescription: 'Our Architectural Sunscreen Roller Blinds provide the perfect balance of view preservation and thermal comfort. Crafted with precision-woven fiberglass and PVC core yarns, these blinds block up to 95% of harmful UV rays while allowing pleasant natural daylight to illuminate your space. Ideal for contemporary residences and commercial high-rises.',
    priceStartingFrom: 89,
    rating: 4.9,
    reviewsCount: 142,
    isFeatured: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Sand Beige', hex: '#D7C4B7' },
      { name: 'Oatmeal White', hex: '#F0EBE1' },
      { name: 'Slate Gray', hex: '#636569' },
      { name: 'Charcoal', hex: '#333438' },
      { name: 'Warm Taupe', hex: '#8C7A6B' }
    ],
    material: 'High-Density Solar Screen (30% Polyester, 70% PVC)',
    opacity: 'Semi-Opaque',
    features: [
      'Reduces ambient room temperature by up to 6°C',
      'Flame-retardant NFPA 701 certified',
      'Easy-wipe anti-static dust repelling finish',
      'Precision chain or cordless spring system'
    ],
    recommendedRooms: ['Living Room', 'Office', 'Commercial'],
    specifications: {
      maxWidth: '320 cm',
      maxHeight: '400 cm',
      operation: 'Manual Chain / Smart Motorized Integration',
      warranty: '5 Years Manufacturer Warranty',
      careInstructions: 'Wipe down with soft micro-fiber cloth damp with warm soapy water.',
      uvProtection: '95% UV Filtration'
    }
  },
  {
    id: 'zebra-blinds-dual',
    name: 'Dual-Shade Elegance Zebra Blinds',
    category: 'Zebra Blinds',
    categorySlug: 'zebra-blinds',
    shortDescription: 'Innovative dual-layer fabric alternating sheer and solid bands for instant light-to-privacy control.',
    fullDescription: 'Experience fluid light management with our Dual-Shade Zebra Blinds. Featuring alternating horizontal bands of opaque textile and crystal sheer fabric, you can seamlessly shift between complete open daylight views, gentle diffused light, and total evening privacy with a subtle tug.',
    priceStartingFrom: 119,
    rating: 4.8,
    reviewsCount: 98,
    isFeatured: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c5173?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c5173?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Ivory Cream', hex: '#F3EFE0' },
      { name: 'Cashmere Gray', hex: '#A8A39D' },
      { name: 'Espresso Bronze', hex: '#4A3B32' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    material: '100% Woven Jacquard Polyester',
    opacity: 'Semi-Opaque',
    features: [
      'Instant privacy adjustment without raising the full shade',
      'Sleek enclosed aluminum cassette top valance',
      'Child-safe hidden tensioners available',
      'Stain-resistant textile treatment'
    ],
    recommendedRooms: ['Bedroom', 'Living Room', 'Office'],
    specifications: {
      maxWidth: '260 cm',
      maxHeight: '300 cm',
      operation: 'Continuous Cord Loop / Remote Control',
      warranty: '5 Years Warranty',
      careInstructions: 'Feather duster or light vacuum on lowest suction setting.',
      uvProtection: '85% UV Filtration'
    }
  },
  {
    id: 'roman-blinds-heritage',
    name: 'Belgian Linen Custom Roman Blinds',
    category: 'Roman Blinds',
    categorySlug: 'roman-blinds',
    shortDescription: 'Tailored soft fabric folds that create classic sophistication and warm acoustic comfort.',
    fullDescription: 'Crafted from authentic 100% European linen, our Custom Roman Blinds fold into crisp, cascading stacks when raised and present a continuous expanse of rich textile texture when lowered. Hand-stitched lining options provide thermal insulation and light absorption tailored to your exact bedroom or living room aesthetic.',
    priceStartingFrom: 145,
    rating: 4.9,
    reviewsCount: 115,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Natural Flax', hex: '#C2B69D' },
      { name: 'Soft Cream', hex: '#F7F3E9' },
      { name: 'Sage Linen', hex: '#9EAA94' },
      { name: 'Warm Charcoal', hex: '#444240' }
    ],
    material: '100% Organic Linen with Cotton Lining',
    opacity: 'Room Darkening',
    features: [
      'Soft cascading folds with invisible structural stays',
      'Thermal insulating lining options',
      'Acoustic sound dampening qualities',
      'Custom border trim details available'
    ],
    recommendedRooms: ['Bedroom', 'Living Room', 'Hotel'],
    specifications: {
      maxWidth: '240 cm',
      maxHeight: '280 cm',
      operation: 'Cordless Push-Up / Chain Pulley System',
      warranty: '3 Years Warranty',
      careInstructions: 'Professional dry clean recommended.',
      uvProtection: '90% UV Block'
    }
  },
  {
    id: 'venetian-blinds-modern',
    name: 'Precision Aluminum Venetian Blinds',
    category: 'Venetian Blinds',
    categorySlug: 'venetian-blinds',
    shortDescription: 'Ultra-durable, moisture-resistant aluminum slats with 180° precise light angle tilting.',
    fullDescription: 'Designed for kitchens, bathrooms, and modern workspace environments, our Precision Aluminum Venetian Blinds feature scratch-resistant spring-tempered slats that tilt smoothly to direct light upward or downward while preserving indoor privacy.',
    priceStartingFrom: 75,
    rating: 4.7,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Brushed Gold', hex: '#B89B66' },
      { name: 'Matte White', hex: '#FBFBFB' },
      { name: 'Gunmetal Silver', hex: '#777C85' },
      { name: 'Jet Black', hex: '#1C1C1D' }
    ],
    material: 'Spring-Tempered Aluminum Slats (25mm)',
    opacity: 'Semi-Opaque',
    features: [
      'Waterproof & anti-corrosive finish',
      '180-degree precision wand tilt mechanism',
      'Ultra-lightweight effortless lifting',
      'Ideal for high humidity environments'
    ],
    recommendedRooms: ['Kitchen', 'Office', 'Commercial'],
    specifications: {
      maxWidth: '300 cm',
      maxHeight: '320 cm',
      operation: 'Tilt Wand & Lift Cord',
      warranty: '5 Years Warranty',
      careInstructions: 'Wipe clean with moist sponge or cloth.',
      uvProtection: '92% UV Block'
    }
  },
  {
    id: 'vertical-blinds-classic',
    name: 'Architectural Vertical Louver Blinds',
    category: 'Vertical Blinds',
    categorySlug: 'vertical-blinds',
    shortDescription: 'Ideal for expansive floor-to-ceiling glass doors and patio windows with smooth traverse movement.',
    fullDescription: 'Our Architectural Vertical Louver Blinds offer a stylish, practical light solution for wide patio doors and glass balconies. Individual vertical vanes rotate 180 degrees to filter harsh afternoon sunlight while providing effortless side traverse opening.',
    priceStartingFrom: 95,
    rating: 4.6,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Textured Linen White', hex: '#F5F5F0' },
      { name: 'Warm Sand', hex: '#D8CCB9' },
      { name: 'Cool Slate', hex: '#878F99' }
    ],
    material: 'Textured Woven Fabric Vanes with Weighted Hem',
    opacity: 'Semi-Opaque',
    features: [
      'Perfect coverage for glass sliding doors',
      'Bottom weightless chain-free design available',
      'Smooth track gliding mechanism',
      'Individual vane replacement if damaged'
    ],
    recommendedRooms: ['Living Room', 'Office', 'Commercial'],
    specifications: {
      maxWidth: '450 cm',
      maxHeight: '350 cm',
      operation: 'Wand Control System',
      warranty: '3 Years Warranty',
      careInstructions: 'Spot clean vanes with mild upholstery cleaner.',
      uvProtection: '88% UV Block'
    }
  },
  {
    id: 'wooden-blinds-oak',
    name: 'Handcrafted Basswood & Oak Venetian Blinds',
    category: 'Wooden Blinds',
    categorySlug: 'wooden-blinds',
    shortDescription: 'Authentic kiln-dried hardwood slats delivering timeless warm elegance and rich timber textures.',
    fullDescription: 'Imbue your home with natural luxury through our Handcrafted Basswood & Oak Blinds. Made from sustainably harvested North American basswood, each 50mm slat is precision sanded and coated with UV-inhibiting clear lacquer to highlight authentic wood grains while resisting warping and fading.',
    priceStartingFrom: 169,
    rating: 4.9,
    reviewsCount: 168,
    isFeatured: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Natural Honey Oak', hex: '#C68B45' },
      { name: 'Walnut Stain', hex: '#5C3A21' },
      { name: 'Whitewashed Pine', hex: '#ECE3D5' },
      { name: 'Ebonized Dark Oak', hex: '#2B2421' }
    ],
    material: '100% Premium North American Basswood',
    opacity: 'Room Darkening',
    features: [
      'Kiln-dried slats resist bowing and humidity warping',
      'Decorative woven cotton cloth tapes option',
      'Custom matching wood valance fascia included',
      'Smooth cord lock mechanism with brass pulleys'
    ],
    recommendedRooms: ['Living Room', 'Office', 'Hotel', 'Bedroom'],
    specifications: {
      maxWidth: '270 cm',
      maxHeight: '300 cm',
      operation: 'Heavy Duty Lift Cord & Dual Tilt Cords',
      warranty: '7 Years Warranty',
      careInstructions: 'Dust regularly with dry micro-fiber duster or wood polish.',
      uvProtection: '98% UV Filtration'
    }
  },
  {
    id: 'motorized-blinds-smart',
    name: 'Somfy-Powered Smart Motorized Shades',
    category: 'Motorized Blinds',
    categorySlug: 'motorized-blinds',
    shortDescription: 'Whisper-quiet motorized window shades controllable via Smartphone, Alexa, Google Home, or Remote.',
    fullDescription: 'Elevate your modern smart home experience with our Somfy-Powered Motorized Shades. Control individual shades or program automated scenes that open with your morning sunrise and lower at bedtime. Features ultra-quiet battery or hardwired motors with solar charging options.',
    priceStartingFrom: 299,
    rating: 5.0,
    reviewsCount: 89,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7ede433c5173?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Luxe Warm Taupe', hex: '#A67C52' },
      { name: 'Crisp Linen White', hex: '#FAFAFA' },
      { name: 'Minimalist Charcoal', hex: '#3B3C3E' }
    ],
    material: 'Premium Sunscreen / Blackout Fabric options',
    opacity: '100% Blackout',
    features: [
      'Voice control integration (Apple HomeKit, Google, Alexa)',
      'Lithium-ion rechargeable battery (1 charge lasts 9-12 months)',
      'Obstacle detection & obstacle stop safety sensor',
      'Optional solar panel trickle charger attachment'
    ],
    recommendedRooms: ['Living Room', 'Bedroom', 'Hotel', 'Office'],
    specifications: {
      maxWidth: '400 cm',
      maxHeight: '450 cm',
      operation: 'Multi-Channel Wireless Remote / App / Voice Command',
      warranty: '10 Years Motor Warranty',
      careInstructions: 'Low maintenance synthetic fabric, wipe clean.',
      uvProtection: '100% Total UV Block'
    }
  },
  {
    id: 'blackout-curtains-velvet',
    name: 'Royal Heavyweight Blackout Velvet Curtains',
    category: 'Blackout Curtains',
    categorySlug: 'blackout-curtains',
    shortDescription: 'Luxurious plush velvet drapes integrated with 100% light-blocking thermal lining.',
    fullDescription: 'Transform your bedroom or home theater into a sanctuary of dark, acoustic calmness. Our Royal Heavyweight Velvet Curtains feature high-density woven velvet with a triple-pass black foam backing that blocks 100% of light, dampens outdoor street noise, and insulates against drafts.',
    priceStartingFrom: 189,
    rating: 4.9,
    reviewsCount: 204,
    isFeatured: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Emerald Velvet', hex: '#1C3B2B' },
      { name: 'Midnight Navy', hex: '#1B2936' },
      { name: 'Warm Terracotta', hex: '#B55A3C' },
      { name: 'Golden Honey', hex: '#B88B4A' },
      { name: 'Charcoal Noir', hex: '#262627' }
    ],
    material: '100% Matte Cotton Velvet with 3-Pass Blackout Backing',
    opacity: '100% Blackout',
    features: [
      'Complete 100% room blackout capabilities',
      'Thermal insulation cuts heating & cooling loss by up to 30%',
      'Heavy drape weight creates elegant deep folds',
      'Acoustic noise reduction up to 12dB'
    ],
    recommendedRooms: ['Bedroom', 'Hotel', 'Living Room'],
    specifications: {
      maxWidth: '500 cm per pair',
      maxHeight: '400 cm',
      operation: 'Track Glide / Ring Pull / Motorized Traverse Rod',
      warranty: '5 Years Warranty',
      careInstructions: 'Dry clean only to maintain velvet pile.',
      uvProtection: '100% Light & UV Elimination'
    }
  },
  {
    id: 'sheer-curtains-linen',
    name: 'Ethereal Voile Sheer Linen Curtains',
    category: 'Sheer Curtains',
    categorySlug: 'sheer-curtains',
    shortDescription: 'Light, airy linen-blend drapery that softens sunlight and creates dreamy diffused illumination.',
    fullDescription: 'Breathe effortless elegance into your interior spaces. Our Ethereal Voile Sheer Linen Curtains float gracefully with gentle room breezes, softening harsh daylight into a warm, inviting glow while maintaining daytime privacy.',
    priceStartingFrom: 99,
    rating: 4.8,
    reviewsCount: 135,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Chiffon White', hex: '#FFFFFF' },
      { name: 'Warm Cream', hex: '#F7F4EB' },
      { name: 'Soft Linen Beige', hex: '#E6DEC9' }
    ],
    material: 'Linen & Fine Voile Blend (35% Linen, 65% Poly)',
    opacity: 'Sheer',
    features: [
      'Creates soft dreamy diffused natural light',
      'Lead weighted bottom hem for perfect straight vertical hangs',
      'Wrinkle-resistant luxury weave',
      'Machine washable on delicate cycle'
    ],
    recommendedRooms: ['Living Room', 'Bedroom', 'Hotel'],
    specifications: {
      maxWidth: '600 cm per pair',
      maxHeight: '420 cm',
      operation: 'Rod Pocket / Pinch Pleat Track',
      warranty: '3 Years Warranty',
      careInstructions: 'Machine wash cold on gentle cycle, line dry.',
      uvProtection: '60% UV Filtration'
    }
  },
  {
    id: 'eyelet-curtains-modern',
    name: 'Contemporary Matte Metal Eyelet Drapes',
    category: 'Eyelet Curtains',
    categorySlug: 'eyelet-curtains',
    shortDescription: 'Clean contemporary drapes with large metal grommet rings for smooth, effortless sliding.',
    fullDescription: 'Designed for quick installation and clean modern lines, our Eyelet Curtains feature rust-proof stainless metal grommets inserted into structured heavyweight cotton drapery fabric. Creates uniform S-wave folds when pulled across decorative curtain rods.',
    priceStartingFrom: 110,
    rating: 4.7,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Stone Grey', hex: '#9E9D9B' },
      { name: 'Oat Grain', hex: '#D6CBBA' },
      { name: 'Nordic Blue', hex: '#586A7A' }
    ],
    material: 'Heavyweight Woven Cotton-Poly Blend',
    opacity: 'Semi-Opaque',
    features: [
      'Inner diameter 40mm anti-scratch eyelet rings',
      'Effortless smooth sliding across standard curtain poles',
      'Deep crisp uniform pleat formation',
      'Fully lined hem structure'
    ],
    recommendedRooms: ['Living Room', 'Bedroom', 'Office'],
    specifications: {
      maxWidth: '400 cm per pair',
      maxHeight: '350 cm',
      operation: 'Decorative Pole Slide',
      warranty: '3 Years Warranty',
      careInstructions: 'Gentle dry clean or spot clean.',
      uvProtection: '80% UV Filtration'
    }
  },
  {
    id: 'pleated-curtains-french',
    name: 'French Pinch Pleat Tailored Curtains',
    category: 'Pleated Curtains',
    categorySlug: 'pleated-curtains',
    shortDescription: 'Hand-sewn triple pinch pleats creating timeless architectural elegance and full curtain volume.',
    fullDescription: 'Representing the height of classic curtain tailoring, our French Pinch Pleat Drapes feature hand-tucked triple pleats sewn securely at the header. Paired with custom traverse tracks, they glide silently and create architectural vertical waves from floor to ceiling.',
    priceStartingFrom: 175,
    rating: 4.9,
    reviewsCount: 112,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Silk Champagne', hex: '#E5D6C3' },
      { name: 'Warm Taupe', hex: '#8C7765' },
      { name: 'Slate Slate', hex: '#4B525B' }
    ],
    material: 'Luxury Faux Silk & Cotton Sateen Lined',
    opacity: 'Room Darkening',
    features: [
      'Hand-stitched triple pinch pleat headers',
      'Double fullness for rich luxurious fabric volume',
      'Compatible with motorized ceiling recessed curtain tracks',
      'Custom width options tailored down to the millimeter'
    ],
    recommendedRooms: ['Living Room', 'Bedroom', 'Hotel'],
    specifications: {
      maxWidth: '600 cm per pair',
      maxHeight: '450 cm',
      operation: 'Manual Track Glide / Motorized Traverse',
      warranty: '5 Years Warranty',
      careInstructions: 'Professional dry clean.',
      uvProtection: '92% UV Filtration'
    }
  },
  {
    id: 'custom-curtains-couture',
    name: 'BespoKe Atelier Custom Curtains & Valances',
    category: 'Custom Curtains',
    categorySlug: 'custom-curtains',
    shortDescription: 'Bespoke window couture with custom fabric combinations, trims, valances, and motorization.',
    fullDescription: 'Our Atelier Custom Curtains are designed specifically for unique window shapes, double-height voids, curved bays, and grand architectural spaces. Collaborated directly with our senior interior consultants, choose from hundreds of designer fabrics from Europe and Asia.',
    priceStartingFrom: 250,
    rating: 5.0,
    reviewsCount: 78,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c5173?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c5173?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Custom Swatch Selection', hex: '#A67C52' }
    ],
    material: 'Bespoke Fabrics (Linen, Silk, Velvet, Damask)',
    opacity: 'Room Darkening',
    features: [
      'Personal interior designer consultation included',
      'Custom track bending for bay & bow windows',
      'Custom leading edge borders & decorative fringe trims',
      'Full white-glove laser measurement & installation'
    ],
    recommendedRooms: ['Living Room', 'Bedroom', 'Hotel', 'Commercial'],
    specifications: {
      maxWidth: 'Unlimited Custom Width',
      maxHeight: '800 cm Voids',
      operation: 'Motorized / Smart Home Integrated',
      warranty: '10 Years Premium Warranty',
      careInstructions: 'White-glove dry cleaning service.',
      uvProtection: 'Custom Tailored UV Specs'
    }
  }
];
