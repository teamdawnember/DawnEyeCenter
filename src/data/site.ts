/** Content shown across the marketing site. */

export const navLinks = [
  'About',
  'Specialists',
  'Treatments',
  'Technology',
  'Patient Resources',
  'Locations',
] as const

export type Stat = {
  value: string
  label: string
  /** Shorter label used at phone widths. Falls back to `label`. */
  short?: string
}

export const heroStats: Stat[] = [
  { value: '10K+', label: 'Happy Eyes' },
  { value: '2K+', label: 'Surgeries' },
  { value: '10+', label: 'Super Specialities', short: 'Specialities' },
]

export const specialities = [
  'Cataract',
  'LASIK Surgery',
  'Diabetic Retinopathy',
  'Surgical Retina',
  'Medical Retina',
  'Glaucoma',
  'Dry Eyes',
  'Refractive Services',
  'Paediatric Ophthalmology',
  'Uveitis',
] as const

export type SymptomCard = {
  /** Two-digit index shown in the card's eyebrow. */
  index: string
  category: string
  title: string
  body: string
  cta: string
  /** Revealed in the card's lower-right corner on hover. All are 16:10. */
  image: string
}

export const symptomCards: SymptomCard[] = [
  {
    index: '01',
    category: 'Cataract',
    title: 'Cloudy or blurred vision',
    body: 'Colours look washed out and print is harder to read than it was.',
    cta: 'Explore Cataract Care',
    image: '/cards/svc-cataract-early.webp',
  },
  {
    index: '02',
    category: 'Retina',
    title: 'Floaters or flashes',
    body: 'Sudden specks, cobwebs or light flashes need checking quickly.',
    cta: 'Explore Retina Care',
    image: '/cards/svc-floaters.webp',
  },
  {
    index: '03',
    category: 'Dry Eye',
    title: 'Dry, gritty eyes',
    body: 'Burning, watering or a sandy feeling after screen work.',
    cta: 'Explore Dry Eye Care',
    image: '/cards/svc-dry-eye.webp',
  },
  {
    index: '04',
    category: 'LASIK & Refractive',
    title: 'Tired of glasses',
    body: 'LASIK, PRK and ICL we will tell you honestly if you are suitable.',
    cta: 'Explore Refractive Care',
    image: '/cards/svc-refractive.webp',
  },
  {
    index: '05',
    category: 'Cataract & Refractive',
    title: 'Night-driving glare',
    body: 'Halos and starbursts around headlights after dark.',
    cta: 'Explore Glare Assessment',
    image: '/cards/svc-glare.webp',
  },
  {
    index: '06',
    category: 'Paediatric & Myopia',
    title: 'Child’s vision',
    body: 'Squinting, sitting close to screens, or a rising spectacle number.',
    cta: 'Explore Paediatric Care',
    image: '/cards/svc-paediatric.webp',
  },
  {
    index: '07',
    category: 'Diabetic Retinopathy',
    title: 'Diabetes check',
    body: 'Annual retinal screening is the only way to catch it early.',
    cta: 'Explore Diabetic Screening',
    image: '/cards/svc-fundus.webp',
  },
  {
    index: '08',
    category: 'Glaucoma',
    title: 'Family history of glaucoma',
    body: 'It is inherited and silent. Pressure and field tests find it.',
    cta: 'Explore Glaucoma Care',
    image: '/cards/svc-slitlamp.webp',
  },
]

export type Specialist = {
  name: string
  /** Condensed form used in the booking chips. */
  short: string
  role: string
  /** Shown as a pill over the portrait. */
  focus: string
  image: string
}

export const specialists: Specialist[] = [
  {
    name: 'Dr Aswin Srinivasan',
    short: 'Dr Aswin S',
    role: 'Medical Director',
    focus: 'Cataract + Refractive',
    image: '/team/dr-aswin-srinivasan.webp',
  },
  {
    name: 'Dr Jeeva Krishnamoorty',
    short: 'Dr Jeeva K',
    role: 'Retinal Surgeon & Uveitis Specialist',
    focus: 'Retina + Uveitis',
    image: '/team/dr-jeeva-krishnamoorty.webp',
  },
  {
    name: 'Dr Vishnu Ganeshan',
    short: 'Dr Vishnu G',
    role: 'Corneal & Refractive Surgeon',
    focus: 'Cornea + LASIK',
    image: '/team/dr-vishnu-ganeshan.webp',
  },
]

export type JournalPost = {
  title: string
  /** ISO date; rendered as DD · MM · YY. */
  date: string
  image: string
}

