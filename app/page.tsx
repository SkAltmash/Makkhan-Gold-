import Image from "next/image";
import EnquiryForm from "./components/EnquiryForm";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import {
  ChartIcon,
  CupIcon,
  FlameIcon,
  HandshakeIcon,
  InstagramIcon,
  LeafIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  RupeeIcon,
  ShieldIcon,
  SparkIcon,
  ThreadsIcon,
  TruckIcon,
  WhatsAppIcon,
} from "./components/icons";
import { site, whatsappLink } from "./lib/site";

const marqueeWords = [
  "कड़क स्वाद",
  "Premium CTC",
  "ताज़गी भरी खुशबू",
  "Rich Golden Colour",
  "हर घर की पसंद",
  "Strong & Aromatic",
  "मक्खन जैसी मिठास",
  "Hygienically Packed",
];

const products = [
  { weight: "100g", name: "Pocket Pack", note: "Perfect to try the kadak taste", tag: "" },
  { weight: "250g", name: "Daily Pack", note: "For small families & bachelors", tag: "Popular" },
  { weight: "500g", name: "Family Pack", note: "A month of morning chai", tag: "" },
  { weight: "1kg", name: "Value Pack", note: "Best value for big families", tag: "Best Value" },
];

const features = [
  { icon: FlameIcon, title: "Kadak Taste", text: "Bold, strong granules that stand up to milk, sugar and masala — every single time." },
  { icon: SparkIcon, title: "Golden Colour", text: "A rich, deep golden-brown cup that looks as good as it tastes." },
  { icon: LeafIcon, title: "Fresh Aroma", text: "Carefully selected leaves that release a fresh, inviting fragrance as they brew." },
  { icon: ShieldIcon, title: "Hygienic Packing", text: "Sealed in moisture-proof packs so the freshness reaches your kitchen intact." },
  { icon: CupIcon, title: "Consistent Cups", text: "Blended for consistency, so your chai tastes the same perfect way every day." },
  { icon: RupeeIcon, title: "Great Value", text: "Premium quality at an honest price — more cups from every pack." },
];

const steps = [
  { title: "Boil", text: "Bring 1 cup water to a rolling boil. Add crushed ginger or elaichi if you like." },
  { title: "Brew", text: "Add 1–1½ tsp Makkhan Gold Chai and let it brew for 1–2 minutes till deep golden." },
  { title: "Milk & Sugar", text: "Pour in 1 cup milk and sugar to taste. Let it rise and simmer twice." },
  { title: "Sip & Smile", text: "Strain into your favourite cup and enjoy the makkhan-smooth kadak chai." },
];

const festivals = [
  { hi: "गणेश चतुर्थी", en: "Ganesh Chaturthi", from: "from-masala", to: "to-gold" },
  { hi: "जन्माष्टमी", en: "Janmashtami", from: "from-leaf", to: "to-leaf-light" },
  { hi: "रक्षा बंधन", en: "Raksha Bandhan", from: "from-masala-dark", to: "to-masala" },
];

const dealerPerks = [
  { icon: ChartIcon, title: "Healthy Margins", text: "Attractive margins for distributors and retailers." },
  { icon: TruckIcon, title: "Reliable Supply", text: "Timely, consistent stock so your shelves never run dry." },
  { icon: HandshakeIcon, title: "Full Support", text: "Marketing material and dedicated support from our team." },
];

