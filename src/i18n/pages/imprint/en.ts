import type { Copy } from "./types";

export default {
  meta: {
    title: "Imprint | Grand Fitness Batumi",
    description:
      "Imprint and legal information for Grand Fitness, 196 Bagrationi St, Batumi, Georgia — company details, contact and liability notes.",
  },
  hero: {
    eyebrow: "Legal",
    title: "<span class=\"text-gold\">Imprint.</span>",
    lead: "Legal information about the operator of this website.",
  },
  sections: [
    {
      title: "Operator of This Website",
      body: [
        "<p>Ltd Grand Fitness (შპს გრანდ ფიტნესი)<br>",
        "operating as <strong>Grand Fitness</strong></p>",
        "<p>196 Bagrationi St<br>",
        "Batumi 6000, Georgia</p>",
        "<p>Identification / registration number: 445784358<br>",
        "Registered with: National Agency of Public Registry of Georgia (NAPR)</p>",
      ].join("\n"),
    },
    {
      title: "Represented By",
      body: [
        "<p>Beka Tavberidze</p>",
      ].join("\n"),
    },
    {
      title: "Contact",
      body: [
        "<p>Phone: <a href=\"tel:+995557192727\" class=\"font-semibold tracking-[0.04em] text-gold hover:underline\">+995 557 19 27 27</a><br>",
        "Email: <a href=\"mailto:info@grandfitness.ge\" class=\"font-semibold tracking-[0.04em] text-gold hover:underline\">info@grandfitness.ge</a><br>",
        "Website: grandfitness.ge</p>",
      ].join("\n"),
    },
    {
      title: "Content Responsibility",
      body: [
        "<p>Responsible for the content of this website: Beka Tavberidze, address as above.</p>",
      ].join("\n"),
    },
    {
      title: "Liability for Content",
      body: [
        "<p>The contents of this website were created with great care. However, we cannot guarantee that all content is accurate, complete and up to date at all times. Information about schedules, prices and services is provided for general orientation; the terms agreed at our reception apply to memberships and services.</p>",
      ].join("\n"),
    },
    {
      title: "Liability for Links",
      body: [
        "<p>This website contains links to external third-party websites (for example Instagram, Facebook and Google Maps). We have no influence over the content of those websites and accept no responsibility for them; the respective provider is responsible for the content of linked pages.</p>",
      ].join("\n"),
    },
    {
      title: "Copyright",
      body: [
        "<p>All content on this website — including texts, photographs, graphics and the Grand Fitness logo — is protected by copyright. Any reproduction, distribution or other use beyond viewing this website requires our prior written consent.</p>",
      ].join("\n"),
    },
    {
      title: "Photo Credits",
      body: [
        "<p>All photographs © Grand Fitness.</p>",
      ].join("\n"),
    },
  ],
} satisfies Copy;
