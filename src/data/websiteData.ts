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
import reelHydraulicMain from '../../images/homepage/ReelHydrolicHandPalletTruck.jpeg';
import platformHandTruckMain from '../../images/homepage/PlatformHandTruck.jpeg';
import releaseValveMain from '../../images/homepage/HandPalletTruckReleasevalve.jpeg';
import reelHydraulic2 from '../../images/homepage/ReelHydrolicHandPalletTruck2.jpeg';
import reelHydraulic3 from '../../images/homepage/ReelHydrolicHandPalletTruck3.jpeg';
import reelHydraulic4 from '../../images/homepage/ReelHydrolicHandPalletTruck4.jpeg';
import platformHandTruck2 from '../../images/homepage/PlatformHandTruck2.jpeg';
import platformHandTruck3 from '../../images/homepage/PlatformHandTruck3.jpeg';
import releaseValve2 from '../../images/homepage/HandPalletTruckReleasevalve2.jpeg';
import releaseValve3 from '../../images/homepage/HandPalletTruckReleasevalve3.jpeg';
import materialHandlingMain from '../../images/homepage/material handling equipment.jpeg';
import capitalGoodsMain from '../../images/homepage/Capital goods & Industiral machinery.jpeg';
import precisionEngineeringMain from '../../images/homepage/pricion engineering.jpeg';
import downstreamTargetMain from '../../images/homepage/downstream target sector.jpeg';
import automotiveAutoMain from '../../images/homepage/Automotive & Auto Components.jpeg';
import dieMoldMain from '../../images/homepage/Die & Mold Making.jpeg';
import is1 from '../../images/infinite scrroll/Hand Pallet Lever Plates.jpeg';
import is2 from '../../images/infinite scrroll/Hand Pallet Spares Part Main saft 35 x 285.jpeg';
import is3 from '../../images/infinite scrroll/Hand Pallet Spares Part Pin 16 x 41.jpeg';
import is4 from '../../images/infinite scrroll/Hand Pallet Spares Part pin 16 x 85(2).jpeg';
import is5 from '../../images/infinite scrroll/Hand Pallet Truck Bracket.jpeg';
import is6 from '../../images/infinite scrroll/Hand Pallet Truck Oil Seal Kit and Parts.jpeg';
import is7 from '../../images/infinite scrroll/Hand Pallet Truck Pin 25 x 176.jpeg';
import is8 from '../../images/infinite scrroll/Hand Pallet Truck Pump.jpeg';
import is9 from '../../images/infinite scrroll/Hand Pallet Truck Release Valve.jpeg';
import is10 from '../../images/infinite scrroll/Heavy Duty Hand Pallet Truck.jpeg';
import is11 from '../../images/infinite scrroll/Paddle Pin Shaft Pallet Truck Part (1).jpeg';
import is12 from '../../images/infinite scrroll/Piston Bush Pallet Truck Part.jpeg';
import is13 from '../../images/infinite scrroll/Platform Hand Truck.jpeg';
import is14 from '../../images/infinite scrroll/Pu Hand Pallet Truck Wheels.jpeg';
import is15 from '../../images/infinite scrroll/Pump Piston Hand Pallet 18 x 100.jpeg';
import is16 from '../../images/infinite scrroll/ROLLER LINKING PLATE Pallet Truck Part.jpeg';
import is17 from '../../images/infinite scrroll/SS304 M14 Hex Nut.jpeg';
import is18 from '../../images/infinite scrroll/Stainles Steel Hand Pallet Spring.jpeg';
import is19 from '../../images/infinite scrroll/laser assembly back.jpeg';
import is20 from '../../images/infinite scrroll/laser assembly side.jpeg';
import is21 from '../../images/infinite scrroll/laser assembly.jpeg';
import client1 from '../../images/client images/client1.jpeg';
import client2 from '../../images/client images/client2.jpeg';
import client3 from '../../images/client images/client3.jpeg';
import client4 from '../../images/client images/client4.jpeg';
import client5 from '../../images/client images/client5.jpeg';
import alicon from '../../images/client images/alicon.jpeg';

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
    title: 'Precision Engineering with Modern Machinery',
    description: 'Every gear shaft is manufactured using premium alloy bar steels and forgings for extra torsional strength and wear resistance.',
    iconName: 'Settings2'
  },
  {
    id: 'feat-2',
    title: 'Premium Quality Raw Materials',
    description: 'We use high-grade alloy steels and certified raw materials to ensure maximum strength, durability, wear resistance, and long service life of every component.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'feat-3',
    title: 'On-Time Delivery Commitment',
    description: 'Our streamlined manufacturing process and efficient production planning enable us to deliver orders on schedule, helping customers maintain uninterrupted operations.',
    iconName: 'Clock'
  },
  {
    id: 'feat-4',
    title: 'Expertise in Critical Job Works',
    description: 'We undertake critical and precision job works requiring tight tolerances, intricate machining, and strict quality standards for automotive, material handling, and industrial sectors.',
    iconName: 'Wrench'
  },
  {
    id: 'feat-5',
    title: 'In-House Manufacturing Facility',
    description: 'All hand pallet truck parts are manufactured in our own facility, ensuring better quality control, faster production cycles, and consistent product performance.',
    iconName: 'Factory'
  },
  {
    id: 'feat-6',
    title: 'Quality Assurance & Inspection',
    description: 'Each component undergoes rigorous quality inspection using precision measuring instruments to ensure dimensional accuracy and compliance with customer specifications.',
    iconName: 'Award'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'ind-1',
    name: 'Material Handling Equipment',
    description: 'Manufacturing premium manual material handling systems, including hydraulic hand pallet trucks, heavy-duty platform trolleys, and precision pump spares.',
    image: materialHandlingMain,
    iconName: 'Factory'
  },
  {
    id: 'ind-2',
    name: 'Capital Goods & Industrial Machinery',
    description: 'Developing high-precision capital goods, heavy transmission spares, and critical machinery components for diverse industrial sectors.',
    image: capitalGoodsMain,
    iconName: 'Factory'
  },
  {
    id: 'ind-3',
    name: 'Precision Engineering & Job Work Sector',
    description: 'Providing high-tolerance custom machining, CNC/VMC job works, and precision contract turning services built to exact client specifications.',
    image: precisionEngineeringMain,
    iconName: 'Wrench'
  },
  {
    id: 'ind-4',
    name: 'Downstream Target Sector',
    description: 'Supplying high-integrity valves, custom piping spares, and precision mechanical assemblies for downstream processing and refining industries.',
    image: downstreamTargetMain,
    iconName: 'Pickaxe'
  },
  {
    id: 'ind-5',
    name: 'Automotive & Auto Components',
    description: 'Manufacturing high-precision gear box parts, transmission shafts, and custom axle sleeves for tractors and light/heavy motor vehicles.',
    image: automotiveAutoMain,
    iconName: 'Factory'
  },
  {
    id: 'ind-6',
    name: 'Die & Mold Making',
    description: 'Developing premium forging dies, casting molds, and precision industrial tooling engineered using advanced CNC and VMC setups.',
    image: dieMoldMain,
    iconName: 'HardHat'
  }
];

