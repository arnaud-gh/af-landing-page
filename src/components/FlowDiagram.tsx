"use client";

import { useState, useEffect } from "react";

export function FlowDiagram() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <figure>
        <button
          onClick={() => setOpen(true)}
          className="block w-full cursor-zoom-in focus:outline-none"
          aria-label="View flow diagram enlarged"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/How I built this page with AI.png"
            alt="Diagram showing how this page was built using AI tools"
            loading="lazy"
            className="w-full h-auto block"
          />
        </button>
        <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted text-center">
          Custom flow built in Figma
        </figcaption>
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-ink/85 cursor-zoom-out"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Flow diagram lightbox"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/How I built this page with AI.png"
            alt="Diagram showing how this page was built using AI tools"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-6 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/70 hover:text-paper transition-colors"
            aria-label="Close"
          >
            Close ✕
          </button>
        </div>
      )}
    </>
  );
}
