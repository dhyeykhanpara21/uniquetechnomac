import { Product, Testimonial, Industry, TimelineItem, TeamMember, Stat, Feature } from '../types';

import wormShaftMain from '../../assets/worm_shaft_main.png';
import wormShaftDetail from '../../assets/worm_shaft_detail.png';
import cncMain from '../../assets/cnc_main.png';
import cncDetail from '../../assets/cnc_detail.png';
import forgingsMain from '../../assets/forgings_main.png';
import forgingsDetail from '../../assets/forgings_detail.png';
import tractorMain from '../../assets/tractor_main.png';
import tractorDetail from '../../assets/tractor_detail.png';
import hydraulicMain from '../../assets/hydraulic_main.png';
import hydraulicDetail from '../../assets/hydraulic_detail.png';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: wormShaftMain,
    detailImage: wormShaftDetail,
    title: 'Precision Worm Shafts & Gears',
    subtitle: 'HEAVY AUTOMOBILE GEAR BOX PARTS',
    description: 'Manufacturers of precision worm-shafts, slow speed shafts, sleeves, and transmission gear assemblies for automobiles, textile units, and tractors.',
    ctaText: 'Explore Gears',
    ctaLink: '/products?category=Gears',
    badgeText: 'Slow Speed Shafts',
    badgeIcon: 'Settings2',
    tabLabel: 'Gears'
  },
  {
    id: 'slide-2',
    image: cncMain,
    detailImage: cncDetail,
    title: 'VMC & CNC Machining Solutions',
    subtitle: 'ADVANCED VERTICAL MACHINING CENTERS',
    description: 'Equipped with multiple BFW/Jyoti VMC machines and Super Jobber CNC cutters for precision steel alloy shaping with micrometer tolerances.',
    ctaText: 'View CNC Services',
    ctaLink: '/products?category=CNC%20Machining',
    badgeText: 'VMC Machining',
    badgeIcon: 'Cpu',
    tabLabel: 'CNC Cutting'
  },
  {
    id: 'slide-3',
    image: forgingsMain,
    detailImage: forgingsDetail,
    title: 'Heavy Forgings & Castings',
    subtitle: 'GRADED CAST IRON & INVESTMENT CASTINGS',
    description: 'Producing heavy carbon steel forgings, graded cast iron parts, brass components, and stainless steel bar fittings according to client specs.',
    ctaText: 'Get Quote',
    ctaLink: '/inquiry',
    badgeText: 'Graded Cast Iron',
    badgeIcon: 'ShieldAlert',
    tabLabel: 'Forgings'
  },
  {
    id: 'slide-4',
    image: tractorMain,
    detailImage: tractorDetail,
    title: 'Automobile & Tractor Spares',
    subtitle: 'TRACTOR SUB-CONTRACTOR VENDOR',
    description: 'Registered sub-contractor and vendor supplying high-precision gear box parts, sleeves, and axle shafts to Mahindra, Sonalika, and leading automakers.',
    ctaText: 'Explore Spares',
    ctaLink: '/products?category=Auto%20Spares',
    badgeText: 'Mahindra / Sonalika',
    badgeIcon: 'Settings2',
    tabLabel: 'Auto Spares'
  },
  {
    id: 'slide-5',
    image: hydraulicMain,
    detailImage: hydraulicDetail,
    title: 'Delta Hydraulic Systems',
    subtitle: 'HYDRAULIC COUPLINGS & ACTUATORS',
    description: 'Bespoke industrial hydraulic pumps, couplers, double-action rams, and custom cylinder assemblies for automotive and agricultural operations.',
    ctaText: 'View Hydraulics',
    ctaLink: '/products?category=Hydraulics',
    badgeText: 'Double-Action Rams',
    badgeIcon: 'ShieldAlert',
    tabLabel: 'Hydraulics'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'feat-1',
    title: 'High-Strength Materials',
    description: 'Every gear shaft is manufactured using premium alloy bar steels and forgings for extra torsional strength and wear resistance.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'feat-2',
    title: 'Precision Machining Limits',
    description: 'Strict tool calibration ensures gear dimensions pass micrometric checks with zero error margins.',
    iconName: 'Settings2'
  },
  {
    id: 'feat-3',
    title: 'Advanced Machine Units',
    description: 'Operating multiple high-grade VMC machines (BFW/Jyoti) and Super Jobber CNC centers in Rajkot.',
    iconName: 'Cpu'
  },
  {
    id: 'feat-4',
    title: 'Sub-Contractor Vendor',
    description: 'Experienced sub-contract vendor providing high quality tractor parts for Mahindra, Sonalika, and local markets.',
    iconName: 'Globe2'
  },
  {
    id: 'feat-5',
    title: 'Metrology Lab Controls',
    description: 'Quality checked using high-end Digital Verniers, Dial Indicators, Depth Gauges, and Bore Gauges from Mitutoyo & Baker.',
    iconName: 'Clock'
  },
  {
    id: 'feat-6',
    title: 'Registered Group Units',
    description: 'Backed by group companies: Unique Engi Mech, S.G. Engineers, Iconic CNC Cuttings, and Delta Hydrolic.',
    iconName: 'Award'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'ind-1',
    name: 'Automobile Components',
    description: 'Supplying gears, transmission shafts, sleeves, and machined forgings for light and heavy motor vehicles.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?auto=format&fit=crop&w=800&q=80',
    iconName: 'Factory'
  },
  {
    id: 'ind-2',
    name: 'Tractor Spares',
    description: 'Developing heavy-duty tractor components as a subcontractor vendor for major national brands.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sprout'
  },
  {
    id: 'ind-3',
    name: 'CNC & VMC Solutions',
    description: 'Providing precise contract vertical milling, cnc cutting, threading, and cylindrical grinding services.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Wrench'
  },
  {
    id: 'ind-4',
    name: 'Hydraulics & Pumps',
    description: 'Integrated manufacturing of hydraulic cylinders, double-action rams, and custom fluid couplers.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80',
    iconName: 'Pickaxe'
  },
  {
    id: 'ind-5',
    name: 'Textile Machinery',
    description: 'Smelting and cutting main drive gears, sleeves, and slow-speed pulleys for large spinning frames.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Factory'
  },
  {
    id: 'ind-6',
    name: 'Graded Cast Iron',
    description: 'Precision castings, brass parts, and high-heat carbon steel components for diverse operations.',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
    iconName: 'HardHat'
  }
];

