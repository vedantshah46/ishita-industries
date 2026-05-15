/**
 * Static product data — extracted from the original hardcoded arrays.
 *
 * When VITE_PRODUCTS_DYNAMIC=false the useProducts() hook serves this
 * data directly with zero network cost.  When the flag is flipped to
 * true, the same hook fetches live data from Supabase instead.
 *
 * Image imports still reference local assets so the static path works
 * offline and in dev without a Supabase project configured.
 */

// ── Precision Machining images ────────────────────────────────────
import turnedImage   from '../Images/brass-turned-component.png'
import forgedImage   from '../Images/brass-forged-component.png'
import millingImage  from '../Images/brass-milling-component.png'
import pressedImage  from '../Images/bras-broach-component.png'
import stampingImage from '../Images/brass-stamping-component.png'
import castingImage  from '../Images/brass-casting-component.png'

// ── Industrial Component images ───────────────────────────────────
import electricImage     from '../Images/ProductIndustrial-electrical.png'
import automotiveImage   from '../Images/ProductIndustrial-automotive.png'
import fastenerImage     from '../Images/ProductIndustrial-fastner.png'
import engineeringImage  from '../Images/ProductIndustrial-engineering.png'
import cpvcImage         from '../Images/ProductIndustrial-CPVC PPR Inserts.png'

// ── Extrusion Product images ──────────────────────────────────────
import extrusionImage from '../Images/ProductExtrusion-Brass Extrusion Rods.png'
import hollowImage    from '../Images/ProductExtrusion-Brass Hollow Rods.png'
import profileImage   from '../Images/ProductExtrusion-Brass Profile & Section Rods.png'

// ── Product detail page images (Electric Pin) ─────────────────────
import electricPinImg1 from '../Images/Electric Pin-1.png'
import electricPinImg2 from '../Images/Electric Pin-2.jpg'
import electricPinImg3 from '../Images/Electric Pin-3.png'
import electricPinImg4 from '../Images/Electric Pin-4.png'

// ── Related / "Metal We Machine" images ───────────────────────────
import machine1 from '../Images/Precision Machining Expertise.png'
import machine2 from '../Images/Industrial Components.png'
import machine3 from '../Images/Section Components.jpg'


// ═══════════════════════════════════════════════════════════════════
// CATEGORY: Precision Machining
// ═══════════════════════════════════════════════════════════════════
export const precisionProducts = [
  {
    slug: 'brass-turned-component',
    name: 'Turned Component',
    category: 'precision',
    image_url: turnedImage,
    sort_order: 0,
  },
  {
    slug: 'brass-forged-component',
    name: 'Forged Component',
    category: 'precision',
    image_url: forgedImage,
    sort_order: 1,
  },
  {
    slug: 'brass-milling-component',
    name: 'Milling Component',
    category: 'precision',
    image_url: millingImage,
    sort_order: 2,
  },
  {
    slug: 'brass-pressed-component',
    name: 'Pressed Component',
    category: 'precision',
    image_url: pressedImage,
    sort_order: 3,
  },
  {
    slug: 'brass-stamped-component',
    name: 'Stamped Component',
    category: 'precision',
    image_url: stampingImage,
    sort_order: 4,
  },
  {
    slug: 'brass-casting-component',
    name: 'Casting Component',
    category: 'precision',
    image_url: castingImage,
    sort_order: 5,
  },
]


// ═══════════════════════════════════════════════════════════════════
// CATEGORY: Industrial Components
// ═══════════════════════════════════════════════════════════════════
export const industrialProducts = [
  {
    slug: 'electric',
    name: 'Electric',
    category: 'industrial',
    image_url: electricImage,
    sort_order: 0,
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    category: 'industrial',
    image_url: automotiveImage,
    sort_order: 1,
  },
  {
    slug: 'fastner',
    name: 'Fastner',
    category: 'industrial',
    image_url: fastenerImage,
    sort_order: 2,
  },
  {
    slug: 'engineering',
    name: 'Engineering',
    category: 'industrial',
    image_url: engineeringImage,
    sort_order: 3,
  },
  {
    slug: 'Sanitary-Fitting',
    name: 'Sanitary Fitting',
    category: 'industrial',
    image_url: cpvcImage,
    sort_order: 4,
  },
]


