import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="absolute inset-x-0 top-8 flex justify-between px-8 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
        <span>404 / not found</span>
        <span>error log</span>
      </div>
      <div className="grid w-full max-w-3xl gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7 space-y-6">
          <p className="section-kicker">stray page</p>
          <h1 className="display-headline text-[clamp(5rem,18vw,12rem)] leading-[0.85]">
            4<em>0</em>4
          </h1>
          <p className="font-display text-xl leading-[1.5] text-foreground md:text-2xl">
            This route wandered off the page. <span className="accent-strike">Path: {location.pathname}</span>
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9 space-y-5">
          <p className="font-sans text-base leading-[1.7] text-muted-foreground">
            Nothing precious lost. Head back to the index — the work is still where you left it.
          </p>
          <a
            href="/"
            className="group inline-flex items-center justify-between gap-4 border border-foreground bg-foreground px-6 py-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-background transition-all duration-500 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--ink))] hover:border-[hsl(var(--accent))]"
          >
            <span>return home</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