function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] ${
        light ? "border-gold/40 text-gold" : "border-masala/20 bg-masala/5 text-masala"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

function TeaPack({ weight, featured = false }: { weight: string; featured?: boolean }) {
  return (
    <div className="relative mx-auto w-40 transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-[-3deg]">
      {/* pouch top crimp */}
      <div className="mx-auto h-3 w-[92%] rounded-t-md bg-gold/90 bg-[repeating-linear-gradient(90deg,transparent_0_4px,rgb(0_0_0/0.12)_4px_5px)]" />
      <div
        className={`relative overflow-hidden rounded-b-[2rem] rounded-t-lg border-4 border-gold shadow-2xl ${
          featured ? "shadow-gold/40" : "shadow-ink/30"
        }`}
      >
        <div className="h-24 bg-gradient-to-b from-leaf-light to-leaf" />
        <div className="h-36 bg-gradient-to-b from-masala to-masala-dark" />
        <div className="absolute inset-x-0 top-8 flex justify-center">
          <Image src="/makhanlogo.png" alt="" width={680} height={600} className="w-28 drop-shadow-lg" />
        </div>
        <div className="absolute inset-x-0 bottom-4 text-center">
          <span className="rounded-full bg-gold px-4 py-1 text-sm font-bold text-masala-dark">{weight}</span>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-3 w-6 bg-white/15 blur-md" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <Navbar />

      <main className="overflow-x-clip">
        {/* ───────────── HERO ───────────── */}
        <section
          id="home"
          className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-leaf-dark pt-28 pb-32 text-cream"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgb(31_122_63/0.9),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgb(183_28_16/0.45),transparent_55%)]" />
          <div className="mandala-bg absolute inset-0 -z-10 opacity-40" />
          <div className="grain absolute inset-0 -z-10" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="text-center lg:text-left">
              <SectionTag light>Premium CTC Tea</SectionTag>
              <p className="mt-6 font-hindi text-3xl leading-snug text-gold sm:text-4xl">
                हर घूँट में मक्खन जैसी मिठास
              </p>
              <h1 className="mt-3 font-display text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl xl:text-7xl">
                The golden cup of{" "}
                <span className="relative inline-block italic text-gold">
                  kadak chai
                  <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full text-masala" preserveAspectRatio="none">
                    <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-cream/80 lg:mx-0">
                Makkhan Gold brings you a strong, aromatic and richly coloured blend crafted for the
                way India loves its chai — bold in taste, smooth like makkhan.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#products"
                  className="w-full rounded-full bg-gold px-8 py-4 text-center font-semibold text-masala-dark shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-gold-light sm:w-auto"
                >
                  Explore Our Chai
                </a>
                <a
                  href={whatsappLink("Hi Makkhan Gold! I'd like to order chai.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream transition hover:border-gold hover:text-gold sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </div>
              <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream/15 pt-8 lg:mx-0">
                {[
                  ["100%", "Pure Tea"],
                  ["CTC", "Strong Granules"],
                  ["4", "Pack Sizes"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl font-semibold text-gold">{v}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wider text-cream/60">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/30 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gold/25 via-gold/5 to-transparent blur-2xl" />
              <div className="absolute inset-12 rounded-full border border-gold/20 bg-leaf/40 backdrop-blur-sm" />

              {/* steam */}
              <div className="absolute top-[6%] left-1/2 flex -translate-x-1/2 gap-5">
                {[0, 1.2, 2.4].map((d) => (
                  <span
                    key={d}
                    className="h-16 w-3 rounded-full bg-cream/40 blur-md animate-steam"
                    style={{ animationDelay: `${d}s` }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <Image
                  src="/makhanlogo.png"
                  alt="Makkhan Gold Chai logo"
                  width={680}
                  height={600}
                  preload
                  className="w-[68%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
                />
              </div>

              <LeafIcon className="absolute top-[18%] left-[4%] h-10 w-10 rotate-[-30deg] text-leaf-light animate-float [animation-delay:1s]" />
              <LeafIcon className="absolute right-[2%] bottom-[22%] h-12 w-12 rotate-[40deg] text-gold/70 animate-float [animation-delay:2.5s]" />
              <div className="absolute bottom-[8%] left-[8%] rounded-2xl border border-gold/30 bg-leaf-dark/80 px-4 py-3 shadow-xl backdrop-blur">
                <p className="font-hindi text-lg text-gold">कड़क • ताज़ा</p>
                <p className="text-xs text-cream/70">Brewed with love</p>
              </div>
            </div>
          </div>

          <svg
            className="absolute inset-x-0 bottom-0 w-full text-masala"
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path fill="currentColor" d="M0 60c240-50 480-50 720-10s480 40 720-10v50H0Z" />
          </svg>
        </section>

        {/* ───────────── MARQUEE ───────────── */}
        <div className="relative bg-masala py-4 text-gold">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-lg font-medium sm:text-xl">
                {w}
                <span className="text-cream/60">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ───────────── ABOUT ───────────── */}
        <section id="about" className="relative bg-cream py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div data-reveal className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-leaf p-10 text-cream shadow-2xl shadow-leaf/30 sm:p-14">
                <div className="mandala-bg absolute inset-0 opacity-30" />
                <p className="relative font-hindi text-[7rem] leading-none text-gold/90 sm:text-[9rem]">चाय</p>
                <p className="relative mt-4 max-w-xs font-display text-2xl italic leading-snug">
                  “Not just a drink — it’s how every Indian morning begins.”
                </p>
                <div className="relative mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                    <p className="font-display text-3xl font-semibold text-gold">Kadak</p>
                    <p className="mt-1 text-sm text-cream/70">Strong in every sip</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                    <p className="font-display text-3xl font-semibold text-gold">Smooth</p>
                    <p className="mt-1 text-sm text-cream/70">Like fresh makkhan</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-8 hidden rotate-6 rounded-3xl bg-gold p-5 shadow-xl sm:block">
                <Image src="/makhanfav.png" alt="" width={144} height={144} className="h-20 w-20" />
              </div>
            </div>

            <div data-reveal className="order-1 lg:order-2" style={{ "--delay": "150ms" } as React.CSSProperties}>
              <SectionTag>Our Story</SectionTag>
              <h2 className="mt-5 font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
                Crafted for the <span className="italic text-masala">perfect cup</span> of Indian chai
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Makkhan Gold was born from a simple belief — every home deserves a cup of chai that is
                strong, flavourful and comforting. We carefully select and blend quality CTC tea so
                that each cup brews into a rich golden colour with a bold, satisfying taste.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">
                From the first chai of the morning to the evening break with family, Makkhan Gold is
                made to be the flavour you look forward to — again and again.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Carefully selected leaves", "Rich, consistent blend", "Moisture-proof packing", "Loved by tea lovers"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 font-medium text-ink/80">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-leaf text-gold">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3}>
                          <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────── PRODUCTS ───────────── */}
        <section id="products" className="relative bg-milk py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div data-reveal className="mx-auto max-w-2xl text-center">
              <SectionTag>Our Range</SectionTag>
              <h2 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-5xl">
                A pack for <span className="italic text-masala">every home</span>
              </h2>
              <p className="mt-5 text-lg text-ink/70">
                The same kadak Makkhan Gold blend in sizes that suit your family and your kitchen.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p, i) => (
                <article
                  key={p.weight}
                  data-reveal
                  style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                  className={`group relative flex flex-col rounded-[2rem] border p-7 pt-10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    p.tag === "Popular"
                      ? "border-gold bg-gradient-to-b from-gold/15 to-white shadow-xl shadow-gold/20"
                      : "border-ink/10 bg-white shadow-lg shadow-ink/5"
                  }`}
                >
                  {p.tag && (
                    <span className="absolute top-4 right-4 rounded-full bg-masala px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">
                      {p.tag}
                    </span>
                  )}
                  <TeaPack weight={p.weight} featured={p.tag === "Popular"} />
                  <div className="mt-8 flex flex-1 flex-col text-center">
                    <h3 className="font-display text-2xl font-semibold text-ink">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold tracking-wider text-leaf uppercase">
                      Makkhan Gold Chai · {p.weight}
                    </p>
                    <p className="mt-3 flex-1 text-ink/60">{p.note}</p>
                    <a
                      href={whatsappLink(`Hi Makkhan Gold! I'd like to order the ${p.weight} ${p.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 rounded-full bg-leaf py-3 font-semibold text-cream transition group-hover:bg-masala"
                    >
                      Order {p.weight}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p data-reveal className="mt-12 text-center text-ink/60">
              Need bulk quantities for a hotel, café, canteen or office?{" "}
              <a href="#contact" className="font-semibold text-masala underline decoration-gold decoration-2 underline-offset-4">
                Ask for bulk pricing →
              </a>
            </p>
          </div>
        </section>

        {/* ───────────── WHY US ───────────── */}
        <section id="why" className="relative isolate overflow-hidden bg-leaf-dark py-24 text-cream sm:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgb(31_122_63/0.7),transparent_50%)]" />
          <div className="mandala-bg absolute inset-0 -z-10 opacity-25" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div data-reveal className="mx-auto max-w-2xl text-center">
              <SectionTag light>Why Makkhan Gold</SectionTag>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                Everything you want <span className="italic text-gold">in a cup</span>
              </h2>
              <p className="mt-4 font-hindi text-2xl text-gold/80">स्वाद भी, ताज़गी भी</p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  data-reveal
                  style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
                  className="group rounded-3xl border border-cream/10 bg-white/[0.04] p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.08]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-masala-dark shadow-lg shadow-gold/20 transition group-hover:rotate-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-cream/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── RECIPE ───────────── */}
        <section id="recipe" className="bg-cream py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div data-reveal>
                <SectionTag>Chai Recipe</SectionTag>
                <h2 className="mt-5 font-display text-4xl leading-tight font-semibold text-ink sm:text-5xl">
                  How to brew the <span className="italic text-masala">perfect</span> Makkhan Gold chai
                </h2>
                <p className="mt-5 text-lg text-ink/70">
                  Four simple steps to a cup that tastes like home. Makes 2 cups in about 5 minutes.
                </p>
                <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-gold/50 bg-white px-5 py-4 shadow-sm">
                  <CupIcon className="h-10 w-10 text-masala" />
                  <div>
                    <p className="font-semibold text-ink">Pro tip</p>
                    <p className="text-sm text-ink/60">Crush fresh adrak & elaichi for a masala twist.</p>
                  </div>
                </div>
              </div>

              <ol className="relative grid gap-5 sm:grid-cols-2">
                {steps.map((s, i) => (
                  <li
                    key={s.title}
                    data-reveal
                    style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                    className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-ink/5 ring-1 ring-ink/5"
                  >
                    <span className="absolute -top-4 -right-2 font-display text-8xl font-bold text-gold/20">
                      0{i + 1}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-masala font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink/65">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ───────────── FESTIVE / INSTAGRAM ───────────── */}
        <section className="bg-milk py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div data-reveal className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <SectionTag>@makkhangoldchai</SectionTag>
                <h2 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-5xl">
                  Har tyohaar, <span className="italic text-masala">Makkhan Gold</span> ke saath
                </h2>
              </div>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                <InstagramIcon className="h-5 w-5" />
                Follow on Instagram
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {festivals.map((f, i) => (
                <a
                  key={f.en}
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                  className={`group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br ${f.from} ${f.to} p-8 text-cream shadow-xl`}
                >
                  <div className="mandala-bg absolute inset-0 opacity-40 transition duration-700 group-hover:scale-110" />
                  <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full border-[18px] border-gold/30 transition duration-700 group-hover:rotate-45 group-hover:scale-110" />
                  <Image
                    src="/makhanlogo.png"
                    alt=""
                    width={680}
                    height={600}
                    className="relative w-24 drop-shadow-lg"
                  />
                  <div className="relative">
                    <p className="text-sm tracking-[0.3em] text-cream/80 uppercase">Happy</p>
                    <p className="mt-1 font-hindi text-5xl text-gold">{f.hi}</p>
                    <p className="mt-2 font-display text-xl italic">{f.en}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold opacity-80 transition group-hover:gap-3 group-hover:opacity-100">
                      View on Instagram →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── DEALERSHIP ───────────── */}
        <section id="dealers" className="relative isolate overflow-hidden bg-masala py-24 text-cream sm:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgb(240_184_58/0.25),transparent_55%)]" />
          <div className="grain absolute inset-0 -z-10" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div data-reveal>
              <SectionTag light>Business Opportunity</SectionTag>
              <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl">
                Become a Makkhan Gold <span className="italic text-gold">distributor</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-cream/80">
                We are expanding and looking for passionate distributors, wholesalers and retailers to
                bring Makkhan Gold Chai to more homes. Grow your business with a brand people love.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-masala-dark shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Apply for Dealership
              </a>
            </div>
            <div className="grid gap-4">
              {dealerPerks.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  data-reveal
                  style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
                  className="flex items-start gap-5 rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-masala-dark">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-1 text-cream/75">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── CONTACT ───────────── */}
        <section id="contact" className="bg-cream py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div data-reveal className="mx-auto max-w-2xl text-center">
              <SectionTag>Get in Touch</SectionTag>
              <h2 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Let’s talk <span className="italic text-masala">chai</span>
              </h2>
              <p className="mt-5 text-lg text-ink/70">
                Orders, bulk enquiries or dealership — drop us a message and we’ll get back quickly.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
              <div data-reveal className="flex flex-col gap-4">
                {[
                  { icon: PhoneIcon, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
                  { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: whatsappLink("Hi Makkhan Gold!") },
                  { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
                  { icon: PinIcon, label: "Visit", value: site.address },
                ].map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf text-gold">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold tracking-wider text-ink/50 uppercase">{label}</p>
                        <p className="mt-0.5 font-medium break-words text-ink">{value}</p>
                      </div>
                    </>
                  );
                  const cls =
                    "flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md shadow-ink/5 ring-1 ring-ink/5 transition";
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`${cls} hover:-translate-y-0.5 hover:ring-gold`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className={cls}>
                      {inner}
                    </div>
                  );
                })}
              </div>

              <div
                data-reveal
                style={{ "--delay": "150ms" } as React.CSSProperties}
                className="rounded-[2rem] bg-white p-6 shadow-xl shadow-ink/5 ring-1 ring-ink/5 sm:p-10"
              >
                <h3 className="font-display text-2xl font-semibold text-ink">Send an enquiry</h3>
                <p className="mt-1 mb-8 text-ink/60">We usually reply within a few hours.</p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="relative bg-leaf-dark text-cream">
        <div className="h-1.5 bg-gradient-to-r from-masala via-gold to-masala" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image src="/makhanlogo.png" alt={site.name} width={680} height={600} className="w-20" />
              <div>
                <p className="font-display text-2xl font-semibold text-gold">MAKKHAN GOLD</p>
                <p className="font-hindi text-lg text-cream/80">{site.hindiName}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-cream/60">
              Premium kadak chai crafted for Indian homes. {site.tagline}.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.instagram, icon: InstagramIcon, label: "Instagram" },
                { href: site.threads, icon: ThreadsIcon, label: "Threads" },
                { href: whatsappLink("Hi Makkhan Gold!"), icon: WhatsAppIcon, label: "WhatsApp" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition hover:border-gold hover:bg-gold hover:text-masala-dark"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-gold">Explore</p>
            <ul className="mt-4 space-y-3 text-cream/70">
              {[
                ["#about", "Our Story"],
                ["#products", "Products"],
                ["#why", "Why Makkhan Gold"],
                ["#recipe", "Chai Recipe"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gold">Business</p>
            <ul className="mt-4 space-y-3 text-cream/70">
              <li>
                <a href="#dealers" className="transition hover:text-gold">Become a Distributor</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-gold">Bulk Orders</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-gold">{site.email}</a>
              </li>
              <li>{site.phone}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-cream/50 sm:flex-row sm:px-6 lg:px-8">
            <p>© {site.name}. All rights reserved.</p>
            <p>Made with ☕ & love in India</p>
          </div>
        </div>
      </footer>

      {/* floating WhatsApp */}
      <a
        href={whatsappLink("Hi Makkhan Gold! I'd like to order chai.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/25 transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </>
  );
}
