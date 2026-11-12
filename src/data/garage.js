// Informations du garage : une seule source pour tout le site.
// Si le téléphone, l'adresse ou les horaires changent, on corrige ici
// et les pages service, la page d'accueil et les données structurées suivent.

export const SITE = 'https://atelierfayeauto.com';

export const garage = {
  name: 'Atelier Faye Auto',
  mechanic: 'Matta Faye',
  mechanicRole: 'Mécanicien principal',
  phoneE164: '+221774797157',
  phoneDisplay: '77 479 71 57',
  whatsappNumber: '221774797157',
  street: 'Colobane, à proximité de la mosquée Massalikoul Djinane',
  city: 'Dakar',
  country: 'SN',
  latitude: 14.699232,
  longitude: -17.44936,
  opens: '08:30',
  closes: '21:00',
  hoursLabel: 'Tous les jours, de 8h30 à 21h',
  mapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJHS1GYP9zwQ4R_xjycBOerA0',
  logo: `${SITE}/images/logo-atelier-faye-auto.png`,
  image: `${SITE}/images/hero-matta.webp`,
};

export const telUrl = `tel:${garage.phoneE164}`;

export function whatsappUrl(message) {
  return `https://wa.me/${garage.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Les quatre services qui ont leur propre page.
export const servicePages = [
  {
    slug: 'diagnostic-auto-dakar',
    name: 'Diagnostic auto',
    label: 'Diagnostic automobile',
    short: 'Lecture des défauts à la valise, contrôle des voyants et recherche de panne.',
  },
  {
    slug: 'vidange-entretien-dakar',
    name: 'Vidange et entretien',
    label: 'Entretien courant',
    short: 'Vidange, filtres, niveaux et contrôles essentiels.',
  },
  {
    slug: 'climatisation-auto-dakar',
    name: 'Climatisation auto',
    label: 'Climatisation',
    short: 'Vérification, recherche de panne et entretien du système.',
  },
  {
    slug: 'reparation-freins-dakar',
    name: 'Réparation des freins',
    label: 'Freinage',
    short: 'Contrôle des plaquettes, disques et éléments de sécurité.',
  },
].map((service) => ({
  ...service,
  path: `/services/${service.slug}/`,
  url: `${SITE}/services/${service.slug}/`,
}));

// Les services proposés par l'atelier qui n'ont pas encore de page dédiée.
export const otherServices = [
  'Réparation mécanique',
  'Batterie et démarrage',
  'Remplacement moteur',
  'Remplacement d’organe',
];

// Identifiants stables : ils relient entre elles les données structurées de toutes les pages.
export const ids = {
  website: `${SITE}/#website`,
  garage: `${SITE}/#garage`,
  mechanic: `${SITE}/#matta-faye`,
};

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    name: garage.name,
    url: `${SITE}/`,
    inLanguage: 'fr',
    publisher: { '@id': ids.garage },
  };
}

export function mechanicSchema() {
  return {
    '@type': 'Person',
    '@id': ids.mechanic,
    name: garage.mechanic,
    jobTitle: garage.mechanicRole,
    description:
      'Mécanicien principal d’Atelier Faye Auto à Dakar, diplômé en mécanique automobile, spécialiste des véhicules légers.',
    worksFor: { '@id': ids.garage },
    knowsAbout: ['Diagnostic automobile', 'Mécanique automobile', 'Entretien automobile', 'Freinage', 'Climatisation automobile'],
  };
}

export function garageSchema() {
  return {
    '@type': 'AutoRepair',
    '@id': ids.garage,
    name: garage.name,
    description:
      'Garage automobile à Dakar : diagnostic, vidange et entretien, freinage, climatisation et réparation mécanique. Première orientation sur WhatsApp à partir d’une photo ou d’une vidéo de la panne.',
    url: `${SITE}/`,
    image: garage.image,
    logo: garage.logo,
    telephone: garage.phoneE164,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: garage.street,
      addressLocality: garage.city,
      addressRegion: 'Dakar',
      addressCountry: garage.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: garage.latitude, longitude: garage.longitude },
    hasMap: garage.mapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: garage.opens,
        closes: garage.closes,
      },
    ],
    areaServed: { '@type': 'City', name: 'Dakar' },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: garage.phoneE164,
        contactType: 'customer service',
        areaServed: 'SN',
        availableLanguage: ['fr'],
      },
    ],
    employee: { '@id': ids.mechanic },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services du garage',
      itemListElement: [
        ...servicePages.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', '@id': `${service.url}#service`, name: service.name, url: service.url },
        })),
        ...otherServices.map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      ],
    },
    sameAs: [garage.mapsUrl],
  };
}

export function breadcrumbSchema(pageUrl, items) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(pageUrl, faq) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

// Données structurées complètes d'une page service :
// la page, le service, le fil d'Ariane, la FAQ, le garage et le mécanicien.
export function servicePageGraph({ service, title, description, image, datePublished, dateModified, faq }) {
  const pageUrl = service.url;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: 'fr',
        isPartOf: { '@id': ids.website },
        about: { '@id': `${pageUrl}#service` },
        author: { '@id': ids.mechanic },
        primaryImageOfPage: image,
        datePublished,
        dateModified,
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `${service.name} à Dakar`,
        serviceType: service.label,
        description,
        url: pageUrl,
        image,
        provider: { '@id': ids.garage },
        areaServed: { '@type': 'City', name: 'Dakar' },
      },
      breadcrumbSchema(pageUrl, [
        { name: 'Accueil', url: `${SITE}/` },
        { name: 'Services', url: `${SITE}/#services` },
        { name: service.name, url: pageUrl },
      ]),
      faqSchema(pageUrl, faq),
      websiteSchema(),
      garageSchema(),
      mechanicSchema(),
    ],
  };
}
