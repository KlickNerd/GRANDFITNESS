import type { Copy } from "./types";

export default {
  meta: {
    title: "გვერდი ვერ მოიძებნა | გრანდ ფიტნესი ბათუმი",
    description: "ეს გვერდი ვერ მოიძებნა — მაგრამ შენი ვარჯიში ადგილზეა. გრანდ ფიტნესი ბათუმი.",
  },
  eyebrow: "404",
  title: 'ეს გვერდი<br><span class="text-gold">გამოტოვე.</span>',
  lead: "გვერდი ვერ მოიძებნა — მაგრამ ვარჯიში ადგილზეა. 😉",
  buttons: [
    { label: "მთავარ გვერდზე", href: "/" },
    { label: "დაჯავშნე პირველი ვარჯიში", href: "/contact/", style: "outline" },
  ],
} satisfies Copy;
