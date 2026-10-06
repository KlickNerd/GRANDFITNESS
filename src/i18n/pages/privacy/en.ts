import type { Copy } from "./types";

export default {
  meta: {
    title: "Privacy Policy | Grand Fitness Batumi",
    description:
      "Privacy policy of Grand Fitness Batumi: how we handle personal data under the Law of Georgia on Personal Data Protection — contact form, hosting, cookies and your rights.",
  },
  hero: {
    eyebrow: "Legal",
    title: "Privacy<br><span class=\"text-gold\">Policy.</span>",
    lead: "How we handle your personal data — plainly explained, in accordance with the Law of Georgia on Personal Data Protection.",
  },
  updated: "Last updated: September 6, 2026",
  sections: [
    {
      title: "1. Who We Are (Data Controller)",
      body: [
        "<p>The controller responsible for the processing of personal data on this website is:</p>",
        "<p>Ltd Grand Fitness (შპს გრანდ ფიტნესი)<br>",
        "operating as <strong>Grand Fitness</strong><br>",
        "196 Bagrationi St, Batumi 6000, Georgia<br>",
        "Identification number: 445784358<br>",
        "Phone: +995 557 19 27 27<br>",
        "Email: <a href=\"mailto:info@grandfitness.ge\" class=\"font-semibold tracking-[0.04em] text-gold hover:underline\">info@grandfitness.ge</a></p>",
        "<p>We process personal data in accordance with the <strong>Law of Georgia on Personal Data Protection</strong> (\"the Law\"). This policy explains what data we collect on this website, why, and what rights you have.</p>",
      ].join("\n"),
    },
    {
      title: "2. Data We Process & Why",
      body: [
        "<h3>2.1 Visiting this website (hosting &amp; server logs)</h3>",
        "<p>This website is delivered via <strong>Cloudflare, Inc.</strong> (USA/global network). When you visit any page, Cloudflare technically processes connection data such as your IP address, date and time of access, requested page, browser type and referring page. This processing is technically necessary to deliver the website securely and to protect it against attacks. Log data is not used by us to identify individual visitors.</p>",
        "<p><em>Legal basis:</em> our legitimate interest in operating a secure, functional website (Art. 5 of the Law — lawful processing necessary for legitimate interests).</p>",
        "<h3>2.2 Contact form</h3>",
        "<p>When you use our contact form, the data you enter (name, email address, optional phone number, chosen topic and your message) is transmitted to us by our form processing provider <strong>FormSubmit</strong> and delivered to our mailbox (info@grandfitness.ge). We use this data exclusively to answer your enquiry and for any follow-up communication you request (for example, booking your first session).</p>",
        "<p><em>Legal basis:</em> your consent, given by actively submitting the form, and the necessity of processing to respond to your request. We keep enquiry emails only as long as needed to handle your request and any legal retention obligations, after which they are deleted.</p>",
        "<h3>2.3 Contacting us directly</h3>",
        "<p>If you contact us by phone, email, Instagram or Facebook, we process the contact details and message content you provide, solely to handle your enquiry.</p>",
        "<h3>2.4 External services embedded in this website</h3>",
        "<p><strong>Google Fonts:</strong> to display our typography consistently, fonts are loaded from Google LLC servers. When a page loads, your browser transmits your IP address to Google. Google may process this data on servers outside Georgia. We do not transfer any further data to Google.</p>",
        "<p><strong>Links to third parties:</strong> our website links to external services such as Instagram, Facebook and Google Maps. This privacy policy does not apply to those services — when you follow such a link, the privacy policy of the respective provider applies. We do not embed social media tracking elements (such as pixels or plugins) on this website.</p>",
        "<h3>2.5 What we do NOT do</h3>",
        "<p>We currently do not use advertising trackers, marketing pixels, or profiling of website visitors. We do not sell personal data. Should we introduce analytics in the future, this policy will be updated first.</p>",
      ].join("\n"),
    },
    {
      title: "3. Cookies & Local Storage",
      body: [
        "<p>This website does not set tracking cookies. We use one item of local browser storage (\"gf-consent\") solely to remember that you have seen and dismissed our cookie notice — this contains no personal data and is never transmitted to us. Third-party services loaded by the site (see section 2.4) may use technically necessary mechanisms of their own.</p>",
      ].join("\n"),
    },
    {
      title: "4. Data Transfers Outside Georgia",
      body: [
        "<p>Our hosting (Cloudflare), form processing (FormSubmit) and font delivery (Google) involve providers whose servers may be located outside Georgia, including in the United States and the European Union. We select providers that maintain recognized data protection and security standards, and we transmit only the minimum data technically required.</p>",
      ].join("\n"),
    },
    {
      title: "5. Your Rights",
      body: [
        "<p>Under the Law of Georgia on Personal Data Protection, you have the right to:</p>",
        "<ul>",
        "<li>request information about whether and which of your personal data we process;</li>",
        "<li>access your data and receive a copy;</li>",
        "<li>request correction of inaccurate or incomplete data;</li>",
        "<li>request deletion or destruction of your data, or restriction/blocking of processing;</li>",
        "<li>withdraw any consent you have given, at any time, with effect for the future;</li>",
        "<li>object to processing based on legitimate interests.</li>",
        "</ul>",
        "<p>To exercise any of these rights, simply contact us at <a href=\"mailto:info@grandfitness.ge\" class=\"font-semibold tracking-[0.04em] text-gold hover:underline\">info@grandfitness.ge</a>. We respond to requests within the timeframes set by the Law.</p>",
      ].join("\n"),
    },
    {
      title: "6. Supervisory Authority",
      body: [
        "<p>You have the right to lodge a complaint with the Georgian data protection supervisory authority:</p>",
        "<p><strong>Personal Data Protection Service of Georgia</strong><br>",
        "Website: <a href=\"https://pdps.ge\" class=\"font-semibold tracking-[0.04em] text-gold hover:underline\" target=\"_blank\" rel=\"noopener\">pdps.ge</a></p>",
      ].join("\n"),
    },
    {
      title: "7. Data Security",
      body: [
        "<p>This website is delivered exclusively over encrypted connections (HTTPS/TLS). We apply appropriate technical and organizational measures to protect personal data against unauthorized access, loss or misuse.</p>",
      ].join("\n"),
    },
    {
      title: "8. Minors",
      body: [
        "<p>This website is directed at the general public and does not knowingly collect personal data from children. Gym memberships for minors are handled in person with parental consent in accordance with applicable law.</p>",
      ].join("\n"),
    },
    {
      title: "9. Changes to This Policy",
      body: [
        "<p>We may update this privacy policy to reflect changes in our services or legal requirements. The current version is always available on this page, with the date of the last update shown above.</p>",
      ].join("\n"),
    },
  ],
} satisfies Copy;
