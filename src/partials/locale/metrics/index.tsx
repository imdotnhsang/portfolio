import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { memo } from 'react';

import type { FC } from 'react';

export const Metrics: FC = memo(function Metrics() {
  return (
    <>
      <Analytics />

      <SpeedInsights />

      <Script
        id='microsoft-clarity-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_MS_CLARITY_KEY}");
                `
        }}
      />
    </>
  );
});
