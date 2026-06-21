import { Product, Testimonial, CoreValue, Industry, TimelineItem, TeamMember, Stat, Feature } from '../types';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80',
    title: 'High-Capacity Agricultural Tillers',
    subtitle: 'ENGINEERING EXCELLENCE IN SOIL PREPARATION',
    description: 'Designed for robust performance, our professional tillers offer unparalleled efficiency, depth optimization, and fuel-saving operations in any soil conditions.',
    ctaText: 'Explore Machinery',
    ctaLink: '/products?category=Tillage'
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1622359637625-be95a49ec6a0?auto=format&fit=crop&w=1920&q=80',
    title: 'Next-Generation Smart Seeders & Drills',
    subtitle: 'PRECISION SEEDBED CONDITIONING',
    description: 'Empowering smart farming with ultra-exact depth controllers and pneumatic seed flow systems, guaranteeing optimum germination and dynamic crop yields.',
    ctaText: 'View Seeders',
    ctaLink: '/products?category=Seeding'
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&w=1920&q=80',
    title: 'Precision Hydraulic Rotary Harrows',
    subtitle: 'HEAVY TRIPLE-GEAR SYSTEM',
    description: 'Engineered for fine tilth preparation in single passes. Features anti-clogging multi-speed steel gearboxes and state-of-the-art heavy roller pack systems.',
    ctaText: 'Get Quote',
    ctaLink: '/inquiry'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'feat-1',
    title: 'Japanese Advanced Steel Tech',
    description: 'Every rotor blades and gears are manufactured using heat-treated boron steel for extra toughness and wear resistance.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'feat-2',
    title: 'Premium Multi-Speed Gearboxes',
    description: 'Allows easy speed adjustment to match soil density, reducing engine load and optimizing diesel input ratio.',
    iconName: 'Settings2'
  },
  {
    id: 'feat-3',
    title: 'State-of-the-Art R&D Center',
    description: 'Rigorous engineering validations and stress simulations conducted under absolute peak soil impedance scenarios.',
    iconName: 'Cpu'
  },
  {
    id: 'feat-4',
    title: 'Global Export Footprint',
    description: 'Proudly serving heavy industries and farmer cooperatives across 45+ countries with certified quality standards.',
    iconName: 'Globe2'
  },
  {
    id: 'feat-5',
    title: '24/7 Field Tech Support',
    description: 'Your downtime is our clock runtime. We offer on-site maintenance, genuine parts, and quick field replacements.',
    iconName: 'Clock'
  },
  {
    id: 'feat-6',
    title: 'Certified ISO Compliance',
    description: 'All industrial operations adhere tightly to ISO 9001:2015 and ISO 14001:2015 environmental standards.',
    iconName: 'Award'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'ind-1',
    name: 'Agriculture',
    description: 'From precision tillage to smart planting solutions, our farm machinery streamlines crop lifecycles globally.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sprout'
  },
  {
    id: 'ind-2',
    name: 'Manufacturing',
    description: 'Robust smart systems, hydraulic gear rigs, and steel rotors designed for critical assembly configurations.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?auto=format&fit=crop&w=800&q=80',
    iconName: 'Factory'
  },
  {
    id: 'ind-3',
    name: 'Construction',
    description: 'Heavy duty soil compactors, multi-grade levelers, and grading implements designed to build stable foundations.',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
    iconName: 'HardHat'
  },
  {
    id: 'ind-4',
    name: 'Engineering',
    description: 'Advanced machine designs and customized transmission setups crafted for specific mechanical operations.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Wrench'
  },
  {
    id: 'ind-5',
    name: 'Food Processing',
    description: 'Industrial grading, sorting machineries, and post-harvest cleaners complying with strict food grade regulations.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Beef'
  },
  {
    id: 'ind-6',
    name: 'Mining',
    description: 'Rock pulverizers, extra-heavy gear couplings and high-wear steel grinding components for excavation rigs.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80',
    iconName: 'Pickaxe'
  }
];

