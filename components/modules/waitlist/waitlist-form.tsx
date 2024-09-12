'use client';

import { Input, Button } from '@fucina/ui';

export default function WaitlistForm() {
  return (
    <>
      <div className="relative z-40 flex justify-center items-center mt-10 sm:mt-0 w-screen sm:h-screen overflow-auto">
        <div className="justify-start sm:justify-items-center gap-12 grid m-6 py-20 sm:py-0 max-w-screen-sm">
          <div className="gap-8 grid text-left sm:text-center">
            <h1 className="max-w-screen-md font-brand font-medium text-5xl sm:text-6xl">
              <span className="brand-gradient">Lorem ipsum</span> dolor sit
              amet, consectetur adipiscing elit
            </h1>
            <p className="text-description text-lg leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <form className="xs:flex justify-start xs:justify-center items-left xs:items-center gap-2 grid w-full max-w-[420px]">
            <Input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required={true}
              className="w-full"
              autoFocus
            />
            <Input
              type="hidden"
              name="userGroup"
              value="waitlist"
              className="hidden"
            />
            <Button className="font-brand font-medium text-lg" type="submit">
              Join the waitlist
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
