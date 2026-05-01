import { X } from "lucide-react";
import { useEffect, useState } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const EasterEgg = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let buffer: string[] = [];
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      buffer = [...buffer, key].slice(-SEQUENCE.length);
      if (buffer.length === SEQUENCE.length && buffer.every((k, i) => k === SEQUENCE[i])) {
        setOpen(true);
        buffer = [];
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Off the record"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-background/85 p-4 backdrop-blur-md"
      onClick={() => setOpen(false)}
      style={{ animation: "easter-fade 350ms ease both" }}
    >
      <div
        className="relative w-full max-w-lg border border-accent-bold/60 bg-card p-8 shadow-[0_30px_80px_-30px_hsl(var(--accent-bold)/0.4)] md:p-10"
        onClick={(event) => event.stopPropagation()}
        style={{ animation: "easter-rise 450ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <p className="section-kicker">off the record</p>
        <h2 className="mt-5 font-sans text-3xl font-medium uppercase tracking-[0.08em] text-foreground md:text-4xl">
          Player profile
        </h2>

        <div className="mt-8 space-y-8">
          <div>
            <p className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-accent-bold">games</p>
            <ul className="mt-3 space-y-1.5 text-base leading-[1.6] text-foreground">
              <li>· Wuthering Waves</li>
              <li>· Mobile Legends <span className="text-muted-foreground">— roam main</span></li>
              <li>· Zenless Zone Zero</li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-accent-bold">status</p>
            <p className="mt-3 leading-[1.65] text-foreground">
              Single. Quietly looking for a soulmate.
            </p>
          </div>

          <div>
            <p className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-accent-bold">vibe</p>
            <p className="mt-3 leading-[1.65] text-foreground">
              Introvert. Just here appreciating the peace.
            </p>
          </div>

          <div>
            <p className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-accent-bold">quest 2026</p>
            <p className="mt-3 leading-[1.65] text-foreground">
              Jogging daily. Trying to outrun last year's me.
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-5 font-sans text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
          press <span className="text-foreground">esc</span> to close · you found the secret
        </p>
      </div>
    </div>
  );
};

export default EasterEgg;
