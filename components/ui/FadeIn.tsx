"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Subtle fade-up used across sections.
 *
 * Deliberately animates on MOUNT rather than on scroll-into-view
 * (`whileInView`). Scroll-triggered reveals can leave below-the-fold
 * content (including CTAs) stuck invisible if the intersection observer
 * never fires — e.g. some in-page navigation, prerender/screenshot
 * tools, or edge-case scroll behavior. Content must never depend on a
 * scroll event to become visible. Since the transition resolves shortly
 * after mount, by the time a visitor actually scrolls to it the content
 * is already fully visible.
 *
 * Respects prefers-reduced-motion by skipping the animation entirely.
 */
export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