export const STATS: Stat[] = [
  { id: 'stat-1', value: 1200, label: 'Delivered Projects', suffix: '+' },
  { id: 'stat-2', value: 15, label: 'Machining Centers', suffix: '+' },
  { id: 'stat-3', value: 24, label: 'Years Experience', suffix: '+' },
  { id: 'stat-4', value: 19, label: 'Active Staff', suffix: '+' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-worm-gear',
    name: 'Precision Worm Gear Shaft',
    category: 'Gears',
    image: wormShaftMain,
    shortDesc: 'Premium automobile gearbox parts crafted from hardened alloy steel with high-torque capacity.',
    longDesc: 'Our Precision Worm Gear Shafts are specifically developed for heavy transmission configurations. Machined using certified high-tensile alloy bar steel, they offer excellent wear resistance and silent operations under continuous loads. Ideal for automobile gearboxes, steering units, and industrial reduction systems.',
    specifications: {
      'Material': 'Case Hardened Alloy Bar Steel',
      'Hardness': '50 - 55 HRC (Oil Quenched)',
      'Module Range': 'M1.0 - M6.0',
      'Helix Angle': 'Right Hand / Left Hand (Precision Cut)',
      'Tolerance': 'ISO Grade 6 / DIN 3962',
      'Applications': 'Automobile Steering & Gearboxes'
    },
    relatedProductIds: ['prod-tractor-parts', 'prod-textile-gear']
  },
  {
    id: 'prod-tractor-parts',
    name: 'Tractor Gear Box Parts',
    category: 'Auto Spares',
    image: tractorMain,
    shortDesc: 'Registered subcontractor gear systems and sleeves matching Mahindra & Sonalika tractor dimensions.',
    longDesc: 'Developed to withstand rigorous agricultural stresses, our Tractor Gear Box Parts are precision cut on CNC toolheads. Every batch passes strict micrometer inspections to ensure exact compliance with vendor parameters. Features smooth gear mesh profiles, minimizing mechanical transmission losses.',
    specifications: {
      'Tractor Brand': 'Mahindra / Sonalika / Universal Fit',
      'Part Types': 'Slow Speed Shaft, Main Drive Sleeve',
      'Smelting Matrix': 'High Carbon Structural Forgings',
      'Machining Unit': 'VMC BFW / Jyoti Array',
      'Grinding': 'Cylindrical Ground (within 0.01mm)',
      'Wear Protection': 'Case Carburized Heat Treatment'
    },
    relatedProductIds: ['prod-worm-gear', 'prod-stainless-sleeve']
  },
  {
    id: 'prod-cast-iron',
    name: 'Graded Cast Iron Smeltings',
    category: 'Forgings',
    image: forgingsMain,
    shortDesc: 'Premium graded cast iron and carbon steel investment castings built to custom blueprints.',
    longDesc: 'We supply high-grade cast iron casings, brass fittings, and stainless steel investment castings. Utilizing automated gas-fired furnaces, our casting structures exhibit uniform molecular density, preventing air pocket fractures under high-pressure applications.',
    specifications: {
      'Cast Grades': 'FG 200 / FG 260 / Spheroidal Graphite',
      'Materials': 'Cast Iron, Stainless Steel, Brass Alloys',
      'Tolerance Class': 'ISO 8062-3 DCTG6',
      'Weight Range': '0.5 kg - 45 kg per unit',
      'Surfacing': 'Shot Blasted & Anti-Rust Lubricated',
      'Inspection': 'Bore Gauge & Vernier Caliper Verified'
    },
    relatedProductIds: ['prod-alloy-bars', 'prod-stainless-sleeve']
  },
  {
    id: 'prod-textile-gear',
    name: 'Textile Parts Main Drive Gear',
    category: 'Gears',
    image: cncDetail,
    shortDesc: 'High durability main drive spur gears and slow-speed shafts optimized for spinning machinery.',
    longDesc: 'Designed to handle continuous multi-shift operations in textile mills, these main drive spur gears provide uniform rotational speeds. Machined using precision shapers and CNC threaders to eliminate structural vibration and drag.',
    specifications: {
      'Machinery': 'Ring Spinning & Carding Frames',
      'Type': 'Spur / Helical Gears',
      'Material': 'Medium Carbon Alloy Steel / Brass',
      'Outer Diameter': 'Up to 250 mm',
      'Keyway': 'CNC Broached / Slotted',
      'Teeth Profile': 'Involute (DIN 3967)'
    },
    relatedProductIds: ['prod-worm-gear', 'prod-brass-parts']
  },
  {
    id: 'prod-hydraulic-coupling',
    name: 'Delta Hydraulic Ram Piston',
    category: 'Hydraulics',
    image: hydraulicMain,
    shortDesc: 'Double-action hydraulic cylinder couplings and ram pistons with polished chrome shafts.',
    longDesc: 'Delta Hydrolic cylinder rams are built to provide consistent load lift capacities. Features mirror-polished hard chrome-plated steel rods and high-durability double-lip rubber seals, eliminating hydraulic fluid leaks under extreme pressure cycles.',
    specifications: {
      'Operation': 'Double-Action / Single-Action Ram',
      'Working Pressure': '160 - 250 Bar',
      'Rod Treatment': 'Hard Chrome Plated (25-30 Micron)',
      'Seal Matrix': 'Polyurethane Double Lip',
      'Bore Diameter': 'Dia. 40mm - 120mm',
      'End Fitting': 'Threaded / Swivel Eye joint'
    },
    relatedProductIds: ['prod-tractor-parts', 'prod-stainless-sleeve']
  },
  {
    id: 'prod-alloy-bars',
    name: 'Machined Alloy Bar Components',
    category: 'CNC Machining',
    image: cncMain,
    shortDesc: 'Precision shafts, spindles, and custom spacing sleeves machined from graded carbon bar steel.',
    longDesc: 'Our Machined Alloy Bar Components are manufactured on multiple vertical machining centers. Excellent dimensional stability makes them suitable for direct assembly configurations in pump housings and engine blocks.',
    specifications: {
      'Machine Made': 'BFW VMC / Super Jobber CNC',
      'Capacity': 'Dia. up to 300mm x L 450mm',
      'Material': 'En8 / En9 / En24 Graded Steel Bars',
      'Thread Class': 'ISO Metric M3 to M24 (Threading Machine)',
      'Alignment Limit': 'Parallelism within 15 Microns',
      'Least Count': 'Mitutoyo Digitally Verified'
    },
    relatedProductIds: ['prod-stainless-sleeve', 'prod-brass-parts']
  },
  {
    id: 'prod-brass-parts',
    name: 'Precision Lathe Brass Fitting',
    category: 'CNC Machining',
    image: cncDetail,
    shortDesc: 'Threaded brass sleeves, bushings, and fluid couplers turned on high speed automatic lathes.',
    longDesc: 'We manufacture customized brass bushings and couplers for fluid lines and mechanical joints. Made from premium free-cutting brass bar stock, ensuring smooth threads and high corrosion resistance.',
    specifications: {
      'Material': 'Free Cutting Brass Grade I / II',
      'Threads': 'BSP, NPT, Metric (M03 to M24)',
      'Tolerance': 'Linear within 0.02 mm',
      'Finishing': 'Natural / Acid Washed / Nickel Plated',
      'Machining': 'High-Speed Automatic Lathe'
    },
    relatedProductIds: ['prod-alloy-bars', 'prod-stainless-sleeve']
  },
  {
    id: 'prod-stainless-sleeve',
    name: 'Stainless Steel Bar Sleeve',
    category: 'CNC Machining',
    image: hydraulicDetail,
    shortDesc: 'Corrosion resistant stainless steel sleeves and spacers ground on centreless grinders.',
    longDesc: 'Our Stainless Steel Bar Sleeves are ground using advanced centreless grinding setups to ensure precise concentricity. Extremely smooth surface finish reduces friction on rotating shafts, extending bearing lifespans.',
    specifications: {
      'Material': 'SS 304 / SS 316 / SS 410',
      'Outside Diameter': 'Ground up to Dia. 100.00 mm',
      'Concentricity': 'Within 8 Microns',
      'Surface Roughness': 'Ra 0.4 Micron or better',
      'Grinder Unit': 'Centreless Grinding Machine (Scarlo)'
    },
    relatedProductIds: ['prod-alloy-bars', 'prod-brass-parts']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Amit Patel',
    role: 'Procurement Specialist',
    company: 'AgriDrive Tractor Parts Ltd',
    rating: 5,
    comment: 'Unique Techno Mech has been our on-line vendor for tractor gear sleeves for 4 years. Their rating on delivery and quality is excellent. Mahindra subcontractor specs are always matched perfectly.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-2',
    name: 'Heinrich Schmidt',
    role: 'Lead Project Engineer',
    company: 'EuroMech Gear Systems GmbH',
    rating: 5,
    comment: 'Exceptional precision on case carburized worm gears. Standard alignment check results have been flawless. The cylindrical ground surfaces are within specified ISO limits.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-3',
    name: 'Dileep Sanghani',
    role: 'Foundry Director',
    company: 'Saurashtra Castings & Forgings',
    rating: 5,
    comment: 'We outsource VMC finish machining to Unique Techno Mech. Their BFW VMC machines handle high-density carbon steel blocks easily, delivering precise alignments on every consignment.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export const GALLERY = [
  {
    id: 'gal-1',
    image: wormShaftMain,
    title: 'Worm Shaft Turning',
    category: 'Gears'
  },
  {
    id: 'gal-2',
    image: cncMain,
    title: 'BFW VMC Setup',
    category: 'CNC Machining'
  },
  {
    id: 'gal-3',
    image: forgingsMain,
    title: 'Graded Castings',
    category: 'Forgings'
  },
  {
    id: 'gal-4',
    image: tractorMain,
    title: 'Mahindra Shafts',
    category: 'Auto Spares'
  },
  {
    id: 'gal-5',
    image: hydraulicMain,
    title: 'Delta Rams Assembly',
    category: 'Hydraulics'
  },
  {
    id: 'gal-6',
    image: wormShaftDetail,
    title: 'Micrometer Checking',
    category: 'Gears'
  },
  {
    id: 'gal-7',
    image: cncDetail,
    title: 'CNC Spindle Cut',
    category: 'CNC Machining'
  },
  {
    id: 'gal-8',
    image: forgingsDetail,
    title: 'Forging Core Smelt',
    category: 'Forgings'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'time-1',
    year: '2002',
    title: 'Unique Inception',
    description: 'Established Unique Techno Mech in Rajkot, Gujarat, beginning custom manual lathe operations with a staff of 4.'
  },
  {
    id: 'time-2',
    year: '2008',
    title: 'CNC Units Commissioned',
    description: 'Acquired first automatic CNC lathe units and expanded vendor supply to local automobile subcontracts.'
  },
  {
    id: 'time-3',
    year: '2014',
    title: 'GIDC Vavdi Relocation',
    description: 'Relocated to Vavdi Road Corner, Rajkot, expanding corporate footprint to include S.G. Engineers and Unique Engi Mech.'
  },
  {
    id: 'time-4',
    year: '2020',
    title: 'Advanced VMC Array',
    description: 'Commissioned multiple vertical machining centers (VMC BFW/Jyoti) and introduced digital metrology control systems.'
  },
  {
    id: 'time-5',
    year: '2026',
    title: 'Delta Hydraulics Launch',
    description: 'Formed Delta Hydrolic division, offering integrated double-action ram pistons and specialized gear shafts.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dhaval Vaishnani',
    role: 'Director & Metallurgical Lead',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'metallurgical developer with 20+ years of industrial experience. He manages technical product development, vendor agreements, and custom client dimensions.'
  },
  {
    id: 'team-2',
    name: 'Dimple Vaishnani',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Oversees day-to-day manufacturing layouts across the GIDC Rajkot plants, managing raw alloy inventory, casting safety protocols, and staff allocations.'
  },
  {
    id: 'team-3',
    name: 'Nikunj Patel',
    role: 'Works Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Controls operations across all CNC, VMC, and shaping machine bays, scheduling shifts for 15+ skilled laborers to maintain on-line delivery cycles.'
  },
  {
    id: 'team-4',
    name: 'Rahul Patel',
    role: 'Head of Quality Inspection',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Directs the metrology check station, certifying component diameters using calibrated Mitutoyo digital verniers, Baker depth gauges, and bore dials.'
  }
];

export const FAQS = [
  {
    question: 'What types of gears and shafts are you specialized in manufacturing?',
    answer: 'Unique Techno Mech specializes in manufacturing worm shafts, slow speed shafts, sleeves, transmission spur gears, helical gears, and textile drive gears. We act as sub-contractor vendors for automobile parts and tractor gear box systems (matching Mahindra and Sonalika dimensions).'
  },
  {
    question: 'What is your machining capacity for vertical milling (VMC) and CNC operations?',
    answer: 'Our manufacturing units are equipped with 4 VMC machines (BFW/Jyoti) and 2 CNC machines (Super Jobber XL). Our processing capacity is up to Dia. 300.00 mm x L 450.00 mm. We also operate threading machines (M3 to M24), shaper tools, and centreless grinders (up to Dia. 100.00 mm).'
  },
  {
    question: 'How do you guarantee quality tolerances on customized alloy steel components?',
    answer: 'We maintain strict metrology controls using premium digital measuring instruments (Mitutoyo and Baker). Our digital verniers, micrometers, and bore gauges have least counts as low as 0.001 mm. Standard inspection logs are compiled for every dispatch batch.'
  },
  {
    question: 'Where are your manufacturing plants located, and can we order custom forgings?',
    answer: 'All our group units (Unique Engi Mech, S.G. Engineers, Iconic CNC Cuttings, and Delta Hydrolic) are located in Rajkot, Gujarat (India). Yes, we manufacture custom forgings, graded cast iron castings, brass components, and SS sleeves based on client blueprints. You can submit dimensions via our Inquiry Form.'
  }
];
