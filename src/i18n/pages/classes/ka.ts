import type { Copy } from "./types";

const pills = (minutes: string, level = "ყველა დონე") => [level, minutes, "შედის ყველა აბონემენტში"];
const link = (slug: string) => ({ label: "სრული გვერდი (EN) →", href: `/classes/${slug}/` });

export default {
  meta: {
    title: "ჯგუფური ვარჯიშები ბათუმში | გრანდ ფიტნესი",
    description:
      "5 ჯგუფური ვარჯიში გრანდ ფიტნესში ბათუმი: კრივი, ქროსფიტი, აერობიკა, მკლავჭიდი და ჯგუფური ვარჯიში — ყველა შედის აბონემენტში. კონტრაქტის გარეშე. ზეწოლის გარეშე.",
  },
  hero: {
    image: "space/floor-corridor.jpg",
    eyebrow: "5 ვარჯიში · ყველა შედის აბონემენტში",
    title: 'იპოვე შენი<br><span class="text-gold">ვარჯიში.</span>',
    lead: "ზოგ მიზანს ტრენაჟორზე მეტი სჭირდება — ტექნიკა, მუსიკა, მწვრთნელის თვალი და ხალხი, ვინც შენთან ერთად ვარჯიშობს. ხუთივე ვარჯიში ყველა აბონემენტში შედის — დამატებითი გადასახადის გარეშე.",
  },
  classes: [
    {
      id: "boxing",
      num: "01",
      category: "საბრძოლო სპორტი",
      title: "კრივი",
      text: "ტექნიკა, ტომრები და რაუნდებზე აგებული კონდიცია — სპარინგის გარეშე. ბათუმის საუკეთესო კარდიო.",
      pills: pills("50 წთ"),
      link: link("boxing"),
      coachLabel: "მწვრთნელი",
      coach: { name: "გოგა", href: "/coaches/" },
      image: "classes/boxing.jpg",
    },
    {
      id: "group-exercise",
      num: "02",
      category: "ჯგუფური ვარჯიში",
      title: "ჯგუფური ვარჯიში",
      text: "ძალა და კარდიო ერთ მაღალენერგიულ ვარჯიშში — ყოველ ჯერზე განსხვავებული, არასდროს მოსაწყენი.",
      pills: pills("45 წთ"),
      link: link("group-exercise"),
      coachLabel: "მწვრთნელი",
      coach: { name: "ჯონი", href: "/coaches/" },
      image: "classes/group.jpg",
    },
    {
      id: "aerobic",
      num: "03",
      category: "კარდიო",
      title: "აერობიკა",
      text: "მუსიკაზე აგებული კარდიო, რომელიც თხუთმეტ წუთად გრძნობა — გამძლეობა, ენერგია და განწყობა.",
      pills: pills("45 წთ"),
      link: link("aerobic"),
      coachLabel: "მწვრთნელი",
      coach: { name: "ჯონი", href: "/coaches/" },
      image: "classes/aerobic.jpg",
    },
    {
      id: "armwrestling",
      num: "04",
      category: "უნიკალური ბათუმში",
      title: "მკლავჭიდი",
      text: "ერთადერთი სტრუქტურირებული მკლავჭიდის ვარჯიში ბათუმში — ტექნიკა, მტევნის ძალა და მაგიდის სტრატეგია.",
      pills: pills("60 წთ"),
      link: link("armwrestling"),
      coachLabel: "მწვრთნელი",
      coach: { name: "რეზო", href: "/coaches/" },
      image: "classes/armwrestling.jpg",
    },
    {
      id: "crossfit",
      num: "05",
      category: "ფუნქციური ფიტნესი",
      title: "ქროსფიტი",
      text: "ყოველდღე განსხვავებული WOD — შტანგა, ტანვარჯიში და გამძლეობა, შენს დონეზე მორგებული.",
      pills: pills("60 წთ", "საბაზისო მომზადება"),
      link: link("crossfit"),
      coachLabel: "მწვრთნელი",
      coach: { name: "გუნდი" },
      image: "classes/crossfit.jpg",
    },
  ],
  cta: {
    eyebrow: "პირველი ნაბიჯი",
    title: 'აირჩიე და<br><span class="text-gold">სცადე.</span>',
    lead: "ნებისმიერი ვარჯიში, ნებისმიერ დღეს — უბრალოდ შემოდი და სცადე.",
    buttons: [
      { label: "დაჯავშნე პირველი ვარჯიში", href: "/contact/" },
      { label: "ნახე ფასები", href: "/pricing/", style: "outline" },
    ],
  },
} satisfies Copy;
