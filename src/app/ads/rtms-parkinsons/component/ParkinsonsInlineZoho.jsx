'use client';

import React, { useEffect, useRef, useState } from 'react';

function mergePageQueryIntoUrl(baseUrl, search) {
  if (!baseUrl) return '';
  if (!search || search === '?') return baseUrl;
  const sep = baseUrl.includes('?') ? '&' : '?';
  const clean = search.startsWith('?') ? search.slice(1) : search;
  return `${baseUrl}${sep}${clean}`;
}

/**
 * Parkinson’s-only: inline Zoho form iframe (no modal). Does not use shared RequestAppointment / ZohoForm.
 */
export default function ParkinsonsInlineZoho({ iframeSrc }) {
  const iframeRef = useRef(null);
  const [mergedSrc, setMergedSrc] = useState(iframeSrc || '');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setMergedSrc(mergePageQueryIntoUrl(iframeSrc || '', window.location.search));
  }, [iframeSrc]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onMsg = (event) => {
      const raw = event.data;
      if (typeof raw !== 'string') return;
      const parts = raw.split('|');
      if (parts.length < 2) return;
      const zfPerma = parts[0];
      const h = parseInt(parts[1], 10);
      if (Number.isNaN(h)) return;
      if (iframe.src.includes('formperma') && iframe.src.includes(zfPerma)) {
        const next = h + 15;
        const cap = Math.min(next, 2000);
        iframe.style.height = `${Math.max(280, cap)}px`;
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [mergedSrc]);

  if (!mergedSrc) return null;

  return (
    <div className="phl-zoho-frame">
      <iframe
        ref={iframeRef}
        title="Contact form"
        src={mergedSrc}
        className="block w-full max-w-full border-0"
        style={{
          height: 'min(560px, calc(85dvh - 8rem))',
          minHeight: 'min(360px, 55dvh)',
        }}
      />
    </div>
  );
}
