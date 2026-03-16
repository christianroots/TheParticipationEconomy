const footerLinks = [
  { label: "The Problem", href: "#the-problem" },
  { label: "The Idea", href: "#the-idea" },
  { label: "The Model", href: "#the-model" },
  { label: "Impact", href: "#individual-impact" },
  { label: "Innovation", href: "#innovation" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 no-print">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-serif text-lg">The Participation Economy</div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="font-serif text-sm text-gray-400 italic">
            An idea worth sharing.
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="font-serif text-sm text-gray-400 mb-3">
            Written by Christian Samuel
          </p>
          <p className="font-serif text-2xl text-gray-500 italic tracking-wide">
            CS
          </p>
        </div>
      </div>
    </footer>
  );
}
