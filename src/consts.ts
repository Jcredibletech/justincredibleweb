export const SITE_TITLE = 'JustinCredible Web';
export const SITE_TAGLINE = 'Websites & automation for Northwest Arkansas businesses';
export const SITE_DESCRIPTION =
  'JustinCredible Web builds clear, fast websites and light automation for local service businesses in Gentry and Northwest Arkansas. Owned by Justin McBroom.';
export const SITE_AUTHOR = 'Justin McBroom';
export const SITE_AREA = 'Gentry / Northwest Arkansas';
export const SITE_EMAIL = 'mustangeverything@gmail.com';
export const SITE_PHONE = '(970) 957-2495';
export const BOOKING_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0vZzf2Tn2naoM_R81UfirXF7q06IAu-AKI7BMT7_duLh1vvSVFx9zOjwaKbHy2tLAl-HdG7G-G';

export const PACKAGES = [
  {
    id: 'launch',
    name: 'Launch Site',
    price: '$2,500',
    blurb: 'A polished, mobile-first site that makes it easy to call, email, or book you.',
    includes: [
      'Up to 5 pages (Home, Services, About, Contact, FAQ)',
      'Mobile-first layout, fast load, clear CTAs',
      'Contact form + Book a call link',
      'Basic SEO (titles, meta, sitemap)',
      'Launch on GitHub Pages or your host',
    ],
  },
  {
    id: 'automate',
    name: 'Automate Ops',
    price: '$3,500',
    priceNote: 'Standalone · or $1,500 as add-on to Launch / Online System',
    blurb: 'Cut busywork: intake, reminders, and follow-ups that run without you babysitting them.',
    includes: [
      'Lead intake form wired to email or sheet',
      'Appointment booking link integration',
      'Simple follow-up sequences (email)',
      'Handoff doc so you know what runs where',
      '30-day tweak window after go-live',
    ],
  },
  {
    id: 'online-system',
    name: 'Online System',
    price: '$4,000',
    hero: true,
    blurb: 'Website + light ops automation in one package — the full local presence.',
    includes: [
      'Everything in Launch Site',
      'Intake + booking wired up',
      'Basic lead capture automation',
      'Care Plan recommendation at launch',
      'Handoff walkthrough (email or short call)',
    ],
  },
] as const;

export const CARE_PLANS = [
  {
    id: 'clean',
    name: 'Clean',
    price: '$250',
    period: '/ month',
    blurb: 'Keep the site accurate and online. Light edits, uptime watch, monthly check-in.',
    includes: [
      'Up to 1 hour of content edits / month',
      'Uptime + broken-link check',
      'Security / dependency glance',
      'Email support (48-hour reply window)',
    ],
  },
  {
    id: 'steady',
    name: 'Steady',
    price: '$350',
    period: '/ month',
    blurb: 'Steady improvements: small feature tweaks, form checks, and a monthly summary.',
    includes: [
      'Everything in Clean',
      'Up to 2 hours of edits / month',
      'Form + booking link verification',
      'Monthly one-page status note',
    ],
  },
  {
    id: 'priority',
    name: 'Priority',
    price: '$500',
    period: '/ month',
    blurb: 'Faster response and more hands-on care when the site is part of how you get work.',
    includes: [
      'Everything in Steady',
      'Up to 4 hours of edits / month',
      'Priority reply (same business day when possible)',
      'Quarterly mini roadmap call or email',
    ],
  },
] as const;
