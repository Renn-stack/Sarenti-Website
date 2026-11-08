"use client";

import { useState, ReactNode } from "react";
import { Plus } from "lucide-react";

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  /** Heading level wrapping each trigger button. */
  headingLevel?: "h3" | "h4";
}

/**
 * Accessible single-open accordion built with plain buttons + aria
 * attributes (no external dependency needed). Minimal style: hairline
 * dividers, no boxed card.
 */
export default function Accordion({
  items,
  defaultOpenId,
  headingLevel: Heading = "h3",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="divide-y divide-sarenti-line border-y border-sarenti-line">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;
        return (
          <div key={item.id}>
            <Heading>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-sarenti-ink transition-colors hover:text-sarenti-primary sm:text-[1.05rem]"
              >
                <span>{item.title}</span>
                <Plus
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-sarenti-primary transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="max-w-2xl pb-5 pr-8 text-[0.95rem] leading-relaxed text-sarenti-muted"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
