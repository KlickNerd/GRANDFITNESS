import type { Copy } from "./types";

export default {
  meta: {
    title: "Page Not Found | Grand Fitness",
    description: "This page does not exist. Return to the Grand Fitness Batumi homepage.",
  },
  eyebrow: "404 — Page not found",
  title: 'Wrong turn.<br><span class="text-gold">Right gym.</span>',
  lead: "This page does not exist. Please return to the homepage or see our prices.",
  buttons: [
    { label: "Back to homepage", href: "/" },
    { label: "See prices", href: "/#prices", style: "outline" },
  ],
} satisfies Copy;
