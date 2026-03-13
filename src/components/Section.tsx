import type { ReactNode } from "react";

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
