"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/site-config";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-[#1E1E1E]/12 border-y border-[#1E1E1E]/12">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-button-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="py-1">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full py-5 text-left flex items-center justify-between gap-4 text-[#1E1E1E] hover:text-[#6F1511] transition-colors rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F1511] cursor-pointer"
              >
                <span className="font-serif text-lg md:text-[1.3rem] font-bold leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`w-5 h-5 text-[#6F1511] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-4 md:pr-10 text-[#32302D] text-[15px] sm:text-base leading-[1.72] max-w-[68ch]"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
