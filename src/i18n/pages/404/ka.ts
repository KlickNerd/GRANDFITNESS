import type { Copy } from "./types";

export default {
  meta: {
    title: "გვერდი ვერ მოიძებნა | გრანდ ფიტნესი ბათუმი",
    description: "ეს გვერდი ვერ მოიძებნა — მაგრამ შენი ვარჯიში ადგილზეა. დაბრუნდი გრანდ ფიტნესში, ბათუმი.",
  },
  eyebrow: "404 — გვერდი ვერ მოიძებნა",
  title: 'ეს გვერდი<br><span class="text-gold">გამოტოვე.</span>',
  lead: "გვერდი ვერ მოიძებნა — მაგრამ ვარჯიში ადგილზეა. 😉",
  buttons: [
    { label: "მთავარ გვერდზე", href: "/" },
    { label: "ნახე ვარჯიშები", href: "/classes/", style: "outline" },
  ],
} satisfies Copy;
