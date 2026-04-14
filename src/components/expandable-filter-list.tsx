"use client";

import { useMemo, useState } from "react";

type FilterItem = {
  label: string;
  count: number;
};

type ExpandableFilterListProps = {
  items: FilterItem[];
  initialVisibleCount?: number;
};

export default function ExpandableFilterList({
  items,
  initialVisibleCount = 10,
}: ExpandableFilterListProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = useMemo(
    () => (expanded ? items : items.slice(0, initialVisibleCount)),
    [expanded, items, initialVisibleCount]
  );
  const hasMore = items.length > initialVisibleCount;

  return (
    <div className="mt-3 space-y-2 text-sm text-zinc-700">
      {visibleItems.map((item) => (
        <label key={`${item.label}-${item.count}`} className="flex items-center gap-2">
          <input type="checkbox" />
          {item.label} ({item.count})
        </label>
      ))}
      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="pt-1 text-xs font-medium text-zinc-900 hover:underline"
        >
          {expanded ? "- Show less" : "+ Show more"}
        </button>
      ) : null}
    </div>
  );
}

