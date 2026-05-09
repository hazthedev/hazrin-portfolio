import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import EasterEgg from "@/components/EasterEgg";

const projects = [
  {
    title: "HalalBizs Marketplace",
    year: "2025",
    type: "b2b / b2c platform",
    description:
      "A marketplace and seller dashboard serving the Muslim community in Timor Leste—enabling halal-certified merchants to list products and reach customers through an integrated platform.",
    meta: "Laravel · Tailwind CSS · MySQL · multi-tenant",
    size: "lg",
  },
  {
    title: "Weststar Aviation ATP",
    year: "2025",
    type: "legacy modernisation",
    description:
      "Revamped the legacy Weststar Aviation Air Travel Platform into a modern Laravel-based web application, improving usability, performance, and long-term maintainability.",
    meta: "Laravel · system architecture · UI/UX",
    size: "sm",
  },
  {
    title: "TanyaHafy",
    year: "2025",
    type: "government platform",
    description:
      "Contributed to a taxpayer service platform under LHDN (Inland Revenue Board of Malaysia), supporting development and delivery of a government-facing digital service.",
    meta: "Laravel · government systems · scalability",
    size: "md",
  },
  {
    title: "Mosque Management System",
    year: "2024",
    type: "full-stack application",
    description:
      "A web-based system for managing mosque members, cash flow, and inventory with automated reporting and WhatsApp integration—built as a final year project at Universiti Malaya.",
    meta: "Laravel · MySQL · WhatsApp API · reporting",
    size: "wide",
  },
];

const capabilities = ["PHP · Laravel", "JavaScript · TypeScript", "React · Nuxt", "Tailwind CSS · Bootstrap", "MySQL · Oracle", "Python", "Git · Linux · cPanel", "AI-driven development"];

const sideProjects = [
  {
    name: "Galeria",
    type: "event platform",
    description: "Live photo gallery system with QR-based guest uploads, real-time moderation, lucky draw, and branded galleries for events.",
    url: "https://galeria-neon.vercel.app/",
    size: "lg",
  },
  {
    name: "Ai Delicious",
    type: "restaurant",
    description: "Chinese-Muslim dumpling house in Setapak. Halal since 2013. Menu, story, and location.",
    url: "https://ai-delicious-sigma.vercel.app/",
  },
  {
    name: "Sushi Monster",
    type: "restaurant",
    description: "Halal Japanese sushi chain with 4 KL locations. Tier-based menu starting from RM1.90.",
    url: "https://baj-restaurant.vercel.app/",
  },
  {
    name: "Lamb Shepherd",
    type: "restaurant",
    description: "Xinjiang Chinese-Muslim cuisine. Roast lamb ribs, hand-pulled noodles, and dumplings since 2016.",
    url: "https://buriram-eight.vercel.app/",
  },
  {
    name: "Ryndu Hot & Grill",
    type: "restaurant",
    description: "Steakhouse plates at Wangsa Maju prices. Halal western grill, open till midnight since 2015.",
    url: "https://ryndu.vercel.app/",
  },
  {
    name: "Tiffin 55",
    type: "restaurant",
    description: "Late-night Malay cafe with mangkuk tingkat concept. Open till 3am in Wangsa Maju.",
    url: "https://tiffin-55.vercel.app/",
  },
  {
    name: "Pizzaiolo",
    type: "restaurant",
    description: "Wood-fired sourdough pizza. 72-hour cold ferment, 90-second bake. Open till 4am in Wangsa Maju.",
    url: "https://pizzaiolo-seven.vercel.app/",
  },
  {
    name: "D'Timer",
    type: "restaurant",
    description: "Authentic Johor cuisine since 2008. Laksa Johor, Lontong Darat, Nasi Ambeng. Featured on TV3.",
    url: "https://dtimer-zeta.vercel.app/",
  },
  {
    name: "Didi's Cafe",
    type: "cafe & bakery",
    description: "European bakes with Malaysian souls. Rendang croissant, masak lemak ciabatta, Gula Apong latte.",
    url: "https://didi-s.vercel.app/",
  },
  {
    name: "118 Grinder",
    type: "coffee bar",
    description: "Aesthetic specialty coffee and dessert bar. Viral tiramisu and Spanish latte in Wangsa Maju.",
    url: "https://118-grinder.vercel.app/",
  },
  {
    name: "Islamic Financing Affin",
    type: "financial services",
    description: "Islamic financing product landing page. Information and application pathway for Affin Islamic.",
    url: "https://islamic-financing-loan-affin.vercel.app/",
  },
];

const navItems = [
  { label: "intro", href: "#intro" },
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

const useClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZoneName: "short",
        }).format(new Date()),
      );
    };

    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return time;
};

