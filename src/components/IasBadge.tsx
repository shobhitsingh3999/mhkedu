"use client";

import { useEffect, useRef } from "react";

const IAS_ACCOUNT_ID = "7198";

export default function IasBadge({
  className = "",
  width = 120,
}: {
  className?: string;
  width?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let cancelled = false;
    fetch(`https://api2.icef.com/public/account/certificate/${IAS_ACCOUNT_ID}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const rec = Array.isArray(data?.records) ? data.records[0] : null;
        if (!rec?.CDN_link_to_IAS_logo__c) return;
        node.innerHTML = `<a href="https://www.icef.com/agency/${rec.Master_Account__c}" target="_blank" rel="noopener noreferrer"><img src="${rec.CDN_link_to_IAS_logo__c}" alt="IAS Accredited" style="width:${width}px;" /></a>`;
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [width]);

  return <span ref={ref} className={`inline-block ${className}`} />;
}
