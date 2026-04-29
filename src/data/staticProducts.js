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
    name: 'Brass Turned Component',
    category: 'precision',
    image_url: turnedImage,
    sort_order: 0,
  },
  {
    slug: 'brass-forged-component',
    name: 'Brass Forged Component',
    category: 'precision',
    image_url: forgedImage,
    sort_order: 1,
  },
  {
    slug: 'brass-milling-component',
    name: 'Brass Milling Component',
    category: 'precision',
    image_url: millingImage,
    sort_order: 2,
  },
  {
    slug: 'brass-pressed-component',
    name: 'Brass Pressed Component',
    category: 'precision',
    image_url: pressedImage,
    sort_order: 3,
  },
  {
    slug: 'brass-stamped-component',
    name: 'Brass Stamped Component',
    category: 'precision',
    image_url: stampingImage,
    sort_order: 4,
  },
  {
    slug: 'brass-casting-component',
    name: 'Brass Casting Component',
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
    slug: 'cpvc-ppr-inserts',
    name: 'CPVC PPR Inserts',
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
    name: 'Brass Extrusion Rods',
    category: 'extrusion',
    image_url: extrusionImage,
    sort_order: 0,
  },
  {
    slug: 'brass-hollow-rods',
    name: 'Brass Hollow Rods',
    category: 'extrusion',
    image_url: hollowImage,
    sort_order: 1,
  },
  {
    slug: 'brass-profile-section-rods',
    name: 'Brass Profile & Section Rods',
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
  }
}
