// app/thankyou/layout.tsx
// Copy this file to ALL your thank you directories

"use client";
import { usePathname } from "next/navigation";
import { useEffect } from 'react';

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create unique key for this specific thank you page
      const conversionKey = `conversion_fired_${pathname}`;
      
      // Check if conversion already fired in this session
      const alreadyFired = sessionStorage.getItem(conversionKey);
      
      if (!alreadyFired) {
        // Conversion hasn't fired yet, proceed
        const timer = setTimeout(() => {
          if (typeof (window as any).gtag !== 'undefined') {
            // Fire the conversion
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-11458426933/r31gCM-D0boaELXw5tcq',
              'value': 1.0,
              'currency': 'INR'
            });
            
            // Mark as fired in sessionStorage to prevent duplicates
            sessionStorage.setItem(conversionKey, 'true');
            console.log('✅ Google Ads conversion fired on:', pathname);
          } else {
            console.error('❌ gtag is not defined');
          }
        }, 500);

        // Cleanup timer on unmount
        return () => clearTimeout(timer);
      } else {
        // Conversion already fired in this session
        console.log('⏭️ Conversion already tracked in this session for:', pathname);
      }
    }
  }, [pathname]);

  return <>{children}</>;
}