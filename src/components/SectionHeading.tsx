export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="font-serif text-3xl md:text-4xl font-normal text-text leading-tight mb-8">
      {children}
    </h2>
  );
}
