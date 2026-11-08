import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { buttonClass, ButtonSize, ButtonVariant } from "./buttonStyles";

interface WhatsAppCTAProps {
  message: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
}

/**
 * The single reusable WhatsApp booking button used everywhere on the
 * site. Always renders a real wa.me link (works even if JS fails).
 * The accessible name mentions WhatsApp and that it opens a new tab.
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
  const label =
    ariaLabel ??
    (typeof children === "string"
      ? `${children}${/whatsapp/i.test(children) ? "" : " por WhatsApp"} (se abre en una nueva pestaña)`
      : undefined);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={buttonClass(variant, size, className)}
    >
      {showIcon && <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </a>
  );
}
