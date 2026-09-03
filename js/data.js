/**
 * Investment Guru — Central Data Store
 * =====================================
 * Edit this file to add, remove, or modify:
 *   • Trainings      → TRAININGS
 *   • Contact info   → CONTACT
 *   • Hero stats     → STATS
 *   • Social media   → SOCIAL_MEDIA
 *
 * No HTML changes required for content updates.
 */

/* ─── TRAININGS ─────────────────────────────────────────────────────────── */
const TRAININGS = [
  {
    id: 'stock-101',
    number: '01',
    tag: 'FOUNDATION',
    title: 'Stock Market 101: Decode the Basics',
    description: 'Build a strong foundation and understand the market before you put your money to work.',
    fullDescription: 'Master core market mechanics, stock evaluation, and risk fundamentals tailored for beginners in NEPSE.',
    features: ['Diversified Investments', 'Risk Assessment', 'Regular Rebalancing'],
    duration: '8 weeks',
    price: 'NRs. 3,000',
    featured: true
  },
  {
    id: 'advance-technical',
    number: '02',
    tag: 'ADVANCED',
    title: 'Advance Training: Technical Analysis Mastery',
    description: 'Learn to read price action, identify trends and make structured market decisions.',
    fullDescription: 'Learn in-depth chart reading, price action patterns, momentum indicators, and systematic trade setups.',
    features: ['Goal-Based Planning', 'Asset Allocation', 'Tax Optimization'],
    duration: '12 weeks',
    price: 'NRs. 5,000',
    featured: false
  },
  {
    id: 'complete-program',
    number: '03',
    tag: 'COMPLETE PROGRAM',
    title: 'Basic to Advance: Complete Transformation Program',
    description: 'A structured path from fundamentals to practical market skills and strategy building.',
    fullDescription: 'A comprehensive end-to-end curriculum bridging fundamentals to professional trading and portfolio growth.',
    features: ['Risk Analysis', 'Insurance Planning', 'Emergency Funds'],
    duration: '6 weeks',
    price: 'NRs. 10,000',
    featured: false
  },
  {
    id: 'pro-trader',
    number: '04',
    tag: 'TRADING',
    title: 'Pro Trader: Mastering the Market Moves',
    description: 'Sharpen your execution, discipline and understanding of market movement.',
    fullDescription: 'Sharpen your execution, psychological discipline, and multi-timeframe swing and intraday strategies.',
    features: ['Pension Planning', 'Wealth Preservation', 'Income Strategies'],
    duration: '10 weeks',
    price: 'NRs. 12,000',
    featured: false
  },
  {
    id: 'recovery',
    number: '05',
    tag: 'RECOVERY',
    title: 'From Loss to Profit: The Recovery Training',
    description: 'Understand mistakes, rebuild discipline and create a more structured investing process.',
    fullDescription: 'Diagnostic training to audit past mistakes, rebuild risk management rules, and restore capital growth.',
    features: ['Tax Planning', 'Deduction Strategies', 'Compliance Support'],
    duration: '10 weeks',
    price: 'NRs. 15,000',
    featured: false
  }
];

/* ─── CONTACT DETAILS ───────────────────────────────────────────────────── */
const CONTACT = {
  email: 'investmentguru.np@gmail.com',
  emailOfficial: 'investmentguruofficial@gmail.com',
  phones: [
    { label: '01-5313800', tel: '+97715313800' },
    { label: '9767473560', tel: '+9779767473560' }
  ],
  whatsapp: { number: '9779767473560', display: '9767473560' },
  address: {
    line1: 'Ghattekulo, Anamnagar, Kathmandu',
    line2: 'Opposite to Bigmart, Anamnagar'
  },
  hours: 'Sun - Fri: 10:00 AM – 6:00 PM'
};

/* ─── HERO STATS / COUNTERS ─────────────────────────────────────────────── */
const STATS = [
  { count: 5,   suffix: '+', label: 'Years Experience',  delay: 50  },
  { count: 500, suffix: '+', label: 'Happy Clients',     delay: 120 },
  { count: 25,  suffix: '%', label: 'Portfolio Growth',  delay: 190 }
];

/* ─── SOCIAL MEDIA ──────────────────────────────────────────────────────── */
const SOCIAL_MEDIA = [
  {
    platform: 'facebook',
    label: 'Facebook',
    followers: '23K+',
    followerLabel: 'Followers',
    url: 'https://www.facebook.com/profile.php?id=61577410238664',
    color: '#1877F2',
    svgPath: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    followers: '1K+',
    followerLabel: 'Followers',
    url: 'https://www.instagram.com/investmentguru_np',
    color: 'url(#igGrad)',
    svgPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    platform: 'youtube',
    label: 'YouTube',
    followers: '6K+',
    followerLabel: 'Subscribers',
    url: 'https://www.youtube.com/@InvestmentGuru_np',
    color: '#FF0000',
    svgPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
  },
  {
    platform: 'tiktok',
    label: 'TikTok',
    followers: '49K+',
    followerLabel: 'Followers',
    url: 'https://www.tiktok.com/@investmentguru.np',
    color: '#000000',
    svgPath: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z'
  }
];