export const journalPosts: JournalPost[] = [
  {
    title:
      'Step into the diagnostic suite and see what a full retinal map reveals',
    date: '2026-08-04',
    image: '/journal/svc-oct.webp',
  },
  {
    title:
      'Witness the precision of femtosecond laser correction, blade-free start to finish',
    date: '2026-07-21',
    image: '/journal/eye-fiber-colour.webp',
  },
  {
    title:
      'Cataract, glaucoma and the changes that quietly reshape sight after fifty',
    date: '2026-07-02',
    image: '/journal/svc-cataract-mature.webp',
  },
  {
    title: 'Children’s myopia control and the habits that slow it down',
    date: '2026-06-15',
    image: '/journal/svc-paediatric.webp',
  },
]

/** Headline figures shown in the dark band. */
export const figures: Stat[] = [
  { value: '10K+', label: 'Happy Eyes' },
  { value: '2K+', label: 'Surgeries' },
  { value: '10+', label: 'Super Specialities' },
  { value: '2', label: 'Centres' },
]

/* ---------------------------------------------------------- vision test */

export const visionSetupSteps = [
  'Put your laptop, tablet or phone on a table, screen facing you at about eye level. It must stay still.',
  'Step back two metres about three long steps — and stand facing the screen.',
  'Cover your left eye with your palm. Keep your glasses on if you normally wear them.',
  'Click the smallest line you can still read out loud. Then repeat for the other eye.',
]

export type SnellenLine = {
  /** The X in 20/X. */
  denominator: number
  letters: string
}

export const snellenLines: SnellenLine[] = [
  { denominator: 200, letters: 'E' },
  { denominator: 100, letters: 'F P' },
  { denominator: 70, letters: 'T O Z' },
  { denominator: 50, letters: 'L P E D' },
  { denominator: 40, letters: 'P E C F D' },
  { denominator: 30, letters: 'E D F C Z P' },
  { denominator: 25, letters: 'F E L O P Z D' },
  { denominator: 20, letters: 'D E F P O T E C' },
]

/* ------------------------------------------------------------ locations */

export type Location = {
  eyebrow: string
  name: string
  /** Full postal address. Also what the map and directions link geocode. */
  address: string
  pincode: string
  hours: string
  phone: string
}

export const locations: Location[] = [
  {
    eyebrow: 'Our main centre',
    name: 'Teynampet',
    address: '12, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018',
    pincode: '600018',
    hours: 'Mon–Sat 9am–7pm',
    phone: '72002 05455',
  },
  {
    eyebrow: 'Our modern centre',
    name: 'Velachery',
    address: '45, Lake View Road, Velachery, Chennai, Tamil Nadu 600042',
    pincode: '600042',
    hours: 'Mon–Sat 9am–7pm',
    phone: '72002 05455',
  },
]

/* -------------------------------------------------------------- booking */

export const bookingReasons = [
  'Routine eye examination',
  'Cataract consultation',
  'LASIK / refractive assessment',
  'Retina or diabetic screening',
  'Glaucoma review',
  'Child’s vision check',
  'Dry eye assessment',
  'Second opinion',
]


/* --------------------------------------------------------- testimonials */

export type Testimonial = {
  quote: string
  name: string
  /** Treatment and centre, shown as a mono line under the name. */
  context: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Dr Aswin replaced my father’s cataract lens in under twenty minutes. By evening he was reading the clock across the room again.',
    name: 'Priya R',
    context: 'Cataract surgery · Teynampet',
  },
  {
    quote:
      'Sudden floaters had me scared. Dr Jeeva saw me the same day, mapped the retina and sealed a small tear before it spread.',
    name: 'Arun K',
    context: 'Retinal care · Velachery',
  },
  {
    quote:
      'After ten years of thick glasses, LASIK with Dr Vishnu took one morning. Every test was explained and nothing felt rushed.',
    name: 'Meena S',
    context: 'LASIK · Teynampet',
  },
]

/* --------------------------------------------------------------- footer */

export const footerTagline =
  'Precision eye care from Dawn Eye Center. Two centres, three super specialists, one standard of care.'

export const footerHours = ['Mon–Sat 9am–7pm', 'Emergencies round the clock']

export const socialLinks = [
  'Instagram',
  'Facebook',
  'YouTube',
  'WhatsApp',
  'LinkedIn',
  'Google Reviews',
]

export const legalLinks = ['Privacy', 'Terms', 'Patient Rights']
