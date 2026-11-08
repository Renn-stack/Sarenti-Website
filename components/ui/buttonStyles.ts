/**
 * Shared button styles so WhatsApp CTAs and plain in-page links
 * (e.g. "Explorar tratamientos") look and size identically.
 * Every size keeps a minimum 48px touch target.
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "light" | "ghost-light";
export type ButtonSize = "md" | "lg";

export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-colors duration-200 active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  // Plum fill — the one primary action per view
  primary: "bg-sarenti-primary text-white hover:bg-sarenti-primary-dark",
  // Soft blush fill — secondary actions on light backgrounds
  secondary: "bg-sarenti-light text-sarenti-primary-dark hover:bg-[#e6c6dc]",
  // Thin plum outline — secondary actions on light backgrounds
  outline:
    "border border-sarenti-primary/40 text-sarenti-primary hover:border-sarenti-primary hover:bg-sarenti-blush",
  // White fill — primary action on plum/dark backgrounds
  light: "bg-white text-sarenti-primary-dark hover:bg-sarenti-blush",
  // White outline — secondary action on plum/dark backgrounds
  "ghost-light": "border border-white/60 text-white hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base sm:px-8",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(base, variants[variant], sizes[size], className);
}
