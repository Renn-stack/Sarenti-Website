import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Subtle fade-up used across sections — pure CSS, no JS.
 *
 * Previously built with framer-motion's useReducedMotion(), which returns
 * null during server rendering: the server HTML shipped `opacity: 0` and,
 * for visitors with "reduce motion" enabled, the client rendered a plain
 * <div> whose hydration never removed that inline style — so the content
 * stayed invisible. A CSS animation avoids the mismatch entirely:
 * `motion-reduce:animate-none` simply shows the content at full opacity.
 *
 * Animates on load (not on scroll) so content never depends on a scroll
 * event to become visible.
 */
export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <div
      className={`animate-fadeUp motion-reduce:animate-none ${className ?? ""}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
