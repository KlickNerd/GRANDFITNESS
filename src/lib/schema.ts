import type { Locale } from "@/i18n/config";
import { localizePath, locales } from "@/i18n/config";
import type { Copy } from "@/i18n/pages/home/types";
import { img } from "@/lib/images";

/**
 * schema.org structured data for the homepage (JSON-LD), built from the same copy as the visible
 * page so the two can never disagree: prices, FAQ and coaches come straight from
 * src/i18n/pages/home/<locale>.ts. Business facts below are the ones confirmed by Grand Fitness.
 */
const business = {
  name: "Grand Fitness",
  alternateName: ["გრანდ ფიტნესი", "Гранд Фитнес", "Grand Fitness Batumi"],
  slogan: "Better Than Yesterday",
  telephone: "+995557192727",
  email: "info@grandfitness.ge",
  address: {
    "@type": "PostalAddress",
    streetAddress: "196i Bagrationi St",
    addressLocality: "Batumi",
    addressRegion: "Adjara",
    postalCode: "6000",
    addressCountry: "GE",
  },
  hasMap: "https://maps.google.com/?q=Grand+Fitness+196i+Bagrationi+St+Batumi",
  sameAs: ["https://www.instagram.com/grand_fitness_batumi/", "https://www.facebook.com/61585147224532/"],
  amenities: ["Sauna", "Locker rooms", "Free weights", "Cardio zone"],
};

export function homeSchema(copy: Copy, locale: Locale, site: URL) {
  const abs = (path: string) => new URL(path, site).href;
  const root = abs("/");
  const pageUrl = abs(localizePath("/", locale));
  const gymId = `${root}#gym`;
  const websiteId = `${root}#website`;
  const currency = "GEL";
  const offer = (name: string, price: string) => ({
    "@type": "Offer",
    name,
    price,
    priceCurrency: currency,
    availability: "https://schema.org/InStock",
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ExerciseGym", "HealthClub"],
        "@id": gymId,
        name: business.name,
        alternateName: business.alternateName,
        slogan: business.slogan,
        description: copy.meta.description,
        url: root,
        logo: abs("/apple-touch-icon.png"),
        image: [abs("/img/og-cover.jpg"), ...copy.space.photos.map((p) => abs(img(p.src).src))],
        telephone: business.telephone,
        email: business.email,
        address: business.address,
        hasMap: business.hasMap,
        areaServed: { "@type": "City", name: "Batumi" },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "23:59",
        },
        priceRange: `${copy.prices.plans[0].amount}–${copy.prices.plans.at(-1)!.amount} ${currency}`,
        currenciesAccepted: currency,
        amenityFeature: business.amenities.map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        makesOffer: [
          ...copy.prices.plans.map((p) => offer(p.name, p.amount)),
          ...copy.prices.offers.map((o) => ({ ...offer(o.name, o.amount), description: o.text })),
        ],
        employee: copy.coaches.items.map((c) => ({ "@type": "Person", name: c.name })),
        sameAs: business.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: root,
        name: business.name,
        inLanguage: [...locales],
        publisher: { "@id": gymId },
      },
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: copy.meta.title,
        description: copy.meta.description,
        inLanguage: locale,
        isPartOf: { "@id": websiteId },
        about: { "@id": gymId },
        primaryImageOfPage: abs("/img/og-cover.jpg"),
        mainEntity: copy.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
