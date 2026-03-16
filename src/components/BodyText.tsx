import { ReactNode } from "react";

export default function BodyText({ children }: { children: ReactNode }) {
  return (
    <div className="font-serif text-[18px] leading-[1.8] text-text space-y-6">
      {children}
    </div>
  );
}