export const STATS: Stat[] = [
  { id: 'stat-1', value: 15400, label: 'Happy Clients', suffix: '+' },
  { id: 'stat-2', value: 35, label: 'Standard Implements', suffix: '+' },
  { id: 'stat-3', value: 25, label: 'Years Experience', suffix: '+' },
  { id: 'stat-4', value: 240, label: 'Premium Distributors', suffix: '+' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-tiller-pro',
    name: 'Apex Challenger Rotary Tiller',
    category: 'Tillage',
    image: 'https://images.unsplash.com/photo-1594142137910-8b1a8f90bb3e?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Premium dual-speed rotary tiller crafted for medium to heavy clay soils with supreme depth control.',
    longDesc: 'The Apex Challenger Rotary Tiller redefines field soil conditioning. Crafted from ultra-strong structural steel and equipped with high-performance boron steel blades, it provides consistent tilth depth up to 10 inches. Features an enclosed double-lip oil bath chain drive, preventing mud ingress under wet conditions, and a multi-speed heavy gearbox designed for variable tractor power inputs.',
    specifications: {
      'Tractor Power': '45 - 75 HP',
      'Working Width': '1.8m - 2.5m',
      'No. of Blades': '42 - 54',
      'Blades Type': 'L-Type / J-Type (Boron Steel)',
      'Transmission': 'Multi-speed Dual Gear Drive',
      'Rotor Speed': '210 / 240 RPM',
      'Weight': '420 kg - 510 kg'
    },
    relatedProductIds: ['prod-harrow-ultra', 'prod-seeder-smart']
  },
  {
    id: 'prod-harrow-ultra',
    name: 'Atlas-Hydra Power Harrow',
    category: 'Tillage',
    image: 'https://images.unsplash.com/photo-1530263003720-749b657dbd13?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Professional duty harrow designed for speed-bed preparation in high-scale agricultural sectors.',
    longDesc: 'Engineered specifically for heavy agricultural applications, the Atlas-Hydra achieves perfect soil leveling in a single sweep. Its contra-rotating blade system pulverizes dense clods without overturning fertile topsoil. Complete with an integrated packer roller and spring-loaded leveling boards, it guarantees premium uniformity prior to seeding operations.',
    specifications: {
      'Tractor Power': '90 - 150 HP',
      'Working Width': '3.0m - 4.5m',
      'No. of Rotors': '12 - 18',
      'Maximum Depth': '12 inches',
      'Roller Type': 'Cage Roller / Packer Roller',
      'Weight': '1150 kg'
    },
    relatedProductIds: ['prod-tiller-pro', 'prod-seeder-smart']
  },
  {
    id: 'prod-seeder-smart',
    name: 'Zephyr-Pneumatic Smart Seeder',
    category: 'Seeding',
    image: 'https://images.unsplash.com/photo-1574359411659-15573a27f812?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Pneumatic seed drill system with ultra-accurate seed spacing and adjustable depth mechanism.',
    longDesc: 'Zephyr Pneumatic guarantees zero seed waste. With custom smart row calibrators and pressurized airflow seed delivery, each seed is deposited at exact horizontal intervals and vertical depths. Equipped with a digital monitoring controller that connects directly to modern tractor terminals via ISO-BUS sync systems.',
    specifications: {
      'Tractor Power': '75 - 110 HP',
      'No. of Rows': '8 - 12 Rows',
      'Hopper Capacity': '850 Litres',
      'Metering System': 'Dynamic Fluted Roller',
      'Row Spacing': 'Adjustable (15cm - 30cm)',
      'Working Speed': '10 - 14 km/h'
    },
    relatedProductIds: ['prod-harrow-ultra', 'prod-mulcher-heavy']
  },
  {
    id: 'prod-mulcher-heavy',
    name: 'Titan Crop Residue Mulcher',
    category: 'Crop Protection',
    image: 'https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Heavy-duty pulverizer for cotton stalks, wheat straw, sugarcane, and thick orchard prunings.',
    longDesc: 'The Titan Mulcher represents mechanical force at its peak. Developed for heavy post-harvest land cleaning, it easily chops thick crop residue into micronized organic layout, accelerating natural decomposition and enriching soil composition. Equipped with electronically balanced thick rotor walls and hydraulic adjustable tail doors.',
    specifications: {
      'Tractor Power': '55 - 90 HP',
      'Cutting Width': '1.8m - 2.4m',
      'No. of Flails': '24 - 36 (Y-Type Heavy)',
      'Rotor Diameter': '194 mm',
      'Cutting Height': '10mm - 80mm',
      'Weight': '600 kg - 720 kg'
    },
    relatedProductIds: ['prod-tiller-pro', 'prod-shredder-orchard']
  },
  {
    id: 'prod-sprayer-premium',
    name: 'AeroGlide Mounted Boom Sprayer',
    category: 'Crop Protection',
    image: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Advanced fluid sprayer with auto-balancing triple nozzles and dynamic boom heights.',
    longDesc: 'AeroGlide Sprayer brings state-of-the-art protection. It integrates an Italian diaphragm pump coupled with high-density UV-stabilized polyethylene chemical tanks. Standard models incorporate auto-leveling suspension systems preventing nozzle skew over slopes and uneven soil contours.',
    specifications: {
      'Tank Capacity': '600 / 800 / 1000 Litres',
      'Boom Width': '12m - 18m',
      'Pump Capacity': '120 LPM (Diaphragm)',
      'Operating Pressure': '20 - 45 Bar',
      'Nozzle Holder': 'Triple Quick-Jet Turn',
      'Control Valves': '5-Section Solenoid Pack'
    },
    relatedProductIds: ['prod-seeder-smart', 'prod-mulcher-heavy']
  },
  {
    id: 'prod-shredder-orchard',
    name: 'Orchard-Master Bio-Shredder',
    category: 'Crop Protection',
    image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Compact offset chopper optimized for close row vineyards and high-density fruit orchards.',
    longDesc: 'Custom-designed for narrow workspaces. The Orchard-Master features heavy offset hydraulic shifting, allowing high efficiency operations under hanging rows without scraping tree trunks. Reinforced steel chambers withstand dense stone and thick branch impacts easily.',
    specifications: {
      'Tractor Power': '35 - 55 HP',
      'Working Width': '1.4m - 1.8m',
      'Hydraulic Offset': 'Up to 450 mm',
      'No. of Hammers': '14 - 18',
      'Skids': 'Depth Adjustable Side Runners',
      'Roller Diameter': '140 mm'
    },
    relatedProductIds: ['prod-mulcher-heavy', 'prod-tiller-pro']
  },
  {
    id: 'prod-planter-potato',
    name: 'Pluto-Row Semi-Automatic Planter',
    category: 'Seeding',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Automatic mechanical planter designed for high rate seed damage mitigation and uniform ridge forming.',
    longDesc: 'Engineered for potato and heavy bulb planting. Pluto-Row combines deep soil furrow-making, exact bulb drop intervals, fertilizer application, and soil ridge layout creation into a unified automatic operational cycle, reducing manual farm labor costs by 95%.',
    specifications: {
      'Rows': '2 Rows / 4 Rows',
      'Tractor Power': '50 - 80 HP',
      'Cup Size': 'Standard (Adjustable inserts)',
      'Row Spacing': '60cm - 75cm',
      'Planting Spacing': '18cm - 34cm',
      'Weight': '480 kg '
    },
    relatedProductIds: ['prod-seeder-smart', 'prod-harrow-ultra']
  },
  {
    id: 'prod-plow-mouldboard',
    name: 'Ares Hydraulic Reversible Plough',
    category: 'Tillage',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Heavy-duty reversible mouldboard plow featuring precise hydraulic turnover and safety shear system.',
    longDesc: 'Formulated for primary tillage and weed disposal. The Ares Reversible Plow buries stubble completely to allow premium organic transformation. Incorporates an automatic hydraulic system for automatic directional indexing at the end of soil lanes.',
    specifications: {
      'Furrows': '3 Bottom / 4 Bottom',
      'Under-frame Clearance': '75 cm',
      'Working Depth': '25cm - 35cm',
      'Shear Bolt Protection': 'Standard M16 high-tensile',
      'Turnover System': 'Dual Action Hydraulic Ram',
      'Required Power': '80 - 130 HP'
    },
    relatedProductIds: ['prod-tiller-pro', 'prod-harrow-ultra']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Robert Vance',
    role: 'Agricultural Operations Manager',
    company: 'Vance & Sons Farming Corp',
    rating: 5,
    comment: 'The Apex Challenger Rotary Tiller has completely changed our seedbed prep. We slashed fuel consumption by 15% and cut our soil prepping time in half. Build quality of the steel frames is bulletproof.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-2',
    name: 'Devendra Patel',
    role: 'Managing Director',
    company: 'Patel Agro Export Enterprises',
    rating: 5,
    comment: 'We have been exporting and using these machines under extreme tropical soil conditions. The boron steel rotor assemblies show virtually no wear after 3 seasons. Brilliant customer support response as well.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-3',
    name: 'Gabriela Rossi',
    role: 'Lead Mechanical Engineer',
    company: 'EuroTerra Agritech',
    rating: 5,
    comment: 'From an engineering viewpoint, the double-lip oil seal assemblies and the bearing seats of their power harrows are exceptionally well-tight. Highly recommended for heavy farming contractors.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 'test-4',
    name: 'Marcus Thorne',
    role: 'Operations Supervisor',
    company: 'Pacific Mining & Aggregates',
    rating: 5,
    comment: 'We integrated custom boron gear couplings from their industrial line for our quarry screening rigs. High resilience, minimal heat fatigue, and great engineering backing.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export const GALLERY = [
  {
    id: 'gal-1',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&h=600&q=80',
    title: 'Precision Farm Trials',
    category: 'Field Operations'
  },
  {
    id: 'gal-2',
    image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&w=600&h=400&q=80',
    title: 'Boron Steel Forge Unit',
    category: 'Manufacturing'
  },
  {
    id: 'gal-3',
    image: 'https://images.unsplash.com/photo-1622359637625-be95a49ec6a0?auto=format&fit=crop&w=600&h=800&q=80',
    title: 'ISO Quality Checks',
    category: 'Testing'
  },
  {
    id: 'gal-4',
    image: 'https://images.unsplash.com/photo-1594142137910-8b1a8f90bb3e?auto=format&fit=crop&w=600&h=450&q=80',
    title: 'Cnc Rotor Cutting',
    category: 'Manufacturing'
  },
  {
    id: 'gal-5',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&h=400&q=80',
    title: 'Wheat Seeding Systems',
    category: 'Field Operations'
  },
  {
    id: 'gal-6',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=600&h=600&q=80',
    title: 'Foundation Levellers',
    category: 'Testing'
  },
  {
    id: 'gal-7',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=700&q=80',
    title: 'Robotic Welding Line',
    category: 'Manufacturing'
  },
  {
    id: 'gal-8',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=600&h=400&q=80',
    title: 'Custom Gear Rig Assembly',
    category: 'Engineering'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'time-1',
    year: '2001',
    title: 'Inception of Apex Forge',
    description: 'Began as a precision blacksmithing core facility producing custom tillage harrow discs for regional distributors.'
  },
  {
    id: 'time-2',
    year: '2007',
    title: 'Semi-Automatic Assembly Induction',
    description: 'Inundated local markets with the Challenger Series Tillers, scaling production capacity to 4,000 components annually.'
  },
  {
    id: 'time-3',
    year: '2013',
    title: 'Strategic Export Division Founded',
    description: 'Secured official ISO 9001 certifications. Pioneered regional trade partnerships across East Europe and Asia-Pacific.'
  },
  {
    id: 'time-4',
    year: '2019',
    title: 'Smart Agricultural R&D Center',
    description: 'Launched pneumatic smart planting technology syncing location indicators directly to precision farming systems.'
  },
  {
    id: 'time-5',
    year: '2026',
    title: 'Pioneering Carbon-Neutral Manufacturing',
    description: 'Operating solar-powered heavy pressing arrays and recycling 94% of metal residue into next-generation components.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Vikramjit Singh',
    role: 'Chairman & Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Founder with 30+ years in mechanical metallurgical development. Under his direction, Apex grew from a rural furnace plant to a global agricultural machinery export leader.'
  },
  {
    id: 'team-2',
    name: 'Dr. Alistair Ross',
    role: 'Chief Technical Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Ph.D. in Agricultural Robotics and Metallurgy. He oversees the automated smart-seeder projects and carbon-neutral casting R&D operations.'
  },
  {
    id: 'team-3',
    name: 'Elena Vostrikov',
    role: 'Director of Global Trade',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Pioneered partnerships across 38 international farm syndicates. Oversees custom trade clearances, supply chains, and multinational distributor frameworks.'
  },
  {
    id: 'team-4',
    name: 'Rajen K. Malhotra',
    role: 'Head of Quality Control',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Maintains extreme zero-defect standards for heavy boron components. Has led the mechanical stress laboratory for over twelve years.'
  }
];

export const FAQS = [
  {
    question: 'How do I select the exact tiller configuration for my tractor horsepower (HP)?',
    answer: 'Standard rotary tillers require approximately 10 HP per foot of tillage width. Our product catalogues and specific details pages list the optimal Tractor Power range. For instance, the Apex Challenger (1.8m width) operates perfectly under 45 to 75 HP tractors. Additionally, our sales experts can suggest the precise gearbox ratio for your tractor RPM.'
  },
  {
    question: 'Are genuine wear-and-tear replacement parts readily accessible internationally?',
    answer: 'Yes. We maintain centralized warehouses with certified premium distributor hubs in Europe, Americas, South Asia, and the Middle East. Blades, gearbox gears, bearings, and hydraulic seal kits are guaranteed to ship within 24 hours of notification from anywhere.'
  },
  {
    question: 'What warranties are allocated with your industrial machinery range?',
    answer: 'Everything in our heavy-production implement array carries a standard 24-month structural warranty, including structural steel welds and heavy multi-speed gearboxes. Rotor blades and friction plates are treated as typical wear assets and enjoy separate manufacturing integrity guarantees.'
  },
  {
    question: 'Can you customize tillage row spacing or seed cup dimensions for special crop grades?',
    answer: 'Absolutely. Our R&D center specializes in bespoke design configurations. Through our Inquiry and Contact forms, you can submit customized layout requirements, and our engineering division will generate specialized blueprints for validation prior to fabrication.'
  }
];
