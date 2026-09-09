"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
}

/**
 * Accessible single-open accordion built with plain buttons + aria
 * attributes (no external dependency needed).
 */
export default function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="divide-y divide-sarenti-ink/10 rounded-xl2 border border-sarenti-ink/10 bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-sarenti-ink sm:px-6 sm:py-5 sm:text-lg"
              >
                <span>{item.title}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-sarenti-primary transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-sarenti-ink/70 sm:px-6 sm:text-base"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
