import type { Copy } from "./types";

export default {
  meta: {
    title: "გვერდი ვერ მოიძებნა | გრანდ ფიტნესი ბათუმი",
    description: "ეს გვერდი არ არსებობს. დაბრუნდით გრანდ ფიტნესის მთავარ გვერდზე.",
  },
  eyebrow: "404 — გვერდი ვერ მოიძებნა",
  title: 'გზა აგერიათ.<br><span class="text-gold">დარბაზს მაინც მიაგენით.</span>',
  lead: "ეს გვერდი არ არსებობს. გთხოვთ, დაბრუნდეთ მთავარ გვერდზე ან ნახოთ ჩვენი ფასები.",
  buttons: [
    { label: "მთავარ გვერდზე", href: "/" },
    { label: "ნახეთ ფასები", href: "/#prices", style: "outline" },
  ],
} satisfies Copy;
