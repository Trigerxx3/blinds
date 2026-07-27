import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'free-measurement',
    title: 'Free In-Home Laser Measurement',
    shortDescription: 'Precision laser measuring service at your doorstep to guarantee flawless custom fit without margin for error.',
    fullDescription: 'Our certified window technicians visit your residence or commercial property with state-of-the-art digital laser measurement tools. We record exact millimetric width, drop depth, casing squareness, and obstruction clearings for every window.',
    iconName: 'Ruler',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      '100% Free with zero obligation',
      'Millimeter-exact laser precision',
      'On-site window casing & depth assessment',
      'Instant digital quote calculation'
    ]
  },
  {
    id: 'interior-consultation',
    title: 'Expert Interior Design Consultation',
    shortDescription: 'Dedicated interior design experts helping you pick fabric swatches, color palettes, and motorization options.',
    fullDescription: 'Not sure whether sheer linen, blackout velvet, or motorized zebra blinds suit your room daylight? Our experienced interior decor team brings hundreds of tactile fabric swatches directly to your room lighting to match your furniture and wall colors.',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Tactile fabric sample catalog brought to your home',
      'Daylight & artificial light shade testing',
      'Smart home automation ecosystem advice',
      'Custom color & texture matching'
    ]
  },
  {
    id: 'custom-manufacturing',
    title: 'Bespoke Custom Manufacturing',
    shortDescription: 'Hand-tailored drapery and custom-assembled blinds built in our local precision workshop.',
    fullDescription: 'Every blind and curtain is tailored to order in our state-of-the-art atelier. From hand-sewn French pinch pleats to high-precision aluminum slat cutting, we enforce strict quality standards before any product leaves our facility.',
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Hand-stitched header options & lead weighted hems',
      'Kiln-dried sustainable timber sourcing',
      'UV & flame-retardant textile certification',
      'Custom valances & pelmets available'
    ]
  },
  {
    id: 'professional-installation',
    title: 'White-Glove Professional Installation',
    shortDescription: 'Clean, silent, and secure installation by master technicians equipped with heavy-duty anchors.',
    fullDescription: 'Our master installation team handles everything with white gloves. We install concealed ceiling tracks, wall brackets, and smart motor wiring cleanly without leaving dust or wall blemishes behind.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'White-glove clean installation',
      'Heavy-duty wall anchor securing for heavy velvet drapes',
      'Somfy smart motor pairing & app setup',
      'Post-installation clean up & old window treatment disposal'
    ]
  },
  {
    id: 'repairs-maintenance',
    title: 'Repairs, Maintenance & Re-stringing',
    shortDescription: 'Comprehensive repair service for motorized shades, mechanism replacement, and fabric steam cleaning.',
    fullDescription: 'Protect your window investment with our long-term repair and maintenance program. We replace broken tilt wands, re-string worn venetian cords, replace batteries, and provide professional fabric steam cleaning.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Motor battery replacement & reprogramming',
      'Blind cord re-stringing & clutch replacement',
      'In-situ curtain steam cleaning',
      'Lifetime technical support'
    ]
  }
];