export const STATS: Stat[] = [
  { id: 'stat-1', value: 425, label: 'Delivered Projects', suffix: '+' },
  { id: 'stat-2', value: 15, label: 'Machining Centers', suffix: '+' },
  { id: 'stat-3', value: 14, label: 'Years Experience', suffix: '+' },
  { id: 'stat-4', value: 13, label: 'Active Staff', suffix: '+' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-worm-gear',
    name: 'Reel Hydraulic Hand Pallet Truck',
    category: 'Hydraulic Hand Pallet Trucks',
    image: reelHydraulicMain,
    images: [reelHydraulicMain, reelHydraulic2, reelHydraulic3, reelHydraulic4],
    shortDesc: 'Hydraulic Hand Pallet Truck enables safe, efficient lifting and transportation of palletized goods.',
    longDesc: 'is a manual material-handling equipment used to lift and move palletized goods over short distances. It is widely used in warehouses, factories, logistics centers, and retail stores for loading, unloading, and transporting heavy materials. The forks are placed under the pallet, and the handle is pumped to lift the load using a hydraulic system. The operator can then easily move the pallet and lower it safely at the desired location. It is durable, cost-effective, and improves workplace efficiency.',
    specifications: {
      'Part Type': 'Pump',
      'Material': 'Brass',
      'Capacity / Load Capacity': '5 ton (5000 kg)',
      'Reel Diameter Capacity': '400 mm - 1200 mm',
      'Fork Length': '1150 mm / 1220 mm',
      'Fork Width': '550 mm / 685 mm',
      'Min Fork Height': '75 mm',
      'Max Fork Height': '185 mm - 200 mm',
      'Wheel Material': 'Nylon, Polyurethane (PU), or Rubber',
      'Wheel Hardness': '85 to 95 Shore A'
    },
    relatedProductIds: ['prod-tractor-parts', 'prod-textile-gear']
  },
  {
    id: 'prod-tractor-parts',
    name: 'Platform Hand Truck',
    category: 'Platform Hand Trucks',
    image: platformHandTruckMain,
    images: [platformHandTruckMain, platformHandTruck2, platformHandTruck3],
    shortDesc: 'Platform Hand Truck enables easy transportation of boxes, cartons, and materials efficiently daily.',
    longDesc: 'is a versatile material-handling trolley designed for transporting boxes, cartons, tools, and other goods with ease. It is widely used in warehouses, factories, retail stores, offices, and logistics centers for moving loads efficiently. Simply place the items on the platform and push or pull the truck using the ergonomic handle. Its sturdy platform, smooth-rolling wheels, and durable construction help reduce manual effort and improve productivity.',
    specifications: {
      'Category': 'Platform Trolley',
      'Product Type': 'Folding Platform Trolley',
      'Material':    'Heavy-duty Plastic/PVC (Platform) and Powder-coated Steel (Handle)',
      'Number Of Wheels': '4 (2 fixed front wheels, 2 swivel rear wheels)',
      'Load Capacity': '150 kg or 300 kg',
      'Platform Size': '730 mm x 470 mm (150 kg) / 900 mm x 600 mm (300 kg)',
      'Operating Type': 'Manual Push / Pull'
    },
    relatedProductIds: ['prod-worm-gear', 'prod-stainless-sleeve']
  },
  {
    id: 'prod-cast-iron',
    name: 'Hand Pallet Truck Release valve',
    category: 'Forgings',
    image: releaseValveMain,
    images: [releaseValveMain, releaseValve2, releaseValve3],
    shortDesc: 'Release Valve provides smooth hydraulic control, prevents oil leaks, and ensures safe fork lowering.',
    longDesc: 'Release Valve is an important spare part used in hydraulic hand pallet trucks to control lifting and lowering operations. It helps maintain proper hydraulic pressure, ensuring smooth and safe movement of loads. Replacing a damaged or worn-out valve restores the trucks performance, prevents oil leakage, and allows the forks to lower smoothly and safely',
    specifications: {
      'Part Type': 'Pump',
      'Material': 'Brass',
      'Brand': 'Utm',
      'Capacity': '5 ton'
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
    company: 'Jyoti CNC',
    rating: 5,
    comment: 'Unique Techno Mech has consistently delivered precision-machined components that meet our quality standards. Their commitment to timely delivery and reliable manufacturing has made them a dependable business partner.',
    avatar: client1
  },
  {
    id: 'test-2',
    company: 'Uniparts group',
    rating: 5,
    comment: 'The machining quality, dimensional accuracy, and professional support provided by Unique Techno Mech have been excellent. We appreciate their attention to detail and consistent performance.',
    avatar: client2
  },
  {
    id: 'test-3',
    company: 'Captain Tech',
    rating: 5,
    comment: 'We value our association with Unique Techno Mech for their precision engineering expertise and dependable service. Their team understands technical requirements and always delivers quality products on schedule.',
    avatar: client3
  },
  {
    id: 'test-4',
    company: 'Silpon',
    rating: 5,
    comment: 'From prototype development to regular production, Unique Techno Mech has demonstrated strong manufacturing capabilities, excellent workmanship, and a customer-focused approach.',
    avatar: client4
  },
  {
    id: 'test-5',
    company: 'Sahajanand Laser Technology',
    rating: 5,
    comment: 'Unique Techno Mech provides high-quality machined components with consistent accuracy and competitive pricing. Their responsiveness and commitment to customer satisfaction make them a trusted supplier.',
    avatar: client5
  },
  {
    id: 'test-6',
    company: 'alicon',
    rating: 5,
    comment: 'Their advanced machining capabilities, skilled workforce, and strict quality control have helped us receive reliable components that perform as expected. We look forward to continuing our business relationship.',
    avatar: alicon
  }
];

export const GALLERY = [
  {
    id: 'gal-1',
    image: is1,
    title: 'Hand Pallet Lever Plates',
    category: 'Lever Plates'
  },
  {
    id: 'gal-2',
    image: is2,
    title: 'Main Shaft 35 x 285',
    category: 'Shafts'
  },
  {
    id: 'gal-3',
    image: is3,
    title: 'Pin 16 x 41',
    category: 'Pins'
  },
  {
    id: 'gal-4',
    image: is4,
    title: 'Pin 16 x 85',
    category: 'Pins'
  },
  {
    id: 'gal-5',
    image: is5,
    title: 'Hand Pallet Truck Bracket',
    category: 'Brackets'
  },
  {
    id: 'gal-6',
    image: is6,
    title: 'Oil Seal Kit & Parts',
    category: 'Seals'
  },
  {
    id: 'gal-7',
    image: is7,
    title: 'Pin 25 x 176',
    category: 'Pins'
  },
  {
    id: 'gal-8',
    image: is8,
    title: 'Hand Pallet Truck Pump',
    category: 'Pumps'
  },
  {
    id: 'gal-9',
    image: is9,
    title: 'Hand Pallet Release Valve',
    category: 'Valves'
  },
  {
    id: 'gal-10',
    image: is10,
    title: 'Heavy Duty Pallet Truck',
    category: 'Pallet Trucks'
  },
  {
    id: 'gal-11',
    image: is11,
    title: 'Paddle Pin Shaft',
    category: 'Pins'
  },
  {
    id: 'gal-12',
    image: is12,
    title: 'Piston Bushing Spares',
    category: 'Bushes'
  },
  {
    id: 'gal-13',
    image: is13,
    title: 'Platform Hand Truck',
    category: 'Hand Trucks'
  },
  {
    id: 'gal-14',
    image: is14,
    title: 'PU Pallet Truck Wheels',
    category: 'Wheels'
  },
  {
    id: 'gal-15',
    image: is15,
    title: 'Pump Piston 18 x 100',
    category: 'Pistons'
  },
  {
    id: 'gal-16',
    image: is16,
    title: 'Roller Linking Plate',
    category: 'Plates'
  },
  {
    id: 'gal-17',
    image: is17,
    title: 'SS304 M14 Hex Nut',
    category: 'Nuts'
  },
  {
    id: 'gal-18',
    image: is18,
    title: 'Stainless Pallet Spring',
    category: 'Springs'
  },
  {
    id: 'gal-19',
    image: is19,
    title: 'Laser Assembly Back',
    category: 'Laser Assembly'
  },
  {
    id: 'gal-20',
    image: is20,
    title: 'Laser Assembly Side',
    category: 'Laser Assembly'
  },
  {
    id: 'gal-21',
    image: is21,
    title: 'Laser Assembly',
    category: 'Laser Assembly'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'time-1',
    year: '2002',
    title: 'Company Established',
    description: 'Unique Techno Mech was established in Rajkot, Gujarat, with a vision to manufacture high-precision engineering components and deliver reliable machining solutions.'
  },
  {
    id: 'time-2',
    year: '2008',
    title: 'First VMC Machine Installed',
    description: 'Installed our first Vertical Machining Center (VMC), marking the beginning of advanced precision machining and enhanced manufacturing capabilities.'
  },
  {
    id: 'time-3',
    year: '2014',
    title: 'New Manufacturing Unit',
    description: 'Expanded operations to our current 3,600 sq. ft. manufacturing facility near Vavdi Water Tank, Rajkot, Gujarat, providing greater production capacity and room for future growth.'
  },
  {
    id: 'time-4',
    year: '2021',
    title: 'CNC Machining Expansion',
    description: 'Strengthened our manufacturing infrastructure by installing 2 CNC Turning Centers, enabling faster production, tighter tolerances, and improved machining efficiency.'
  },
  {
    id: 'time-5',
    year: 'Today',
    title: 'Modern Manufacturing Excellence',
    description: 'Operating with 4 Vertical Machining Centers (VMCs), 2 CNC Turning Centers, advanced machining technology, skilled professionals, and stringent quality control, we continue to deliver precision-engineered components to the automotive, hydraulic, material handling, and general engineering industries.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dhaval Vaishnani',
    role: 'Director & Metallurgical Lead',
    image: '/images/about us/dhaval.png',
    bio: 'metallurgical developer with 20+ years of industrial experience. He manages technical product development, vendor agreements, and custom client dimensions.'
  },
  {
    id: 'team-2',
    name: 'Dimpal Vaishnani',
    role: 'Director of Operations',
    image: '/images/about us/dimpal.png',
    bio: 'Oversees day-to-day manufacturing layouts across the GIDC Rajkot plants, managing raw alloy inventory, casting safety protocols, and staff allocations.'
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
