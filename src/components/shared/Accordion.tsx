'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/cn';

interface Item {
  question: string;
  answer: string;
}

/** Accessible single-open accordion (semantic buttons, aria-expanded, keyboard). */
export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;
        return (
          <div key={i} className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-[15.5px] font-semibold text-ink">{item.question}</span>
                <span
                  className={cn(
                    'flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-200',
                    isOpen ? 'rotate-45 bg-brand-purple text-white' : 'bg-surface-alt text-ink-soft'
                  )}
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn('grid transition-all duration-300 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-ink-soft">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
