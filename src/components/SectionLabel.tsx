export default function SectionLabel({ children }: { children: string }) {
  return (
    <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
      {children}
    </span>
  );
}
