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
import oilSealKit1 from '../../images/website produc photo/Hand Pallet Truck Oil Seal Kit and Parts(1).png';
import oilSealKit2 from '../../images/website produc photo/Hand Pallet Truck Oil Seal Kit and Parts(2).png';
import oilSealKit3 from '../../images/website produc photo/Hand Pallet Truck Oil Seal Kit and Parts(3).png';
import oilSealKit4 from '../../images/website produc photo/Hand Pallet Truck Oil Seal Kit and Parts(4).png';
import oilSealKitPart1 from '../../images/website produc photo/Hand Pallet Truck Oil Seal Kit Part(1).png';
import oilSealKitPart2 from '../../images/website produc photo/Hand Pallet Truck Oil Seal Kit Part(2).png';
import pressureShaft1 from '../../images/website produc photo/Hand Pallet Truck Pressure Shaft 12MM 15MM(1).png';
import pressureShaft3 from '../../images/website produc photo/Hand Pallet Truck Pressure Shaft 12MM 15MM(3).png';
import pressureShaft4 from '../../images/website produc photo/Hand Pallet Truck Pressure Shaft 12MM 15MM(4).png';
import handPalletPump1 from '../../images/website produc photo/Hand Pallet Truck Pump(1).png';
import handPalletPump2 from '../../images/website produc photo/Hand Pallet Truck Pump(2).png';
import pistonBush1 from '../../images/website produc photo/Piston Bush Pallet Truck Part(1).png';
import pistonBush2 from '../../images/website produc photo/Piston Bush Pallet Truck Part(2).png';
import pistonBush3 from '../../images/website produc photo/Piston Bush Pallet Truck Part(3).png';
import palletPin1 from '../../images/website produc photo/Hand Pallet Spares Part pin 16 x 85(1).png';
import palletPin2 from '../../images/website produc photo/Hand Pallet Spares Part pin 16 x 85(2).png';
import palletPin3 from '../../images/website produc photo/Hand Pallet Spares Part pin 16 x 85(3).png';
import pumpPiston1 from '../../images/website produc photo/Pump Piston Hand Pallet 18 x 100(1).png';
import pumpPiston2 from '../../images/website produc photo/Pump Piston Hand Pallet 18 x 100(2).png';
import pumpPiston3 from '../../images/website produc photo/Pump Piston Hand Pallet 18 x 100(3).png';
import rollerLinkingShaft1 from '../../images/website produc photo/Hand Pallet Truck Roller linking Shaft 20  95   (1).png';
import rollerLinkingShaft2 from '../../images/website produc photo/Hand Pallet Truck Roller linking Shaft 20  95   (2).png';
import rollerLinkingShaft3 from '../../images/website produc photo/Hand Pallet Truck Roller linking Shaft 20  95   (3).png';
import palletPin20x105_1 from '../../images/website produc photo/Hand Pallet Truck pin 20 x 105(1).png';
import palletPin20x105_2 from '../../images/website produc photo/Hand Pallet Truck pin 20 x 105(2).png';
import palletPin20x105_3 from '../../images/website produc photo/Hand Pallet Truck pin 20 x 105(3).png';
import palletPin16x155_1 from '../../images/website produc photo/Hand Pallet Spares Part pin 16 x 155(1).png';
import palletPin16x155_2 from '../../images/website produc photo/Hand Pallet Spares Part pin 16 x 155(2).png';
import rollerLinkingPlate1 from '../../images/website produc photo/ROLLER LINKING PLATE Pallet Truck Part(1).png';
import rollerLinkingPlate2 from '../../images/website produc photo/ROLLER LINKING PLATE Pallet Truck Part(2).png';
import rollerLinkingPlate3 from '../../images/website produc photo/ROLLER LINKING PLATE Pallet Truck Part(3).png';
import paddlePinShaft1 from '../../images/website produc photo/Paddle Pin Shaft Pallet Truck Part(1).png';
import paddlePinShaft2 from '../../images/website produc photo/Paddle Pin Shaft Pallet Truck Part(2).png';
import paddlePinShaft3 from '../../images/website produc photo/Paddle Pin Shaft Pallet Truck Part(3).png';
import ppcpWheel1 from '../../images/website produc photo/Ppcp Wheel 180 X 50 Pallet Truck Part(1).png';
import ppcpWheel2 from '../../images/website produc photo/Ppcp Wheel 180 X 50 Pallet Truck Part(2).png';
import ppcpWheel3 from '../../images/website produc photo/Ppcp Wheel 180 X 50 Pallet Truck Part(3).png';
import handPalletBracket1 from '../../images/website produc photo/Hand Pallet Truck Bracket(1).png';
import handPalletBracket2 from '../../images/website produc photo/Hand Pallet Truck Bracket(2).png';
import handPalletBracket3 from '../../images/website produc photo/Hand Pallet Truck Bracket(3).png';
import handPalletSpring1 from '../../images/website produc photo/Stainles Steel Hand Pallet Spring   (1).png';
import handPalletSpring2 from '../../images/website produc photo/Stainles Steel Hand Pallet Spring   (2).png';
import handPalletSpring3 from '../../images/website produc photo/Stainles Steel Hand Pallet Spring   (3).png';
import handPalletWheelBracket1 from '../../images/website produc photo/Hand Pallet Wheel Brackets(1).png';
import handPalletWheelBracket2 from '../../images/website produc photo/Hand Pallet Wheel Brackets(2).png';
import handPalletWheelBracket3 from '../../images/website produc photo/Hand Pallet Wheel Brackets(3).png';
import rollerBracketHpt1 from '../../images/website produc photo/ROLLER BRACKET HPT Pallet Truck Part(1).png';
import rollerBracketHpt2 from '../../images/website produc photo/ROLLER BRACKET HPT Pallet Truck Part(2).png';
import mainShaft1 from '../../images/website produc photo/Hand Pallet Spares Part Main saft 35 x 285   (1).png';
import mainShaft2 from '../../images/website produc photo/Hand Pallet Spares Part Main saft 35 x 285   (2).png';
import mainShaft3 from '../../images/website produc photo/Hand Pallet Spares Part Main saft 35 x 285   (3).png';
import leverPlate1 from '../../images/website produc photo/Hand Pallet Lever Plates(1).png';
import leverPlate2 from '../../images/website produc photo/Hand Pallet Lever Plates(2).png';
import handPalletPin16x41_1 from '../../images/website produc photo/Hand Pallet Spares Part Pin 16 x 41(1).png';
import handPalletPin16x41_2 from '../../images/website produc photo/Hand Pallet Spares Part Pin 16 x 41(2).png';
import handPalletPin16x41_3 from '../../images/website produc photo/Hand Pallet Spares Part Pin 16 x 41(3).png';
import handPalletPin25x176_1 from '../../images/website produc photo/Hand Pallet Spares Part Pin 25X176(1).png';
import handPalletPin25x176_2 from '../../images/website produc photo/Hand Pallet Spares Part Pin 25X176(2).png';
import handPalletPin25x176_3 from '../../images/website produc photo/Hand Pallet Spares Part Pin 25X176(3).png';
import heavyDutyPalletTruck1 from '../../images/website produc photo/Heavy Duty Hand Pallet Truck(1).png';
import heavyDutyPalletTruck2 from '../../images/website produc photo/Heavy Duty Hand Pallet Truck(2).png';
import heavyDutyPalletTruck3 from '../../images/website produc photo/Heavy Duty Hand Pallet Truck(3).png';
import nylonWheel70x80_1 from '../../images/website produc photo/Nylon Wheel 70x80 Pallet Truck Part(1).png';
import nylonWheel70x80_2 from '../../images/website produc photo/Nylon Wheel 70x80 Pallet Truck Part(2).png';
import nylonWheel70x80_3 from '../../images/website produc photo/Nylon Wheel 70x80 Pallet Truck Part(3).png';
import puPalletWheel1 from '../../images/website produc photo/Pu Hand Pallet Truck Wheels(!).png';
import puPalletWheel2 from '../../images/website produc photo/Pu Hand Pallet Truck Wheels(2).png';
import puPalletWheel3 from '../../images/website produc photo/Pu Hand Pallet Truck Wheels(3).png';
import rollerBracketNylonWheel1 from '../../images/website produc photo/Roller Bracket Set Nylon Pallet Truck Wheel(!).png';
import rollerBracketNylonWheel2 from '../../images/website produc photo/Roller Bracket Set Nylon Pallet Truck Wheel(2).png';
import rollerBracketNylonWheel3 from '../../images/website produc photo/Roller Bracket Set Nylon Pallet Truck Wheel(3).png';
import rollerBracketPuWheel1 from '../../images/website produc photo/Roller Bracket Set PU Wheel(1).png';
import rollerBracketPuWheel2 from '../../images/website produc photo/Roller Bracket Set PU Wheel(2).png';
import rollerBracketPuWheel3 from '../../images/website produc photo/Roller Bracket Set PU Wheel(3).png';
import rollerBracketPuWheel4 from '../../images/website produc photo/Roller Bracket Set PU Wheel(4).png';

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
    id: 'prod-oil-seal-kit',
    name: 'Hand Pallet Truck Oil Seal Kit and Parts , 35 mm',
    category: 'Pallet Truck Parts',
    image: oilSealKit1,
    images: [oilSealKit1, oilSealKit2, oilSealKit3, oilSealKit4],
    shortDesc: 'An Oil Seal Kit is a set of rubber seals that prevents hydraulic oil leaks and keeps hydraulic systems working efficiently. It protects internal components from dust and wear, ensuring smooth operation and longer equipment life.',
    longDesc: 'An Oil Seal Kit is a set of high-quality seals used to prevent leakage of hydraulic oil, grease, or other fluids in machinery and equipment. It ensures smooth operation of hydraulic systems, jacks, and pallet trucks by maintaining proper pressure and protecting components from dust and contaminants. Using a genuine oil seal kit improves efficiency, extends equipment life, and reduces maintenance issues in factories, workshops, and warehouses.',
    specifications: {
      'Part Type': 'Pump',
      'Material': 'Polypropylene',
      'Brand': 'Indian and Imported',
      'Shaft Diameter': '35 mm',
      'Diameter': '31.5 mm and 35 mm and 40 mm',
      'Capacity': '5 ton',
      'Temperature range': '200c',
      'Application': 'Hydraulic',
      'Lip type': 'o ring'
    },
    relatedProductIds: ['prod-hydraulic-coupling']
  },
  {
    id: 'prod-oil-seal-kit-part',
    name: 'Hand Pallet Truck Oil Seal Kit Part',
    category: 'Pallet Truck Parts',
    image: oilSealKitPart1,
    images: [oilSealKitPart1, oilSealKitPart2],
    shortDesc: 'The Hand Pallet Truck Oil Seal Kit is a complete set of durable rubber seals that prevents hydraulic oil leaks and maintains proper pressure. It ensures smooth lifting and lowering, protects internal components, and extends the life of your pallet truck.',
    longDesc: 'The Hand Pallet Truck Oil Seal Kit is a complete set of high-quality seals designed to ensure leak-free and efficient operation of the pallet truck’s hydraulic system. Manufactured from durable, oil- and wear-resistant materials, the kit helps maintain proper hydraulic pressure, prevents oil leakage, and protects internal components from dust and contaminants. Ideal for maintenance and repair, this oil seal kit restores smooth lifting and lowering performance while extending the service life and reliability of hand pallet trucks used in industrial and warehouse environments.',
    specifications: {
      'Material': 'Polypropylene',
      'Brand': 'Kastas',
      'Part Type': 'Pump',
      'Capacity': '5 ton'
    },
    relatedProductIds: ['prod-oil-seal-kit']
  },
  {
    id: 'prod-pressure-shaft',
    name: 'Hand Pallet Truck Pressure Shaft 12MM /15MM',
    category: 'Pallet Truck Parts',
    image: pressureShaft1,
    images: [pressureShaft1, pressureShaft3, pressureShaft4],
    shortDesc: 'The Hand Pallet Truck Pressure Shaft transfers force from the handle to the hydraulic pump, enabling smooth and efficient lifting. Made from durable steel, it restores lifting performance, ensures reliable operation, and extends the pallet truck\'s service life.',
    longDesc: 'This spare part is a solid metal pressure shaft, available in 12mm or 15mm diameters, featuring pre-drilled holes for secure locking pins. It is installed within the hydraulic pump assembly of a manual hand pallet truck to transfer mechanical force directly from the pumping handle. When the original shaft bends or wears down from repeated heavy pumping, the handle linkage becomes loose and fails to generate lifting pressure. Replacing the damaged component with this sturdy new shaft restores a tight mechanical connection, ensuring the machine lifts heavy loads efficiently once again.',
    specifications: {
      'Product Name': 'Hand Pallet Truck Pressure Shaft',
      'Material': 'High-Strength Hardened Steel',
      'Available Sizes': '12 mm / 15 mm Diameter',
      'Finish': 'Precision Machined / Polished',
      'Application': 'Manual Hydraulic Hand Pallet Truck',
      'Function': 'Transfers force from handle to hydraulic pump',
      'Mounting Type': 'Pin Lock Mounting',
      'Wear Resistance': 'High',
      'Usage': 'Hydraulic Pump Assembly'
    },
    relatedProductIds: ['prod-oil-seal-kit-part', 'prod-oil-seal-kit']
  },
  {
    id: 'prod-hand-pallet-pump',
    name: 'Hand Pallet Truck Pump',
    category: 'Pallet Truck Parts',
    image: handPalletPump1,
    images: [handPalletPump1, handPalletPump2],
    shortDesc: 'The Hand Pallet Truck Jack Pump is the hydraulic unit that generates lifting power for smooth and efficient load handling. Built from high-strength materials, it ensures reliable performance, safe operation, and long-lasting durability in pallet trucks.',
    longDesc: 'Hand pallet jack pumps are essential spare parts designed to provide smooth and reliable hydraulic lifting performance in manual pallet trucks. These pumps convert manual handle movement into hydraulic pressure, enabling effortless lifting and controlled lowering of loads. Manufactured from high-strength materials for durability and leak resistance, jack pumps ensure consistent performance, long service life, and safe operation, making them a critical replacement component for maintaining the efficiency and reliability of hand pallet trucks in warehouses, factories, and logistics operations.',
    specifications: {
      'Part Type': 'Pump',
      'Material': 'Mild Steel',
      'Brand': 'utm',
      'Diameter': '80 mm',
      'Capacity': '3 ton',
      'Tensile Strength': '305 mpa',
      'Grade': 'EN8',
      'Colour': 'Silver',
      'Finish Type': 'Galvanized'
    },
    relatedProductIds: ['prod-pressure-shaft', 'prod-oil-seal-kit']
  },
  {
    id: 'prod-piston-bush',
    name: 'Piston Bush Pallet Truck Part',
    category: 'Pallet Truck Parts',
    image: pistonBush1,
    images: [pistonBush1, pistonBush2, pistonBush3],
    shortDesc: 'The Hand Pallet Truck Piston Bush guides the lifting piston, ensuring smooth movement and proper hydraulic alignment. It prevents oil leakage, reduces wear, and improves the performance and lifespan of the hydraulic system.',
    longDesc: 'This spare part is a precision-machined metal piston bush featuring a finely polished interior and a bright chrome-plated exterior. It is screwed securely onto the top of the hydraulic cylinder of a manual hand pallet truck to guide the main lifting piston. When the original bushing wears down from constant pumping friction, the piston begins to wobble and scrape, causing the machine to leak pressurized oil. Replacing the worn piece with this smooth new bush keeps the internal parts perfectly aligned, ensuring safe, leak-free lifting of heavy loads.',
    specifications: {
      'Part Type': 'Pump Bush',
      'Material': 'Mild Steel',
      'Brand': 'Utm',
      'Diameter': '35 mm',
      'Capacity': '1 ton',
      'Hardness': '52 hrc',
      'Grade': 'EN8',
      'Color': 'silver',
      'Finish type': 'chrome plated'
    },
    relatedProductIds: ['prod-hand-pallet-pump', 'prod-pressure-shaft']
  },
  {
    id: 'prod-pallet-pin',
    name: 'Hand Pallet Spares Part pin 16 x 85',
    category: 'Pallet Truck Parts',
    image: palletPin1,
    images: [palletPin1, palletPin2, palletPin3],
    shortDesc: 'The Hand Pallet Truck Pin (16 × 85) securely connects key moving parts, ensuring smooth operation and reliable load handling. Made from high-strength steel, it provides a precise fit, excellent durability, and long-lasting performance.',
    longDesc: 'The Hand Pallet Truck Spare Part Pin (16 × 85) is a strong and precisely manufactured fastening component used to connect and secure key moving parts within the pallet truck mechanism. Made from high-strength steel for excellent durability and shear resistance, this pin ensures proper alignment, smooth operation, and reliable load handling. Its accurate dimensions allow a perfect fit, making it an essential replacement part for maintaining the safety, performance, and long service life of hand pallet trucks in material-handling applications.',
    specifications: {
      'Part Type': 'Pin',
      'Material': 'Mild Steel',
      'Brand': 'UTM',
      'Diameter': '16MM',
      'Capacity': '3 ton',
      'Hardness': '52 hrc',
      'Tensile Strength': '205 mpa',
      'Grade': 'EN8',
      'Colour': 'Silver',
      'Finish Type': 'Galvanized'
    },
    relatedProductIds: ['prod-piston-bush', 'prod-pressure-shaft']
  },
  {
    id: 'prod-pump-piston',
    name: 'Pump Piston Hand Pallet 18 x 100',
    category: 'Pallet Truck Parts',
    image: pumpPiston1,
    images: [pumpPiston1, pumpPiston2, pumpPiston3],
    shortDesc: 'The Hard Chrome Piston is a precision hydraulic component that delivers smooth, efficient lifting and reliable pallet truck performance. Its hard chrome finish resists wear and corrosion, ensuring longer service life and leak-free hydraulic operation.',
    longDesc: 'The Hand Pallet Truck Spare Part Hard Chrome Piston is a precision-engineered hydraulic component designed to ensure smooth and reliable lifting performance. Manufactured from high-strength steel and finished with a hard chrome coating, it offers excellent resistance to wear, corrosion, and friction. The hard chrome surface enhances durability and sealing efficiency, resulting in longer service life and consistent hydraulic operation, making this piston an ideal replacement part for maintaining the performance and safety of hand pallet trucks.',
    specifications: {
      'Material': 'Mild Steel',
      'Brand': 'Utm',
      'Part Type': 'Pin',
      'Diameter': '18 mm',
      'Capacity': '5 ton',
      'Hardness': '45',
      'Color': 'Silver',
      'Finish Type': 'Polished'
    },
    relatedProductIds: ['prod-piston-bush', 'prod-hand-pallet-pump']
  },
  {
    id: 'prod-roller-linking-shaft',
    name: 'Hand Pallet Truck Roller linking Shaft 20 * 95',
    category: 'Pallet Truck Parts',
    image: rollerLinkingShaft1,
    images: [rollerLinkingShaft1, rollerLinkingShaft2, rollerLinkingShaft3],
    shortDesc: 'The Hand Pallet Truck Roller Shaft (20 × 95) securely connects the load rollers, ensuring smooth movement and stable load handling. Made from high-strength steel, it provides excellent durability, precise fit, and long-lasting performance.',
    longDesc: 'This spare part is a solid metal linking shaft measuring 20 * 95 millimeters , featuring pre-drilled holes for locking pins. It acts as an axle, installed directly through the front load rollers of a manual hand pallet truck to attach the wheels to the lifting frame. Over time, constant heavy loads can cause the original shaft to bend or wear down, making the wheels wobble and the truck extremely difficult to push. Replacing the damaged axle with this sturdy new shaft restores a secure connection, ensuring the pallet truck rolls smoothly and straight once again',
    specifications: {
      'Material': 'Mild Steel',
      'Brand': 'Utm',
      'Part Type': 'Pin',
      'Hardness': '35 hrc',
      'Diameter': '20 mm',
      'Capacity': '5 ton'
    },
    relatedProductIds: ['prod-pump-piston', 'prod-pallet-pin']
  },
  {
    id: 'prod-pallet-pin-20x105',
    name: 'Hand Pallet Truck pin 20 x 105',
    category: 'Pallet Truck Parts',
    image: palletPin20x105_1,
    images: [palletPin20x105_1, palletPin20x105_2, palletPin20x105_3],
    shortDesc: 'The Hand Pallet Truck Pin (20 × 105) securely connects moving parts, ensuring smooth operation and stable load handling. Made from high-strength steel, it offers a precise fit, excellent durability, and long-lasting performance.',
    longDesc: 'The Hand Pallet Truck Pin (20 × 105) is a high-strength, precision-engineered fastening component designed to securely connect and align key moving parts of the pallet truck. Made from durable steel, it provides excellent shear resistance and ensures smooth, reliable operation under heavy loads. This pin is an essential replacement part for maintaining the stability, performance, and safety of hand pallet trucks in industrial and warehouse material-handling applications.',
    specifications: {
      'Material': 'Mild Steel',
      'Brand': 'Utm',
      'Part Type': 'Pin',
      'Hardness': '30 hrc',
      'Diameter': '20 mm',
      'Capacity': '5 ton',
      'COLOR': 'SILVER',
      'FINISH TYPE': 'CHROME PLATED'
    },
    relatedProductIds: ['prod-roller-linking-shaft', 'prod-pallet-pin']
  },
  {
    id: 'prod-pallet-pin-16x155',
    name: 'Hand Pallet Spares Part pin 16 x 155',
    category: 'Pallet Truck Parts',
    image: palletPin16x155_1,
    images: [palletPin16x155_1, palletPin16x155_2],
    shortDesc: 'The Hand Pallet Truck Pin (16 × 155) securely connects the lifting mechanism, ensuring stable operation and safe load handling. Made from high-strength steel, it provides a precise fit, superior durability, and long-lasting performance.',
    longDesc: 'This spare part is a long, zinc-coated metal connecting pin measuring 16 * 155 millimeters with a precision-drilled locking hole. It is installed as a crucial axle or hinge point within the mechanical lifting frame of a manual hand pallet truck. When the original pin bends or snaps under the immense stress of lifting heavy loads, the truck\'s frame becomes unstable and unsafe. Replacing the damaged piece with this strong new pin restores structural rigidity, allowing the machine to safely lift and hold heavy pallets once again.',
    specifications: {
      'Brand': 'Utm',
      'Part Type': 'Pin',
      'Material': 'Mild Steel',
      'Hardness': '35',
      'Diameter': '16 mm',
      'Capacity': '5 ton',
      'COLOR': 'SILVER',
      'FINISH TYPE': 'CHROME PLATED'
    },
    relatedProductIds: ['prod-pallet-pin-20x105', 'prod-roller-linking-shaft']
  },
  {
    id: 'prod-roller-linking-plate',
    name: 'ROLLER LINKING PLATE Pallet Truck Part',
    category: 'Pallet Truck Parts',
    image: rollerLinkingPlate1,
    images: [rollerLinkingPlate1, rollerLinkingPlate2, rollerLinkingPlate3],
    shortDesc: 'The Roller Linking Plate connects and supports the rollers, ensuring smooth movement and proper alignment during operation. Made from high-strength steel, it improves stability, reduces wear, and extends the service life of pallet trucks.',
    longDesc: 'A Roller Linking Plate is a durable component used in material-handling equipment like pallet trucks and stackers to connect and support rollers. It ensures smooth movement, proper alignment, and stability of the rollers during operation. High-quality linking plates improve performance, reduce wear and tear, and enhance the lifespan and safety of equipment in warehouses, factories, and workshops.',
    specifications: {
      'Material': 'Mild Steel',
      'Brand': 'Utm',
      'Part Type': 'Pin',
      'Hardness': '55 hrc',
      'Diameter': '19.85 mm',
      'Capacity': '5 ton'
    },
    relatedProductIds: ['prod-roller-linking-shaft', 'prod-pallet-pin']
  },
  {
    id: 'prod-paddle-pin-shaft',
    name: 'Paddle Pin Shaft Pallet Truck Part',
    category: 'Pallet Truck Parts',
    image: paddlePinShaft1,
    images: [paddlePinShaft1, paddlePinShaft2, paddlePinShaft3],
    shortDesc: 'The Paddle Pin Shaft securely connects the release handle to the hydraulic valve, ensuring smooth and precise fork lowering. Made from high-strength steel, it offers reliable performance, durability, and long service life.',
    longDesc: 'This spare part is a precision-machined, zinc-plated metal paddle pin shaft featuring an 8mm diameter and a smooth, fine-ground finish. It is installed to securely connect the release handle or foot pedal directly to the hydraulic lowering valve on a manual hand pallet truck. When the original pin bends or wears thin from constant use, the release mechanism becomes loose or jams, making it difficult to lower the forks. Replacing the damaged piece with this strong new pin restores precise control, allowing the operator to safely and smoothly lower heavy loads.',
    specifications: {
      'Material': 'Mild Steel',
      'Brand': 'Utm',
      'Part Type': 'Pin',
      'Diameter': '8 mm',
      'Capacity': '5 ton',
      'Hardness': '35 hrc',
      'COLOR': 'SILVER',
      'FINISH TYPE': 'Polished'
    },
    relatedProductIds: ['prod-roller-linking-plate', 'prod-pallet-pin-16x155']
  },
  {
    id: 'prod-ppcp-wheel',
    name: 'Ppcp Wheel 180 X 50 Pallet Truck Part',
    category: 'Pallet Truck Parts',
    image: ppcpWheel1,
    images: [ppcpWheel1, ppcpWheel2, ppcpWheel3],
    shortDesc: 'The Hand Pallet Truck with PPCP Wheels is designed for smooth, effortless lifting and transportation of heavy palletized loads. Its durable PPCP wheels ensure quiet operation, easy maneuverability, and reliable performance in warehouses, factories, and logistics centers.',
    longDesc: 'Our Hand Pallet Truck with PPCP Wheels is designed to make lifting and moving heavy pallets easy, smooth, and effortless. Its strong and durable PPCP wheels roll quietly and smoothly, while the heavy-duty body ensures safe handling of big loads. With a comfortable handle and low-maintenance design, this pallet truck is perfect for warehouses, factories, shops, and loading areas, helping you save time, reduce effort, and work more efficiently.',
    specifications: {
      'Construction Type': 'Foam Filled',
      'Part Type': 'Wheel',
      'Bearing Type': 'Roller Bearing',
      'Material': 'Nylon',
      'Diameter': '180x50mm',
      'Capacity': '3 ton',
      'Brand': 'UTM',
      'Load Capacity(kg)': '1000 kg',
      'Purpose': 'Heavy Industry',
      'Hardness': '55 hrc',
      'Wheel Size.': '180 x 50'
    },
    relatedProductIds: ['prod-roller-linking-shaft', 'prod-piston-bush']
  },
  {
    id: 'prod-hand-pallet-bracket',
    name: 'Hand Pallet Truck Bracket',
    category: 'Pallet Truck Parts',
    image: handPalletBracket1,
    images: [handPalletBracket1, handPalletBracket2, handPalletBracket3],
    shortDesc: 'The Hand Pallet Truck Bracket provides strong support and secure mounting for key components, ensuring stable and reliable operation. Made from high-strength steel, it offers excellent durability, precise alignment, and long-lasting performance.',
    longDesc: 'The Hand Pallet Truck Bracket is a sturdy structural component designed to support and securely mount key parts of the pallet truck assembly. Manufactured from high-strength steel for durability and load stability, it ensures proper alignment and rigid support of wheels, linkages, or hydraulic components during operation. This bracket helps maintain smooth handling, structural integrity, and safe load movement, making it an essential replacement part for the reliable performance of hand pallet trucks in warehouse and industrial material-handling environments.',
    specifications: {
      'Vehicle Model': 'HAND PALLET TRUCK 3 TON',
      'Part Type': 'Body Bracket',
      'Mounting Position': 'Rear',
      'Brand': 'UTM',
      'Material': 'Cast Iron',
      'Shape': 'U-Shape',
      'Weight': '2 kg',
      'Surface Finish': 'Powder Coated'
    },
    relatedProductIds: ['prod-ppcp-wheel', 'prod-paddle-pin-shaft']
  },
  {
    id: 'prod-hand-pallet-spring',
    name: 'Stainles Steel Hand Pallet Spring',
    category: 'Pallet Truck Parts',
    image: handPalletSpring1,
    images: [handPalletSpring1, handPalletSpring2, handPalletSpring3],
    shortDesc: 'The Hand Pallet Truck Spring provides controlled tension and smooth operation of the lifting and lowering mechanism. Made from high-quality spring steel, it ensures reliable performance, durability, and long service life.',
    longDesc: 'The Hand Pallet Truck Spring is a durable and precisely engineered component used to provide controlled return movement and tension within the pallet truck’s lifting and lowering mechanism. Manufactured from high-quality spring steel, it offers excellent elasticity, fatigue resistance, and long service life under repeated use. This spring ensures smooth handle operation, reliable engagement of the hydraulic system, and safe, efficient performance, making it an essential spare part for maintaining hand pallet trucks in industrial and warehouse material-handling applications.',
    specifications: {
      'Part Type': 'Pump',
      'Material': 'SPRING STEEL',
      'Brand': 'UTM',
      'Diameter': '5MM',
      'Capacity': '3 ton',
      'Hardness': '52 hrc',
      'Tensile Strength': '205 mpa',
      'Grade': 'EN8',
      'Colour': 'Silver',
      'Finish Type': 'Galvanized'
    },
    relatedProductIds: ['prod-hand-pallet-bracket', 'prod-ppcp-wheel']
  },
  {
    id: 'prod-hand-pallet-wheel-brackets',
    name: 'Hand Pallet Wheel Brackets',
    category: 'Pallet Truck Parts',
    image: handPalletWheelBracket1,
    images: [handPalletWheelBracket1, handPalletWheelBracket2, handPalletWheelBracket3],
    shortDesc: 'The Hand Pallet Truck Wheel Bracket securely supports the wheels, ensuring smooth movement and stable load handling. Made from high-strength steel, it provides precise alignment, excellent durability, and reliable performance.',
    longDesc: 'Hand Pallet Wheel Brackets are sturdy components that hold and support the wheels of a hand pallet truck. They ensure proper alignment, smooth movement, and stability while carrying heavy loads. High-quality wheel brackets enhance the performance, safety, and durability of pallet trucks, making them ideal for efficient material handling in warehouses, factories, and workshops.',
    specifications: {
      'Part Type': 'Wheel',
      'Material': 'Cast Iron',
      'Brand': 'UTM',
      'Country of Origin': 'Made in India',
      'MOQ': '60 PCS',
      'SUPPLY': 'ALL INDIA',
      'PACK': 'LOOSE'
    },
    relatedProductIds: ['prod-hand-pallet-bracket', 'prod-ppcp-wheel']
  },
  {
    id: 'prod-roller-bracket-hpt',
    name: 'ROLLER BRACKET HPT Pallet Truck Part',
    category: 'Pallet Truck Parts',
    image: rollerBracketHpt1,
    images: [rollerBracketHpt1, rollerBracketHpt2],
    shortDesc: 'The Hand Pallet Truck Roller Bracket securely supports the load rollers, ensuring smooth movement and proper alignment. Made from high-strength steel, it provides excellent stability, durability, and reliable pallet truck performance.',
    longDesc: 'A Roller Bracket HPT is a sturdy component used in hand pallet trucks (HPT) to hold and support the rollers. It ensures smooth movement, proper alignment, and stability of the pallet truck during operation. High-quality roller brackets enhance performance, reduce wear and tear, and improve the safety and lifespan of pallet trucks in warehouses, factories, and workshops.',
    specifications: {
      'Roller Type': 'Load',
      'Part Type': 'bracket',
      'Bracket Type': 'HAND PALLET',
      'Material': 'S.G.I',
      'Shape': 'Flat',
      'Brand': 'UTM',
      'Body Material': 'Cast Iron',
      'Bracket Size': '100 mm',
      'Diameter': '95mm',
      'Loading Capacity': '2500 kg'
    },
    relatedProductIds: ['prod-hand-pallet-wheel-brackets', 'prod-hand-pallet-bracket']
  },
  {
    id: 'prod-main-shaft-35x285',
    name: 'Hand Pallet Spares Part Main saft 35 x 285',
    category: 'Pallet Truck Parts',
    image: mainShaft1,
    images: [mainShaft1, mainShaft2, mainShaft3],
    shortDesc: 'The Hand Pallet Truck Main Shaft (35 × 285) provides strong support and ensures smooth operation of the lifting mechanism. Made from high-strength steel, it offers superior durability, precise alignment, and reliable performance under heavy loads.',
    longDesc: 'The Hand Pallet Truck Spare Part Main Shaft (35 × 285) is a heavy-duty structural component designed to support and transmit load within the pallet truck’s lifting and steering mechanism. Manufactured from high-strength steel for superior durability and load-bearing capacity, this precisely sized shaft ensures proper alignment, smooth operation, and reliable performance under demanding working conditions. It is an ideal replacement part for restoring the strength, stability, and efficiency of hand pallet trucks used in warehouses, factories, and material-handling applications.',
    specifications: {
      'Part Type': 'Pump',
      'Material': 'Mild Steel',
      'Brand': 'UTM',
      'Diameter': '31.5mm',
      'Capacity': '3 ton',
      'Hardness': '55 hrc',
      'Tensile Strength': '205 mpa',
      'Grade': 'EN8',
      'Colour': 'Silver',
      'Finish Type': 'Chrome Plated'
    },
    relatedProductIds: ['prod-roller-bracket-hpt', 'prod-paddle-pin-shaft']
  },
  {
    id: 'prod-lever-plates',
    name: 'Hand Pallet Lever Plates',
    category: 'Pallet Truck Parts',
    image: leverPlate1,
    images: [leverPlate1, leverPlate2],
    shortDesc: 'The Hand Pallet Truck Lever Plate connects the handle to the hydraulic system, ensuring smooth and efficient lifting operation. Made from high-strength steel, it provides precise alignment, excellent durability, and reliable long-lasting performance.',
    longDesc: 'Hand Pallet Truck Lever Plates are durable metal components that form a crucial part of the pallet truck’s lifting mechanism. They connect the handle and hydraulic system, transmitting the operator’s force to raise and lower loads efficiently. Made from high-strength steel, these plates ensure precise alignment, smooth operation, and long-lasting performance, making them essential replacement parts for maintaining the reliability, safety, and efficiency of hand pallet trucks in warehouses, factories, and material-handling environments.',
    specifications: {
      'Part Type': 'Pump',
      'Material': 'Mild Steel',
      'Brand': 'UTM',
      'Capacity': '3 ton',
      'Hardness': '52 hrc',
      'Tensile Strength': '205 mpa',
      'Grade': 'EN8',
      'Colour': 'Silver',
      'Finish Type': 'Galvanized'
    },
    relatedProductIds: ['prod-main-shaft-35x285', 'prod-roller-bracket-hpt']
  },
  {
    id: 'prod-hand-pallet-pin-16x41',
    name: 'Hand Pallet Spares Part Pin 16 x 41',
    category: 'Pallet Truck Parts',
    image: handPalletPin16x41_1,
    images: [handPalletPin16x41_1, handPalletPin16x41_2, handPalletPin16x41_3],
    shortDesc: 'The Hand Pallet Truck Pin (16 × 47) securely connects moving parts, ensuring smooth operation and stable load handling. Made from high-strength steel, it offers a precise fit, excellent durability, and long-lasting performance.',
    longDesc: 'The Hand Pallet Truck Spare Part Pin (16 × 47) is a high-strength, precision-engineered component designed to securely connect and align moving parts within the pallet truck mechanism. Made from durable steel, it provides excellent shear resistance and ensures stable operation, smooth movement, and reliable load handling. Accurately sized for a perfect fit, this pin is an essential replacement part for maintaining the safety, efficiency, and long service life of hand pallet trucks in industrial and warehouse material-handling applications.',
    specifications: {
      'Part Type': 'Pin',
      'Material': 'Mild Steel',
      'Brand': 'UTM',
      'Diameter': '16MM',
      'Capacity': '3 ton',
      'Hardness': '52 hrc',
      'Tensile Strength': '305 mpa',
      'Grade': 'EN8',
      'Colour': 'Silver',
      'Finish Type': 'Galvanized'
    },
    relatedProductIds: ['prod-lever-plates', 'prod-pallet-pin-16x155']
  },
  {
    id: 'prod-hand-pallet-pin-25x176',
    name: 'Hand Pallet Spares Part Pin 25X176',
    category: 'Pallet Truck Parts',
    image: handPalletPin25x176_1,
    images: [handPalletPin25x176_1, handPalletPin25x176_2, handPalletPin25x176_3],
    shortDesc: 'The Hand Pallet Truck Pin (25 × 176) securely connects key moving parts, ensuring smooth operation and stable load handling. Made from high-strength steel, it provides superior durability, a precise fit, and reliable long-lasting performance.',
    longDesc: 'The Hand Pallet Truck Pin (25 × 176) is a heavy-duty, precision-engineered component designed to securely connect and align major moving parts of the pallet truck. Made from high-strength steel, it provides excellent durability, shear resistance, and reliable performance under heavy loads. This pin is an essential replacement part for ensuring smooth operation, structural stability, and safe handling in hand pallet trucks used in warehouses, factories, and industrial material-handling applications.',
    specifications: {
      'Part Type': 'Pin',
      'Material': 'Mild Steel',
      'Brand': 'UTM',
      'Diameter': '25MM',
      'Capacity': '3 ton',
      'Hardness': '52 hrc',
      'Tensile Strength': '305 mpa',
      'Grade': 'EN8',
      'Colour': 'Silver',
      'Finish Type': 'Galvanized'
    },
    relatedProductIds: ['prod-hand-pallet-pin-16x41', 'prod-main-shaft-35x285']
  },
  {
    id: 'prod-heavy-duty-pallet-truck',
    name: 'Heavy Duty Hand Pallet Truck',
    category: 'Hand Pallet Truck',
    image: heavyDutyPalletTruck1,
    images: [heavyDutyPalletTruck1, heavyDutyPalletTruck2, heavyDutyPalletTruck3],
    shortDesc: 'The Heavy Duty Hand Pallet Truck is built for lifting and transporting heavy palletized loads with ease and safety. Its rugged steel construction ensures smooth operation, high durability, and reliable performance in demanding industrial environments.',
    longDesc: 'A Heavy Duty Hand Pallet Truck is a robust material-handling tool designed to lift and transport very heavy pallets and goods with ease. It features a strong steel frame, durable forks, and high-capacity wheels for smooth and safe movement. Ideal for warehouses, factories, and workshops, it reduces manual effort, improves efficiency, and ensures safe handling of large and heavy loads.',
    specifications: {
      'Load Capacity': '5000 kg',
      'Fork Length': '1150mm',
      'Fork Width': '550mm',
      'Material': 'Mild Steel',
      'Brand': 'UTM',
      'Capacity': '5 Ton',
      'Wheel Material': 'Nylon'
    },
    relatedProductIds: ['prod-hand-pallet-pin-25x176', 'prod-main-shaft-35x285']
  },
  {
    id: 'prod-nylon-wheel-70x80',
    name: 'Nylon Wheel 70x80 Pallet Truck Part',
    category: 'Pallet Truck Wheel',
    image: nylonWheel70x80_1,
    images: [nylonWheel70x80_1, nylonWheel70x80_2, nylonWheel70x80_3],
    shortDesc: 'The Nylon Load Roller (70 × 80 mm) ensures smooth, quiet movement and reliable support for heavy pallet loads. Made from high-quality impact-resistant nylon, it offers excellent durability, low wear, and long-lasting performance.',
    longDesc: 'This spare part is a durable 70x80 millimeter load roller wheel made from tough, impact-resistant nylon. It is installed at the very front of the forks on a manual hand pallet truck to support and transport the lifted weight. Over time, dragging heavy pallets across rough warehouse floors causes the original wheels to chip, flatten, or jam. Replacing damaged rollers with these smooth nylon wheels restores effortless movement, allowing the truck to glide easily across the floor once again.',
    specifications: {
      'Diameter': '80 mm',
      'Wheel Type': 'Hand Pallet Truck Wheel',
      'Material': 'Nylon',
      'Width': '70 mm',
      'Load Capacity': '5000 kg',
      'Brand': 'Utm',
      'Color': 'white'
    },
    relatedProductIds: ['prod-heavy-duty-pallet-truck', 'prod-ppcp-wheel']
  },
  {
    id: 'prod-pu-pallet-wheel',
    name: 'Pu Hand Pallet Truck Wheels',
    category: 'Pallet Truck Wheel',
    image: puPalletWheel1,
    images: [puPalletWheel1, puPalletWheel2, puPalletWheel3],
    shortDesc: 'The PU (Polyurethane) Hand Pallet Truck Wheel ensures smooth, quiet movement and reliable handling of heavy loads. Made from high-quality polyurethane, it offers excellent wear resistance, floor protection, and long-lasting performance.',
    longDesc: 'PU (Polyurethane) Hand Pallet Truck Wheels are durable replacement wheels designed for smooth and efficient movement of hand pallet trucks. They are wear-resistant, provide low rolling resistance, and protect floors from damage while carrying heavy loads. Ideal for warehouses, factories, and workshops, these wheels enhance the performance, safety, and lifespan of pallet trucks.',
    specifications: {
      'Material': 'casting and pu',
      'Type': 'Support Wheel',
      'Diameter': '180 mm',
      'Usage/Application': 'industrial',
      'Width': '70x80',
      'Load Capacity': '3000kg',
      'Brand': 'UTM',
      'Country of Origin': 'Made in India'
    },
    relatedProductIds: ['prod-nylon-wheel-70x80', 'prod-ppcp-wheel']
  },
  {
    id: 'prod-roller-bracket-nylon-wheel',
    name: 'Roller Bracket Set Nylon Pallet Truck Wheel',
    category: 'Pallet Truck Wheel',
    image: rollerBracketNylonWheel1,
    images: [rollerBracketNylonWheel1, rollerBracketNylonWheel2, rollerBracketNylonWheel3],
    shortDesc: 'The Roller Bracket Set with Nylon Wheel provides smooth, stable movement and secure support for pallet truck operations. Its durable steel bracket and high-quality nylon wheel ensure reliable performance, low wear, and long service life.',
    longDesc: 'The Roller Bracket Set with Nylon Wheel is a robust and reliable assembly designed to provide smooth, stable movement in sliding and guiding applications. It features a strong metal bracket that securely supports a high-quality nylon wheel, offering excellent load-bearing capacity, low friction, and good resistance to wear and impact. The nylon wheel ensures quiet operation and reduced surface abrasion, making this roller bracket set ideal for industrial machinery, conveyors, racks, and material-handling systems where durability, efficiency, and consistent performance are required.',
    specifications: {
      'Material': 'Nylon',
      'Construction Type': 'Solid',
      'Type': 'Load Wheel',
      'Bearing Type': 'Roller Bearing',
      'Diameter': '80 mm',
      'Caster Option': 'Swivel',
      'Size': '70X80',
      'Width': '97MM',
      'Brand': 'UTM',
      'Load Capacity': '3000 kg',
      'Wheel Material': 'Nylon',
      'Hardness': '70 hrc',
      'Weight': '20 g'
    },
    relatedProductIds: ['prod-pu-pallet-wheel', 'prod-nylon-wheel-70x80']
  },
  {
    id: 'prod-roller-bracket-pu-wheel',
    name: 'Roller Bracket Set PU Wheel',
    category: 'Roller Wheel',
    image: rollerBracketPuWheel1,
    images: [rollerBracketPuWheel1, rollerBracketPuWheel2, rollerBracketPuWheel3, rollerBracketPuWheel4],
    shortDesc: 'The Roller Bracket Assembly with PU Wheels provides smooth, quiet movement and stable support for heavy pallet loads. Its durable steel bracket and polyurethane wheels ensure reliable performance, excellent wear resistance, and long service life.',
    longDesc: 'This is a complete roller bracket assembly pre-fitted with durable dual polyurethane (PU) load wheels. It mounts underneath the front forks of a manual hand pallet truck to support and guide heavy loads. Replacing a bent bracket or worn-out wheels with this ready-to-install set quickly restores smooth, quiet rolling and perfect load alignment.',
    specifications: {
      'Wheel Size': '80 × 70 mm (or as per model)',
      'Wheel Material': 'Polyurethane (PU)',
      'Load Capacity': 'Up to 2.5 Ton (depending on pallet truck model)',
      'Bearing Type': 'Precision Ball Bearing',
      'Wheel Type': 'Dual PU Load Roller',
      'Body Material': 'Heavy-Duty Cast Steel / Forged Steel Bracket'
    },
    relatedProductIds: ['prod-roller-bracket-nylon-wheel', 'prod-pu-pallet-wheel']
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
