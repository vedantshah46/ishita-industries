import precisionImg   from '../Images/Precision Machining Expertise.png'
import industrialImg  from '../Images/Industrial Components.png'
import extrusionImg   from '../Images/Section Components.jpg'

import turnedImage    from '../Images/brass-turned-component.png'
import forgedImage    from '../Images/brass-forged-component.png'
import millingImage   from '../Images/brass-milling-component.png'
import pressedImage   from '../Images/bras-broach-component.png'
import stampingImage  from '../Images/brass-stamping-component.png'
import castingImage   from '../Images/brass-casting-component.png'

import electricImage  from '../Images/ProductIndustrial-electrical.png'
import automotiveImage from '../Images/ProductIndustrial-automotive.png'
import fastenerImage  from '../Images/ProductIndustrial-fastner.png'
import engineeringImage from '../Images/ProductIndustrial-engineering.png'
import cpvcImage      from '../Images/ProductIndustrial-CPVC PPR Inserts.png'

import extrusionRodsImage  from '../Images/ProductExtrusion-Brass Extrusion Rods.png'
import hollowImage         from '../Images/ProductExtrusion-Brass Hollow Rods.png'
import profileImage        from '../Images/ProductExtrusion-Brass Profile & Section Rods.png'

export const CATEGORIES = [
  {
    slug: 'precision',
    name: 'Precision Machining',
    kicker: 'All kind of Precision',
    image_url: precisionImg,
    subcategories: [
      { slug: 'brass-turned',   name: 'Turned Components',   image_url: turnedImage },
      { slug: 'brass-forged',   name: 'Forged Components',   image_url: forgedImage },
      { slug: 'brass-milling',  name: 'Milling Components',  image_url: millingImage },
      { slug: 'brass-pressed',  name: 'Pressed Components',  image_url: pressedImage },
      { slug: 'brass-stamped',  name: 'Stamped Components',  image_url: stampingImage },
      { slug: 'brass-casting',  name: 'Casting Components',  image_url: castingImage },
    ],
  },
  {
    slug: 'industrial',
    name: 'Industrial Components',
    kicker: 'All kind of Industrial',
    image_url: industrialImg,
    subcategories: [
      { slug: 'electric',          name: 'Electric',          image_url: electricImage },
      { slug: 'automotive',        name: 'Automotive',        image_url: automotiveImage },
      { slug: 'fastner',           name: 'Fastner',           image_url: fastenerImage },
      { slug: 'engineering',       name: 'Engineering',       image_url: engineeringImage },
      { slug: 'Sanitary-Fitting',  name: 'Sanitary Fitting',  image_url: cpvcImage },
    ],
  },
  {
    slug: 'extrusion',
    name: 'Extrusion Products',
    kicker: 'All kind of Extrusion',
    image_url: extrusionImg,
    subcategories: [
      { slug: 'brass-extrusion-rods',      name: 'Extrusion Rods',          image_url: extrusionRodsImage },
      { slug: 'brass-hollow-rods',         name: 'Hollow Rods',             image_url: hollowImage },
      { slug: 'brass-profile-section-rods', name: 'Profile & Section Rods', image_url: profileImage },
    ],
  },
]

export function getCategoryBySlug(slug) {
  return CATEGORIES.find(c => c.slug === slug) ?? null
}

export function getSubcategoryBySlug(superCatSlug, subCatSlug) {
  return getCategoryBySlug(superCatSlug)?.subcategories.find(sc => sc.slug === subCatSlug) ?? null
}
