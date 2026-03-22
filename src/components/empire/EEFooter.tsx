import Link from "next/link";

export default function EEFooter() {
  return (
    <footer className="border-t border-rule py-16">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="font-playfair text-lg text-text mb-2">
          Empire on the Edge
        </p>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-6">
          Christian Samuel &middot; 2025
        </p>

        <div className="flex items-center justify-center gap-6 mb-10">
          <Link
            href="/"
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
          >
            Order Effects
          </Link>
          <span className="text-rule">&middot;</span>
          <Link
            href="/participation-economy"
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
          >
            The Participation Economy
          </Link>
          <span className="text-rule">&middot;</span>
          <Link
            href="/abundance-thesis"
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted hover:text-text transition-colors"
          >
            The Abundance Thesis
          </Link>
        </div>

        <div className="border-t border-rule pt-8">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted/50 mb-4">
            The Great Reset (2020) &rarr; Empire on the Edge (2025) &rarr; [Next Chapter TBD]
          </p>
          <p className="font-mono text-[10px] text-muted/40 leading-relaxed max-w-xl mx-auto">
            This document represents a personal geopolitical and financial thesis. It is not financial advice. All data sourced from publicly available information including US Treasury, IMF, SIPRI, World Gold Council, and CSIS. Projections are the author&rsquo;s own analysis.
          </p>
        </div>
      </div>
    </footer>
  );
}
