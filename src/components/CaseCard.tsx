"use client";

import { useState } from "react";

type Case = {
  ref: string;
  name: string;
  situation: string;
  action: string;
  outcome: string;
};

export function CaseCard({ c }: { c: Case }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="border border-rule bg-paper cursor-pointer hover:bg-paper-2 transition-colors"
      onClick={() => setExpanded((v) => !v)}
    >
      <div className={`px-6 lg:px-8 flex items-center justify-between gap-6 pt-6 lg:pt-7 ${expanded ? "pb-3" : "pb-6 lg:pb-7"}`}>
        <h3 className="text-[17px] font-semibold tracking-[-0.01em] leading-snug">
          {c.name}
        </h3>
        <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {expanded ? "Collapse ↑" : "Expand ↓"}
        </span>
      </div>

      {expanded && (
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="px-6 py-5 lg:px-8 lg:py-6">
            <span className="text-[11px] font-mono uppercase text-muted mb-2 block tracking-[0.16em]">
              Situation
            </span>
            <p className="text-[13px] text-body leading-[1.55]">{c.situation}</p>
          </div>
          <div className="px-6 py-5 lg:px-8 lg:py-6">
            <span className="text-[11px] font-mono uppercase text-muted mb-2 block tracking-[0.16em]">
              Contribution
            </span>
            <p className="text-[13px] text-body leading-[1.55]">{c.action}</p>
          </div>
          <div className="px-6 py-5 lg:px-8 lg:py-6">
            <span className="text-[11px] font-mono uppercase text-muted mb-2 block tracking-[0.16em]">
              Outcome
            </span>
            <p className="text-[13px] text-body leading-[1.55]">{c.outcome}</p>
          </div>
        </div>
      )}
    </article>
  );
}