// ═══════════════════════════════════════════════════════════════════
// CATEGORY: Extrusion Products
// ═══════════════════════════════════════════════════════════════════
export const extrusionProducts = [
  {
    slug: 'brass-extrusion-rods',
    name: 'Extrusion Rods',
    category: 'extrusion',
    image_url: extrusionImage,
    sort_order: 0,
  },
  {
    slug: 'brass-hollow-rods',
    name: 'Hollow Rods',
    category: 'extrusion',
    image_url: hollowImage,
    sort_order: 1,
  },
  {
    slug: 'brass-profile-section-rods',
    name: 'Profile & Section Rods',
    category: 'extrusion',
    image_url: profileImage,
    sort_order: 2,
  },
]


// ═══════════════════════════════════════════════════════════════════
// ALL PRODUCTS — flat array combining every category
// ═══════════════════════════════════════════════════════════════════
export const staticProducts = [
  ...precisionProducts,
  ...industrialProducts,
  ...extrusionProducts,
]


// ═══════════════════════════════════════════════════════════════════
// PRODUCT DETAIL: Electric Pin  (the single detail page that exists)
// ═══════════════════════════════════════════════════════════════════
export const staticProductDetails = {
  'electric-pin': {
    slug: 'electric-pin',
    name: 'Electric Pin',
    category: 'industrial',
    description: `Brass Electrical Pins & Sockets, Brass Pin - Established in 1985, Ishita Industries specializes in the production of Brass Pin Conforming to Customer Technical Specification with ( Drawing & Sample ) & ensure Stringent Quality Standard especially for engineering Industry.\n\nWe are using the best quality of brass with the aid of pioneered technology in tandem with predefined industry norms & standards.`,
    image_url: electricPinImg1,
    product_images: [
      { image_url: electricPinImg1, alt_text: 'Electric Pin - Front', sort_order: 0 },
      { image_url: electricPinImg2, alt_text: 'Electric Pin - Side', sort_order: 1 },
      { image_url: electricPinImg3, alt_text: 'Electric Pin - Top', sort_order: 2 },
      { image_url: electricPinImg4, alt_text: 'Electric Pin - Detail', sort_order: 3 },
    ],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'ISO 2768-M (Any as per customize Specification)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Nickel, Zinc, Tin, Lead, Chrome, Silver, Gold', sort_order: 1 },
      { label: 'Size We Handle', value: 'Circumscribe Diameter 1.5MM to 200MM', sort_order: 2 },
      { label: 'Length We Handle', value: 'Turning Length 400 MM', sort_order: 3 },
      { label: 'Material we serve', value: 'As per customer Customer Requirements.', sort_order: 4 },
      { label: 'Process we Undertake', value: 'Turning, Forging, Milling, Stamping, Drilling, Molding, Grinding, Assembly & Finishing', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'Unified Coarse thread for Screw thread inserts [(EG UNC(STI)]' },
      { tag: 'British Standard pipe thread (BSP) OR (BSPT) OR (G)' },
      { tag: 'British Standard' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Straight Pipe Thread (NPSM)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Unified Extra Fine thread (UNEF)' },
      { tag: 'Whitworth Standard parallel internal pipe thread (RP)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Steel Conduit Thread (DIN 40430 - Pg)' },
      { tag: 'British Association (BA) Thread' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },
  'brass-turned-component': {
    slug: 'brass-turned-component',
    name: 'Turned Component',
    category: 'precision',
    description: `Ishita Industries specializes in precision brass turned components manufactured using advanced CNC turning centres and secondary operations. Established in 1985, we serve OEMs in electrical, automotive, plumbing, and instrumentation industries with components conforming to customer drawings and technical specifications.\n\nWe use the best quality free-cutting brass and employ pioneered technology to ensure stringent dimensional accuracy, surface finish, and repeatability across all production batches.`,
    image_url: turnedImage,
    product_images: [{ image_url: turnedImage, alt_text: 'Brass Turned Component', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'ISO 2768-M (Any as per Customer Specification)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Nickel, Zinc, Tin, Lead, Chrome, Silver, Gold', sort_order: 1 },
      { label: 'Size We Handle', value: 'Circumscribe Diameter 1.5MM to 200MM', sort_order: 2 },
      { label: 'Length We Handle', value: 'Turning Length up to 400MM', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass IS 319 Type (I), As per Customer Requirement', sort_order: 4 },
      { label: 'Process we Undertake', value: 'CNC Turning, Drilling, Threading, Knurling, Slotting, Grinding', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP) OR (BSPT) OR (G)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'American National Straight Pipe Thread (NPSM)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },
  'brass-forged-component': {
    slug: 'brass-forged-component',
    name: 'Forged Component',
    category: 'precision',
    description: `Ishita Industries manufactures precision brass forged components that offer superior strength, structural integrity, and material density compared to machined parts. Our hot forging process eliminates internal voids and refines the grain structure for enhanced mechanical properties.\n\nForged brass components from Ishita are widely used in valve bodies, pipe fittings, electrical connectors, and automotive parts — all manufactured to customer technical specifications with post-forging CNC machining available.`,
    image_url: forgedImage,
    product_images: [{ image_url: forgedImage, alt_text: 'Brass Forged Component', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'IT9 to IT11 (Post-Forging), IT7 with CNC Finish', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Natural, Nickel Plated, Zinc, Chrome', sort_order: 1 },
      { label: 'Size We Handle', value: 'Up to 300MM in any dimension', sort_order: 2 },
      { label: 'Weight Range', value: '50 Grams to 10 Kilograms', sort_order: 3 },
      { label: 'Material we serve', value: 'Forging Brass IS 319, Naval Brass, As per Customer Requirement', sort_order: 4 },
      { label: 'Process we Undertake', value: 'Hot Forging, Trimming, CNC Machining, Thread Cutting, Finishing', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP) OR (BSPT) OR (G)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },
  'brass-milling-component': {
    slug: 'brass-milling-component',
    name: 'Milling Component',
    category: 'precision',
    description: `Ishita Industries produces precision brass milling components for applications requiring complex geometries, flat surfaces, slots, and profiles that cannot be achieved through turning alone. Our milling operations use modern CNC machining centres with 3-axis and 4-axis capability.\n\nFrom small instrument housings to larger valve blocks and manifolds, we deliver milled brass components with tight dimensional accuracy, smooth surface finish, and full conformance to customer drawings.`,
    image_url: millingImage,
    product_images: [{ image_url: millingImage, alt_text: 'Brass Milling Component', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'ISO 2768-M / ISO 2768-F (As per Drawing)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Nickel, Zinc, Chrome, Natural Brass', sort_order: 1 },
      { label: 'Size We Handle', value: 'Up to 400MM x 300MM x 200MM', sort_order: 2 },
      { label: 'Machining Capability', value: '3-Axis CNC Milling, 4-Axis Indexing', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass IS 319, Naval Brass, As per Requirement', sort_order: 4 },
      { label: 'Process we Undertake', value: 'Face Milling, Pocket Milling, Drilling, Boring, Slotting, Reaming', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },
  'brass-pressed-component': {
    slug: 'brass-pressed-component',
    name: 'Pressed Component',
    category: 'precision',
    description: `Ishita Industries manufactures high-precision brass pressed components using power presses and progressive dies. Our pressing operations deliver consistent dimensional accuracy across high-volume production runs with minimal material waste.\n\nEach component undergoes strict quality checks to ensure flatness, burr-free edges, and conformance to customer drawings and industry standards.`,
    image_url: pressedImage,
    product_images: [{ image_url: pressedImage, alt_text: 'Brass Pressed Component', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'ISO 2768-M (As per Customer Specification)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Nickel, Zinc, Tin, Chrome, Silver, Gold', sort_order: 1 },
      { label: 'Thickness We Handle', value: '0.5MM to 10MM', sort_order: 2 },
      { label: 'Size We Handle', value: 'Up to 300MM x 300MM Blank Size', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass, Naval Brass, As per Customer Requirement', sort_order: 4 },
      { label: 'Process we Undertake', value: 'Blanking, Piercing, Bending, Drawing, Progressive Die Pressing', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'brass-stamped-component': {
    slug: 'brass-stamped-component',
    name: 'Stamped Component',
    category: 'precision',
    description: `Ishita Industries produces precision brass stamped components for electrical, automotive, and consumer electronics industries. Using advanced stamping presses and custom tooling, we manufacture complex shapes with repeatable accuracy at competitive volumes.\n\nOur stamping process ensures tight dimensional control, clean shear edges, and consistent finish — critical for components used in connectors, terminals, and housings.`,
    image_url: stampingImage,
    product_images: [{ image_url: stampingImage, alt_text: 'Brass Stamped Component', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'ISO 2768-F to ISO 2768-M', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Nickel, Tin, Silver, Gold, Zinc Plating', sort_order: 1 },
      { label: 'Material Thickness', value: '0.3MM to 6MM', sort_order: 2 },
      { label: 'Size We Handle', value: 'Up to 250MM x 250MM', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass IS 319, Electrolytic Copper, As per Drawing', sort_order: 4 },
      { label: 'Process we Undertake', value: 'Stamping, Coining, Embossing, Bending, Piercing, Progressive Tooling', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'brass-casting-component': {
    slug: 'brass-casting-component',
    name: 'Casting Component',
    category: 'precision',
    description: `Ishita Industries offers premium brass casting components through gravity die casting and sand casting processes. Established in 1985, we have built expertise in producing complex geometries that are difficult to achieve through machining alone.\n\nOur castings are used in valves, fittings, pump bodies, and decorative hardware — all produced to customer technical specifications with post-casting machining and surface finishing as required.`,
    image_url: castingImage,
    product_images: [{ image_url: castingImage, alt_text: 'Brass Casting Component', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'CT6 to CT8 (ISO 8062)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Natural, Nickel, Chrome, Lacquered, Powder Coat', sort_order: 1 },
      { label: 'Size We Handle', value: 'Up to 500MM in any dimension', sort_order: 2 },
      { label: 'Weight Range', value: '50 Grams to 25 Kilograms', sort_order: 3 },
      { label: 'Material we serve', value: 'Leaded Brass, Naval Brass, Gunmetal, As per Customer Requirement', sort_order: 4 },
      { label: 'Process we Undertake', value: 'Gravity Die Casting, Sand Casting, Post-Casting Machining, Finishing', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'electric': {
    slug: 'electric',
    name: 'Electric',
    category: 'industrial',
    description: `Ishita Industries is a leading manufacturer of precision brass electrical components since 1985. Our electrical range covers terminals, connectors, switch parts, busbars, and contact elements — all manufactured to customer drawings and international electrical standards.\n\nWe serve OEMs in switchgear, panel building, and consumer electronics, ensuring dimensional accuracy and conductivity performance across every batch.`,
    image_url: electricImage,
    product_images: [{ image_url: electricImage, alt_text: 'Brass Electrical Components', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'ISO 2768-M (As per Customer Specification)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Nickel, Tin, Silver, Gold, Zinc', sort_order: 1 },
      { label: 'Size We Handle', value: 'Circumscribe Diameter 1.5MM to 150MM', sort_order: 2 },
      { label: 'Conductivity', value: 'Min. 26% IACS (Free Cutting Brass)', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass IS 319, Electrolytic Copper, As per Requirement', sort_order: 4 },
      { label: 'Process we Undertake', value: 'Turning, Milling, Stamping, Assembly, Plating', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Steel Conduit Thread (DIN 40430 - Pg)' },
      { tag: 'British Association (BA) Thread' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'automotive': {
    slug: 'automotive',
    name: 'Automotive',
    category: 'industrial',
    description: `Ishita Industries supplies precision brass automotive components to leading OEMs and Tier-1 suppliers. Our automotive range includes fuel system parts, sensor housings, valve bodies, and electrical connectors — manufactured to IATF 16949-aligned quality standards.\n\nEvery component is produced with stringent dimensional control and surface integrity to meet the demanding requirements of the automotive environment.`,
    image_url: automotiveImage,
    product_images: [{ image_url: automotiveImage, alt_text: 'Brass Automotive Components', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'ISO 2768-F / ISO 2768-M', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Nickel, Zinc, Chrome, Tin, Passivation', sort_order: 1 },
      { label: 'Size We Handle', value: 'Circumscribe Diameter 2MM to 120MM', sort_order: 2 },
      { label: 'Pressure Rating', value: 'Up to 250 Bar (Application Dependent)', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass, Naval Brass, As per Customer Drawing', sort_order: 4 },
      { label: 'Process we Undertake', value: 'CNC Turning, Milling, Forging, Drilling, Thread Cutting, Assembly', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'fastner': {
    slug: 'fastner',
    name: 'Fastner',
    category: 'industrial',
    description: `Ishita Industries manufactures a complete range of brass fasteners including hex bolts, nuts, screws, studs, washers, and threaded inserts. Since 1985, we have supplied fasteners conforming to DIN, ISO, BSW, UNC, and custom standards across industrial, electrical, and plumbing applications.\n\nOur fasteners are available in raw, nickel-plated, zinc-plated, and chrome finishes — with full thread inspection using calibrated gauges on every batch.`,
    image_url: fastenerImage,
    product_images: [{ image_url: fastenerImage, alt_text: 'Brass Fasteners', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: '6g / 6H (ISO Thread Tolerance)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Natural, Nickel, Zinc, Tin, Chrome', sort_order: 1 },
      { label: 'Size We Handle', value: 'M2 to M48 / 1/16" to 2" BSP', sort_order: 2 },
      { label: 'Length We Handle', value: 'Up to 300MM', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass IS 319 Type (I) & Type (II)', sort_order: 4 },
      { label: 'Process we Undertake', value: 'CNC Turning, Thread Rolling, Thread Cutting, Slotting, Knurling', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Unified Extra Fine thread (UNEF)' },
      { tag: 'British Standard pipe thread (BSP) OR (BSPT) OR (G)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'American National Straight Pipe Thread (NPSM)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Steel Conduit Thread (DIN 40430 - Pg)' },
      { tag: 'British Association (BA) Thread' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'engineering': {
    slug: 'engineering',
    name: 'Engineering',
    category: 'industrial',
    description: `Ishita Industries delivers precision brass engineering components for general engineering, hydraulics, pneumatics, and instrumentation industries. Our engineering components range from simple turned parts to complex multi-operation machined assemblies.\n\nWith over 38 years of manufacturing experience, we bring together CNC precision and skilled craftsmanship to produce components that meet the most demanding engineering specifications.`,
    image_url: engineeringImage,
    product_images: [{ image_url: engineeringImage, alt_text: 'Brass Engineering Components', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'ISO 2768-M / ISO 2768-F (As per Drawing)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Nickel, Zinc, Chrome, Tin, Natural Brass', sort_order: 1 },
      { label: 'Size We Handle', value: 'Circumscribe Diameter 1.5MM to 200MM', sort_order: 2 },
      { label: 'Length We Handle', value: 'Up to 500MM', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass, Naval Brass, Gunmetal, As per Requirement', sort_order: 4 },
      { label: 'Process we Undertake', value: 'CNC Turning, Milling, Drilling, Boring, Grinding, Thread Cutting, Assembly', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP) OR (BSPT) OR (G)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'American National Straight Pipe Thread (NPSM)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Unified Fine thread (UNF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Whitworth Standard parallel internal pipe thread (RP)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'Sanitary-Fitting': {
    slug: 'Sanitary-Fitting',
    name: 'Sanitary Fitting',
    category: 'industrial',
    description: `Ishita Industries is a specialist manufacturer of brass inserts for CPVC, PPR, and PEX piping systems. Our threaded inserts are designed for direct moulding into plastic pipes and fittings, providing strong and leak-proof metal-to-plastic joints.\n\nAll inserts conform to relevant plumbing standards and are available in a wide range of sizes from ¼" BSP to 2" BSP with custom thread profiles on request.`,
    image_url: cpvcImage,
    product_images: [{ image_url: cpvcImage, alt_text: 'CPVC PPR Brass Inserts', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: '6H Thread Tolerance (ISO)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Natural Brass, Nickel Plated', sort_order: 1 },
      { label: 'Size We Handle', value: '¼" BSP to 2" BSP / DN8 to DN50', sort_order: 2 },
      { label: 'Insert Type', value: 'Straight, Elbow, Tee, Reducing, Female & Male', sort_order: 3 },
      { label: 'Material we serve', value: 'Free Cutting Brass IS 319, DZR Brass (As per Requirement)', sort_order: 4 },
      { label: 'Process we Undertake', value: 'CNC Turning, Thread Cutting, Knurling, Pressure Testing', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'British Standard pipe thread (BSP) OR (BSPT) OR (G)' },
      { tag: 'Whitworth Standard parallel internal pipe thread (RP)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'American National Straight Pipe Thread (NPSM)' },
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'DIN Pipe Thread' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'brass-extrusion-rods': {
    slug: 'brass-extrusion-rods',
    name: 'Extrusion Rods',
    category: 'extrusion',
    description: `Ishita Industries supplies high-quality brass extrusion rods manufactured from premium free-cutting brass alloys. Our extrusion rods serve as the raw material for precision turned components, electrical contacts, and industrial fittings.\n\nAvailable in a wide range of diameters and custom lengths, our extrusion rods are produced to IS 319, IS 6912, and CW614N / CW617N international standards with full mill test certificates on request.`,
    image_url: extrusionImage,
    product_images: [{ image_url: extrusionImage, alt_text: 'Brass Extrusion Rods', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'h9 / h11 (ISO Dimensional Tolerance)', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Bright Drawn, Extruded Natural', sort_order: 1 },
      { label: 'Diameter Range', value: '3MM to 100MM (Round)', sort_order: 2 },
      { label: 'Length We Handle', value: '300MM to 3000MM (Custom Cut to Length)', sort_order: 3 },
      { label: 'Material we serve', value: 'IS 319 Type (I), CW614N, CW617N, Naval Brass', sort_order: 4 },
      { label: 'Standard', value: 'IS 319, IS 6912, BS 2874, ASTM B16', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'brass-hollow-rods': {
    slug: 'brass-hollow-rods',
    name: 'Hollow Rods',
    category: 'extrusion',
    description: `Ishita Industries manufactures precision brass hollow rods and tubes used in hydraulic cylinders, pneumatic fittings, valve stems, and decorative applications. Our hollow sections are extruded to maintain consistent wall thickness and concentricity throughout the length.\n\nAvailable in round, hexagonal, and square hollow profiles with tight OD and ID tolerances — supplied as standard stock or cut to custom lengths as per customer requirement.`,
    image_url: hollowImage,
    product_images: [{ image_url: hollowImage, alt_text: 'Brass Hollow Rods', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'OD: h9, Wall Thickness: ±10%', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Extruded Natural, Bright Drawn', sort_order: 1 },
      { label: 'OD Range', value: '6MM to 120MM', sort_order: 2 },
      { label: 'Wall Thickness', value: '1MM to 15MM', sort_order: 3 },
      { label: 'Length We Handle', value: '300MM to 3000MM (Custom Cut to Length)', sort_order: 4 },
      { label: 'Material we serve', value: 'IS 319 Type (I), CW614N, Naval Brass, As per Requirement', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'British Standard pipe thread (BSP) OR (BSPT) OR (G)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },

  'brass-profile-section-rods': {
    slug: 'brass-profile-section-rods',
    name: 'Profile & Section Rods',
    category: 'extrusion',
    description: `Ishita Industries offers a wide range of brass extruded profiles and section rods in standard and custom shapes. From simple hexagonal and square sections to complex architectural and industrial profiles, our extrusion capability covers virtually any cross-sectional geometry.\n\nOur profiles are used in architecture, electrical busbars, door hardware, marine fittings, and custom OEM applications — all supplied with material certification and dimensional inspection reports.`,
    image_url: profileImage,
    product_images: [{ image_url: profileImage, alt_text: 'Brass Profile and Section Rods', sort_order: 0 }],
    product_specs: [
      { label: 'Tolerance we Maintain', value: 'As per EN 12163 / IS 319 Profile Tolerances', sort_order: 0 },
      { label: 'Finish We Serve', value: 'Extruded Natural, Bright Drawn, Lacquered', sort_order: 1 },
      { label: 'Profile Shapes', value: 'Round, Hex, Square, Flat, T-Section, Custom Profiles', sort_order: 2 },
      { label: 'Size We Handle', value: 'Circumscribed Circle 5MM to 150MM', sort_order: 3 },
      { label: 'Length We Handle', value: '500MM to 6000MM (Standard & Custom Cut)', sort_order: 4 },
      { label: 'Material we serve', value: 'IS 319 Type (I) & (II), CW614N, Naval Brass, As per Requirement', sort_order: 5 },
    ],
    product_tags: [
      { tag: 'Metric ISO Thread (M)' },
      { tag: 'Unified Coarse thread (UNC)' },
      { tag: 'British Standard pipe thread (BSP)' },
      { tag: 'British Standard Fine thread (BSF)' },
      { tag: 'American National Pipe Thread (NPT)' },
      { tag: 'Metric ISO Fine Thread (MF)' },
      { tag: 'Whitworth thread (BSW)' },
      { tag: 'Custom Thread Specifications (As Per Drawing)' },
    ],
    related_products: [
      { name: 'Precision Machining Expertise', image_url: machine1 },
      { name: 'Industrial Components', image_url: machine2 },
      { name: 'Section Components', image_url: machine3 },
    ],
  },
}
