import type { Copy } from "./types";

export default {
  meta: {
    title: "Page Not Found | Grand Fitness",
    description: "This page doesn't exist — but your comeback does. Head back to Grand Fitness Batumi.",
  },
  eyebrow: "404 — Page not found",
  title: 'Wrong turn.<br><span class="text-gold">Right gym.</span>',
  lead: "This page doesn't exist — but the training floor definitely does.",
  buttons: [
    { label: "Back to Homepage", href: "/" },
    { label: "View Classes", href: "/classes/", style: "outline" },
  ],
} satisfies Copy;