const KonamiHint = ({ chars }: { chars: string }) => (
  <span className="ml-2 inline-block font-mono text-[0.6rem] normal-case tracking-normal text-foreground/40">
    {chars}
  </span>
);

/* MH monogram — geometric typographic mark */
const Monogram = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
  >
    <circle cx="100" cy="100" r="92" strokeDasharray="2 4" opacity="0.4" />
    <line x1="40" y1="60" x2="40" y2="148" />
    <line x1="40" y1="60" x2="76" y2="120" />
    <line x1="76" y1="120" x2="112" y2="60" />
    <line x1="112" y1="60" x2="112" y2="148" />
    <line x1="132" y1="60" x2="132" y2="148" />
    <line x1="132" y1="104" x2="172" y2="104" />
    <line x1="172" y1="60" x2="172" y2="148" />
  </svg>
);

/* Geometric portrait abstraction — used as the hero "image" */
const PortraitAbstraction = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 320 400"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    {/* paper bounding frame */}
    <rect x="6" y="6" width="308" height="388" stroke="currentColor" opacity="0.35" />
    {/* head silhouette as nested arcs */}
    <ellipse cx="160" cy="160" rx="78" ry="92" />
    <ellipse cx="160" cy="160" rx="62" ry="76" opacity="0.55" />
    <ellipse cx="160" cy="160" rx="46" ry="60" opacity="0.3" />
    {/* shoulders / torso line */}
    <path d="M40 360 C 70 290, 110 268, 160 268 C 210 268, 250 290, 280 360" />
    <path d="M60 360 C 90 310, 120 296, 160 296 C 200 296, 230 310, 260 360" opacity="0.55" />
    {/* hairline scan lines */}
    <line x1="6" y1="120" x2="314" y2="120" opacity="0.18" />
    <line x1="6" y1="200" x2="314" y2="200" opacity="0.18" />
    <line x1="6" y1="280" x2="314" y2="280" opacity="0.18" />
    {/* accent dot */}
    <circle cx="234" cy="120" r="6" fill="hsl(var(--accent))" stroke="none" />
    {/* signature tick */}
    <path d="M40 376 l 14 -10 l 18 6 l 12 -8" opacity="0.7" />
  </svg>
);

const ProjectCard = ({ project, index }: { project: (typeof projects)[number]; index: number }) => (
  <a
    href="#contact"
    className={`portfolio-card reveal group flex min-h-[22rem] flex-col overflow-hidden p-7 md:p-9 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
      project.size === "lg" ? "md:col-span-7 md:min-h-[34rem]" : ""
    } ${project.size === "sm" ? "md:col-span-5 md:min-h-[24rem]" : ""} ${project.size === "md" ? "md:col-span-5 md:min-h-[26rem]" : ""} ${
      project.size === "wide" ? "md:col-span-7 md:min-h-[26rem]" : ""
    }`}
    style={{ transitionDelay: `${index * 80}ms` }}
    aria-label={`View notes for ${project.title}`}
  >
    <span className="portfolio-card__index">N° {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
    <div className="portfolio-card__inner">
      <div className="flex items-start justify-between gap-6 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
        <span>{project.type}</span>
        <span className="mt-0">{project.year}</span>
      </div>

      <div className="space-y-6">
        <div className="h-px w-12 bg-foreground transition-all duration-500 group-hover:w-24 group-hover:bg-foreground" />
        <h3 className="display-headline text-[2.6rem] md:text-[3.4rem] leading-[0.9]">
          {project.title}
        </h3>
        <p className="max-w-xl font-sans text-base leading-[1.65] text-muted-foreground group-hover:text-foreground/85">
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/70 pt-5 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-foreground">
        <span>{project.meta}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
      </div>
    </div>
  </a>
);

const SideProjectCard = ({ project, index }: { project: (typeof sideProjects)[number]; index: number }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`side-tile reveal group flex flex-col justify-between p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
      (project as { size?: string }).size === "lg" ? "lg:col-span-2 lg:min-h-[14rem]" : ""
    }`}
    style={{ transitionDelay: `${index * 40}ms` }}
  >
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">{project.type}</span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="display-headline text-[1.7rem] leading-[0.95]">
        {project.name}
      </h3>
      <p className="font-sans text-sm leading-[1.65] text-muted-foreground">{project.description}</p>
    </div>
    <div className="mt-6 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-foreground/70 group-hover:text-foreground">
      <span>visit live</span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </div>
  </a>
);

