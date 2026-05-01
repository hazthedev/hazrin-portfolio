import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

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

const ProjectCard = ({ project, index }: { project: (typeof projects)[number]; index: number }) => {
  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <a
      href="#contact"
      onPointerMove={handlePointerMove}
      className={`portfolio-card group reveal relative flex min-h-[22rem] flex-col justify-between overflow-hidden border border-border bg-card p-6 transition duration-500 ease-out hover:-translate-y-1 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-8 ${
        project.size === "lg" ? "md:col-span-7 md:min-h-[32rem]" : ""
      } ${project.size === "sm" ? "md:col-span-5 md:min-h-[24rem]" : ""} ${project.size === "md" ? "md:col-span-5 md:min-h-[26rem]" : ""} ${
        project.size === "wide" ? "md:col-span-7 md:min-h-[26rem]" : ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      aria-label={`View notes for ${project.title}`}
    >
      <span className="portfolio-card__glow" aria-hidden="true" />
      <div className="relative z-10 flex items-start justify-between gap-6 font-sans text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
      <div className="relative z-10 space-y-6">
        <div className="h-px w-16 bg-primary transition-all duration-500 group-hover:w-28" />
        <div className="space-y-4">
          <h3 className="font-sans text-3xl font-medium tracking-[0.08em] text-foreground md:text-5xl">{project.title}</h3>
          <p className="max-w-xl text-lg leading-[1.65] text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-border pt-5 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>{project.meta}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
        </div>
      </div>
    </a>
  );
};

const SideProjectCard = ({ project, index }: { project: (typeof sideProjects)[number]; index: number }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`reveal group flex flex-col justify-between border border-border bg-card p-5 transition duration-500 ease-out hover:-translate-y-1 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
      (project as { size?: string }).size === "lg" ? "lg:col-span-2 lg:min-h-[12rem]" : ""
    }`}
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">{project.type}</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
      </div>
      <h3 className="font-sans text-lg font-medium uppercase tracking-[0.06em] text-foreground">{project.name}</h3>
      <p className="text-sm leading-[1.65] text-muted-foreground">{project.description}</p>
    </div>
  </a>
);

const Index = () => {
  const time = useClock();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="scroll-line" aria-hidden="true" />
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 font-sans text-xs uppercase tracking-[0.18em] sm:px-8">
          <a href="#intro" className="story-link lowercase tracking-[0.14em] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            hazrin
          </a>
          <div className="hidden items-center gap-7 sm:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="story-link lowercase text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="intro" className="mx-auto flex min-h-screen max-w-[1200px] flex-col justify-between px-5 pb-12 pt-28 sm:px-8 md:pt-36">
        <div className="reveal grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div className="space-y-8">
            <p className="section-kicker">intro</p>
            <h1 className="max-w-4xl font-sans text-[clamp(3.7rem,13vw,9.75rem)] font-medium uppercase leading-[0.86] tracking-[0.08em]">
              Mohd Hazrin
            </h1>
          </div>
          <div className="space-y-8 md:pb-4">
            <p className="max-w-lg text-2xl leading-[1.55] text-foreground md:text-3xl">
              Software developer crafting reliable platforms and thoughtful digital experiences—from government systems to community marketplaces.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>based in kuala lumpur, my</span>
              <span>{time || "local time"}</span>
              <span>open to opportunities</span>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 grid gap-10 border-t border-border pt-8 md:grid-cols-[0.6fr_1.4fr]">
          <p className="max-w-3xl text-xl leading-[1.75] text-muted-foreground">
            I build production systems with Laravel, React, and modern tooling—leveraging AI-driven workflows to accelerate delivery without compromising code quality. BSc in Computer Science from Universiti Malaya.
          </p>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 md:py-32">
        <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-5">
            <p className="section-kicker">selected work</p>
            <h2 className="max-w-3xl font-sans text-4xl font-medium uppercase leading-tight tracking-[0.1em] md:text-6xl">Built for real people.</h2>
          </div>
          <p className="max-w-sm text-lg leading-[1.7] text-muted-foreground">Projects delivered across industries—aviation, government, e-commerce, and community platforms.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="side" className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 md:py-32">
        <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-5">
            <p className="section-kicker">side builds</p>
            <h2 className="max-w-3xl font-sans text-4xl font-medium uppercase leading-tight tracking-[0.1em] md:text-6xl">Landing pages for real businesses.</h2>
          </div>
          <p className="max-w-sm text-lg leading-[1.7] text-muted-foreground">Restaurant menus, cafe storefronts, and event platforms—built in my free time for local businesses.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sideProjects.map((project, index) => (
            <SideProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <div className="reveal mt-24 border-t border-border pt-14 text-center">
          <p className="mx-auto mb-8 max-w-lg text-xl leading-[1.65] text-muted-foreground">
            Need a website, landing page, or system for your business?
          </p>
          <a
            href="https://wa.me/601157888400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-border px-8 py-4 font-sans text-sm uppercase tracking-[0.16em] text-foreground transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Chat on WhatsApp
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-secondary/45 px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-[1080px] space-y-20">
          <div className="reveal grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5">
              <p className="section-kicker">about</p>
              <h2 className="font-sans text-4xl font-medium uppercase leading-tight tracking-[0.1em] md:text-5xl">Precision over noise.</h2>
            </div>
            <p className="text-2xl leading-[1.65] text-foreground">
              I build production systems with Laravel, React, and modern tooling—leveraging AI-driven workflows to accelerate delivery without compromising code quality. BSc in Computer Science from Universiti Malaya.
            </p>
          </div>

          <div className="reveal grid gap-12 md:grid-cols-[0.8fr_1.2fr] border-t border-border pt-16">
            <div>
              <p className="section-kicker mb-4">experience</p>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-sans text-lg font-medium uppercase tracking-[0.08em] text-foreground">Software Developer (Contract)</h3>
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">Jun 2025 – Present</span>
                </div>
                <p className="mt-1 font-sans text-sm uppercase tracking-[0.12em] text-muted-foreground">Weststar Engineering</p>
                <p className="mt-3 max-w-2xl leading-[1.7] text-muted-foreground">
                  Built features across multiple Laravel projects using AI-driven workflows (Claude Code, GitHub Copilot, Cursor, Kiro). Developed HalalBizs Marketplace and Seller platforms for Timor Leste, revamped the Weststar Aviation ATP into a modern Laravel application, and contributed to the TanyaHafy (LHDN) and YLTAT Protégé systems.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-sans text-lg font-medium uppercase tracking-[0.08em] text-foreground">Programmer & IT Support (Internship)</h3>
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">Jul – Dec 2023</span>
                </div>
                <p className="mt-1 font-sans text-sm uppercase tracking-[0.12em] text-muted-foreground">Frontdesk Sdn. Bhd.</p>
                <p className="mt-3 max-w-2xl leading-[1.7] text-muted-foreground">
                  Developed a product gallery using PHP, Bootstrap 5, and JavaScript that contributed to increased client sales. Maintained and debugged the Frontdesk system across kiosks, printers, and modems, and performed comprehensive system and website testing on new releases.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal grid gap-12 md:grid-cols-[0.8fr_1.2fr] border-t border-border pt-16">
            <div>
              <p className="section-kicker mb-4">education</p>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-sans text-lg font-medium uppercase tracking-[0.08em] text-foreground">BSc Computer Science & IT</h3>
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">2021 – 2025</span>
                </div>
                <p className="mt-1 font-sans text-sm uppercase tracking-[0.12em] text-muted-foreground">Universiti Malaya, Kuala Lumpur</p>
                <p className="mt-3 leading-[1.7] text-muted-foreground">
                  Specialisation in Information Systems. CGPA 3.69. Dean's Award recipient for Semesters 4, 6, and 7.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-sans text-lg font-medium uppercase tracking-[0.08em] text-foreground">Foundation in Science</h3>
                  <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">2020 – 2021</span>
                </div>
                <p className="mt-1 font-sans text-sm uppercase tracking-[0.12em] text-muted-foreground">Pusat Asasi Sains, Universiti Malaya</p>
                <p className="mt-3 leading-[1.7] text-muted-foreground">CGPA 3.79.</p>
              </div>
            </div>
          </div>

          <div className="reveal grid gap-12 md:grid-cols-[0.8fr_1.2fr] border-t border-border pt-16">
            <div>
              <p className="section-kicker mb-4">skills</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div key={capability} className="border-t border-border py-4 font-sans text-sm uppercase tracking-[0.16em] text-muted-foreground">
                  {capability}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 md:py-32">
        <div className="reveal grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-7">
            <p className="section-kicker">contact</p>
            <h2 className="max-w-4xl font-sans text-5xl font-medium uppercase leading-[0.95] tracking-[0.08em] md:text-8xl">Let’s make the next thing precise.</h2>
          </div>
          <div className="space-y-8">
            <p className="text-xl leading-[1.7] text-muted-foreground">For product systems, interface architecture, or careful front-end implementation.</p>
            <div className="space-y-4 font-sans text-sm uppercase tracking-[0.16em]">
              <a href="mailto:mohdhazrinmohamad@gmail.com" className="flex items-center justify-between border-t border-border py-4 transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                mohdhazrinmohamad@gmail.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="https://github.com/hazthedev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-t border-border py-4 transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                github <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/in/hazrin-mohamad" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-y border-border py-4 transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                linkedin <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;