import React from 'react';
import Link from 'next/link';

import { Button } from '@fucina/ui';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-20 border-grid bg-gradient-to-b from-white/0 to-fuchsia-600/[0.07] border-b w-screen"
    >
      <div className="gap-8 grid grid-cols-3 mx-auto px-8 py-40 w-full max-w-screen-lg">
        <div>
          <h3 className="font-brand font-medium text-3xl">
            Free, forever
          </h3>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <Button variant="secondary" asChild className="w-full">
            <Link href="/signup">Start for free</Link>
          </Button>
        </div>
        <div className="border-default col-span-2 bg-subtle shadow-sm p-1 border rounded-lg">
          <div className="border-default bg-background border rounded h-full">
            <h2 className="font-brand font-medium text-4xl brand-gradient">
              Spice things up with Pro
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
