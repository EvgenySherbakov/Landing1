import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface Props {
  children: ReactNode;
  className?: string;
  /** задержка появления в мс (для каскада) */
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

export function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