const Index = () => {
  const time = useClock();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <EasterEgg />
      <div className="scroll-line" aria-hidden="true" />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] sm:px-10">
          <a href="#intro" className="story-link hover-spread lowercase tracking-[0.18em] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            mh / hazrin
          </a>
          <div className="flex items-center gap-7">
            <div className="hidden items-center gap-7 sm:flex">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="story-link hover-spread lowercase text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="text-foreground/40 mr-1.5">0{i + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* INTRO */}
      <section id="intro" className="mx-auto flex min-h-screen max-w-[1280px] flex-col justify-between px-5 pb-12 pt-32 sm:px-10 md:pt-40">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7 space-y-7">
            <p className="section-kicker">intro<KonamiHint chars="↑↑" /></p>
            <h1 className="display-headline text-[clamp(4rem,14vw,11rem)] leading-[0.84] reveal-mask">
              Mohd <em>Hazrin</em>
            </h1>
            <div className="flex items-center gap-4 pt-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
              available for new work
              <span className="inline-block h-px w-10 bg-border" />
              kuala lumpur · {time || "--:--"}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 space-y-7 md:pb-3">
            <div className="aspect-[4/5] w-full max-w-[260px] text-foreground drift-slow">
              <PortraitAbstraction className="h-full w-full" />
            </div>
            <p className="font-display text-2xl leading-[1.35] text-foreground md:text-[1.65rem]">
              Software developer crafting <em className="text-[hsl(var(--ink))]">reliable platforms</em> and thoughtful digital experiences—from government systems to community marketplaces.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-border pt-10 md:grid-cols-12">
          <p className="section-kicker md:col-span-3">manifesto / 01</p>
          <p className="md:col-span-9 max-w-3xl font-display text-xl leading-[1.55] text-foreground md:text-2xl">
            I build production systems with Laravel, React, and modern tooling—leveraging AI-driven workflows to accelerate delivery without compromising code quality. <span className="accent-strike">BSc in Computer Science</span> from Universiti Malaya.
          </p>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-10 md:py-36">
        <div className="reveal mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7 space-y-5">
            <p className="section-kicker">selected work / 2024 — 2025<KonamiHint chars="↓↓" /></p>
            <h2 className="display-headline text-5xl md:text-7xl leading-[0.92]">
              Built for <em>real</em> people.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 max-w-sm font-sans text-base leading-[1.7] text-muted-foreground">
            Projects delivered across industries — aviation, government, e-commerce, and community platforms. Production systems, not pixel mockups.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* SIDE BUILDS */}
      <section id="side" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-10 md:py-36">
        <div className="reveal mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7 space-y-5">
            <p className="section-kicker">side builds / nights & weekends<KonamiHint chars="←→" /></p>
            <h2 className="display-headline text-5xl md:text-7xl leading-[0.92]">
              Landing pages for <em>real</em> businesses.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 max-w-sm font-sans text-base leading-[1.7] text-muted-foreground">
            Restaurant menus, cafe storefronts, and event platforms — built in spare hours for local businesses around Wangsa Maju and beyond.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sideProjects.map((project, index) => (
            <SideProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <div className="reveal mt-28 border-t border-border pt-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8 space-y-5">
              <p className="section-kicker">commission</p>
              <p className="font-display text-2xl leading-[1.45] text-foreground md:text-3xl">
                Need a <em>website, landing page, or system</em> for your business? Let's talk specifics — small teams, real outcomes.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <a
                href="https://wa.me/601157888400"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-between gap-3 border border-foreground bg-foreground px-7 py-5 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-background transition-all duration-500 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--ink))] hover:border-[hsl(var(--accent))] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>chat on whatsapp</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-border bg-[hsl(var(--paper-warm))] px-5 py-24 sm:px-10 md:py-36">
        <div className="mx-auto max-w-[1280px] space-y-24">
          <div className="reveal grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4 space-y-5">
              <p className="section-kicker">about<KonamiHint chars="←→" /></p>
              <div className="text-foreground">
                <Monogram className="h-32 w-32" />
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <h2 className="display-headline text-5xl md:text-[5.5rem] leading-[0.92]">
                Precision <em>over</em> noise.
              </h2>
              <p className="mt-8 font-display text-xl leading-[1.55] text-foreground md:text-2xl">
                I build production systems with Laravel, React, and modern tooling—leveraging AI-driven workflows to accelerate delivery without compromising code quality. BSc in Computer Science from Universiti Malaya.
              </p>
            </div>
          </div>

          <div className="reveal grid gap-12 border-t border-border pt-16 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="section-kicker">experience / 02</p>
            </div>
            <div className="md:col-span-9 md:col-start-5 space-y-14">
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                  <h3 className="display-headline text-2xl md:text-3xl leading-tight">Software Developer <span className="font-sans text-base text-muted-foreground">(Contract)</span></h3>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">Jun 2025 — Present</span>
                </div>
                <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-foreground/70">Weststar Engineering</p>
                <p className="mt-4 max-w-2xl font-sans text-base leading-[1.75] text-muted-foreground">
                  Built features across multiple Laravel projects using AI-driven workflows (Claude Code, GitHub Copilot, Cursor, Kiro). Developed HalalBizs Marketplace and Seller platforms for Timor Leste, revamped the Weststar Aviation ATP into a modern Laravel application, and contributed to the TanyaHafy (LHDN) and YLTAT Protégé systems.
                </p>
              </article>
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                  <h3 className="display-headline text-2xl md:text-3xl leading-tight">Programmer & IT Support <span className="font-sans text-base text-muted-foreground">(Internship)</span></h3>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">Jul — Dec 2023</span>
                </div>
                <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-foreground/70">Frontdesk Sdn. Bhd.</p>
                <p className="mt-4 max-w-2xl font-sans text-base leading-[1.75] text-muted-foreground">
                  Developed a product gallery using PHP, Bootstrap 5, and JavaScript that contributed to increased client sales. Maintained and debugged the Frontdesk system across kiosks, printers, and modems, and performed comprehensive system and website testing on new releases.
                </p>
              </article>
            </div>
          </div>

          <div className="reveal grid gap-12 border-t border-border pt-16 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="section-kicker">education / 03</p>
            </div>
            <div className="md:col-span-9 md:col-start-5 space-y-14">
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                  <h3 className="display-headline text-2xl md:text-3xl leading-tight">BSc Computer Science & IT</h3>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">2021 — 2025</span>
                </div>
                <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-foreground/70">Universiti Malaya, Kuala Lumpur</p>
                <p className="mt-4 font-sans text-base leading-[1.75] text-muted-foreground">
                  Specialisation in Information Systems. <span className="accent-strike">CGPA 3.69</span>. Dean's Award recipient for Semesters 4, 6, and 7.
                </p>
              </article>
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                  <h3 className="display-headline text-2xl md:text-3xl leading-tight">Foundation in Science</h3>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">2020 — 2021</span>
                </div>
                <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-foreground/70">Pusat Asasi Sains, Universiti Malaya</p>
                <p className="mt-4 font-sans text-base leading-[1.75] text-muted-foreground">CGPA 3.79.</p>
              </article>
            </div>
          </div>

          <div className="reveal grid gap-12 border-t border-border pt-16 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="section-kicker">skills / 04</p>
            </div>
            <ul className="md:col-span-9 md:col-start-5 grid gap-0 sm:grid-cols-2">
              {capabilities.map((capability, i) => (
                <li
                  key={capability}
                  className="group flex items-baseline justify-between border-t border-border py-5 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground transition-colors hover:text-[hsl(var(--ink))]"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span className="hover-spread inline-block">{capability}</span>
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/30 transition-colors group-hover:bg-[hsl(var(--accent))]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1280px] px-5 py-24 sm:px-10 md:py-40">
        <div className="reveal grid gap-14 md:grid-cols-12">
          <div className="md:col-span-12 space-y-8">
            <p className="section-kicker">contact / 05<KonamiHint chars="BA" /></p>
            <h2 className="display-headline text-[clamp(3rem,11vw,9.5rem)] leading-[0.86]">
              Let's make the next thing <em className="accent-strike">precise</em>.
            </h2>
          </div>

          <div className="md:col-span-5 space-y-6">
            <p className="font-display text-xl leading-[1.55] text-foreground md:text-2xl">
              For product systems, interface architecture, or careful front-end implementation.
            </p>
            <p className="max-w-md font-sans text-base leading-[1.7] text-muted-foreground">
              Currently in Kuala Lumpur, working remotely with teams across SE Asia. Replies usually within a working day.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-3 font-mono text-[0.78rem] uppercase tracking-[0.22em]">
            <a
              href="mailto:mohdhazrinmohamad@gmail.com"
              className="group flex items-center justify-between border-t border-foreground py-6 transition-colors hover:text-[hsl(var(--ink))] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex items-center gap-4">
                <span className="text-muted-foreground">e—</span>
                <span className="hover-spread normal-case tracking-[0.05em]">mohdhazrinmohamad@gmail.com</span>
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/hazthedev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-t border-border py-6 transition-colors hover:text-[hsl(var(--ink))] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex items-center gap-4">
                <span className="text-muted-foreground">gh—</span>
                <span className="hover-spread">github</span>
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/hazrin-mohamad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-y border-border py-6 transition-colors hover:text-[hsl(var(--ink))] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex items-center gap-4">
                <span className="text-muted-foreground">li—</span>
                <span className="hover-spread">linkedin</span>
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
          </div>
        </div>

        <footer className="mt-32 grid gap-6 border-t border-border pt-8 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground md:grid-cols-3">
          <span>© {new Date().getFullYear()} mohd hazrin · all rights reserved</span>
          <span className="md:text-center">designed & built in kuala lumpur</span>
          <span className="md:text-right">v.2026 — editorial / chartreuse</span>
        </footer>
      </section>
    </main>
  );
};

export default Index;
