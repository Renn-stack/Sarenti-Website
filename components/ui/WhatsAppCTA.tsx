import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

interface WhatsAppCTAProps {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
}

/**
 * The single reusable "Agendar por WhatsApp" button used everywhere on
 * the site. Always renders a real wa.me link (works even if JS fails).
 */
export default function WhatsAppCTA({
  message,
  children,
  variant = "primary",
  size = "md",
  className,
  showIcon = true,
  ariaLabel,
}: WhatsAppCTAProps) {
  const href = buildWhatsAppLink(message);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-200 focus-visible:outline-2 active:scale-[0.98]";

  const variants: Record<string, string> = {
    primary:
      "bg-sarenti-primary text-white shadow-card hover:bg-[#7a1c62]",
    secondary:
      "bg-sarenti-light text-sarenti-primary hover:bg-[#e4c2da]",
    outline:
      "border-2 border-sarenti-primary text-sarenti-primary hover:bg-sarenti-light",
  };

  const sizes: Record<string, string> = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? (typeof children === "string" ? children : "Agendar por WhatsApp")}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {showIcon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </a>
  );
}
