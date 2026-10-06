import type { Copy } from "./types";

export default {
  meta: {
    title: "ჟურნალი — ვარჯიში, კვება და აღდგენა | გრანდ ფიტნესი ბათუმი",
    description:
      "გრანდ ფიტნესის ჟურნალი: პრაქტიკული სტატიები ვარჯიშზე, კვებასა და აღდგენაზე ბათუმის მწვრთნელებისგან. ახალი სტატიები, რომ გუშინდელზე უკეთესი გახდე.",
  },
  hero: {
    image: "about-main.jpg",
    eyebrow: "გრანდ ფიტნესის ჟურნალი",
    title: 'ბოლო<br><span class="text-gold">სტატიები.</span>',
    lead: "პრაქტიკული ცოდნა ჩვენი მწვრთნელებისგან — ვარჯიში, კვება, აღდგენა და ყველაფერი, რაც გუშინდელზე უკეთესს გხდის.",
  },
  readMore: "წაიკითხე →",
  note: 'ახალი სტატიები რეგულარულად ქვეყნდება — გამოგვყევი <a class="font-semibold tracking-[0.04em] text-gold hover:underline" href="https://www.instagram.com/grand_fitness_batumi/" target="_blank" rel="noopener">Instagram-ზე</a>, რომ არცერთი არ გამოგრჩეს.',
  cta: {
    eyebrow: "საკმარისად წაიკითხე?",
    title: 'დროა<br><span class="text-gold">ივარჯიშო.</span>',
    lead: "ცოდნას აზრი მხოლოდ მაშინ აქვს, როცა იყენებ. მოდი და პრაქტიკაში გამოცადე.",
    buttons: [
      { label: "დაჯავშნე პირველი ვარჯიში", href: "/contact/" },
      { label: "ნახე ვარჯიშები", href: "/classes/", style: "outline" },
    ],
  },

  article: {
    titleSuffix: " | გრანდ ფიტნესის ჟურნალი",
    allArticles: "← ყველა სტატია",
    keepReading: { eyebrow: "წაიკითხე მეტი", title: "მეტი<br>ჟურნალიდან." },
    cta: {
      eyebrow: "გამოცადე პრაქტიკაში",
      title: 'მზად ხარ<br>პირველი <span class="text-gold">ვარჯიშისთვის?</span>',
      lead: "კითხვა ცოდნას გაძლევს. ვარჯიში — დანარჩენ ყველაფერს.",
      buttons: [
        { label: "დაჯავშნე პირველი ვარჯიში", href: "/contact/" },
        { label: "გაიცანი მწვრთნელები", href: "/coaches/", style: "outline" },
      ],
    },
    jsonLd: { author: "Grand Fitness Batumi", publisher: "Grand Fitness", publisherUrl: "https://grandfitness.ge" },
  },
} satisfies Copy;
