import Link from "next/link";

export default function ATFooter() {
  return (
    <footer className="border-t border-rule py-16 text-center">
      <p className="font-playfair text-lg text-text mb-2">
        The Abundance Thesis
      </p>
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-6">
        Christian Samuel · 2026
      </p>
      <div className="flex items-center justify-center gap-6">
        <Link
          href="/"
          className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
        >
          Order Effects
        </Link>
        <span className="text-rule">·</span>
        <Link
          href="/participation-economy"
          className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
        >
          The Participation Economy
        </Link>
      </div>
    </footer>
  );
}
