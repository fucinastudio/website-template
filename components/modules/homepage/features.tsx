import React from 'react';
import Link from 'next/link';
import { Gem, ListOrdered, Trophy, Users, Globe, Heart } from 'lucide-react';

import { Button } from '@fucina/ui';
import { GithubIcon } from '@/components/social-icons';
import EmptyRaw from '@/components/modules/homepage/feature-blocks/empty-raw';
import Title from '@/components/modules/homepage/feature-blocks/title';
import {
  DoubleCard,
  SingleCard,
} from '@/components/modules/homepage/feature-blocks/cards';
import Icons from '@/components/modules/homepage/feature-blocks/icons';
import WithButton from '@/components/modules/homepage/feature-blocks/with-button';

export default function Features() {
  return (
    <section id="features" className="border-grid border-t w-screen">
      <EmptyRaw />
      <Title
        title={
          <>
            <span className="brand-gradient">Lorem</span> ipsum
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <SingleCard
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        illustration={<></>}
      />
      <Icons
        items={[
          {
            icon: <Gem className="stroke-amber-500" />,
            title: 'Lorem ipsum.',
            description: 'Dolor sit amet, consectetur adipiscing elit.',
          },
          {
            icon: <ListOrdered />,
            title: 'Lorem ipsum.',
            description: 'Dolor sit amet, consectetur adipiscing elit.',
          },
          {
            icon: <Trophy />,
            title: 'Lorem ipsum.',
            description: 'Dolor sit amet, consectetur adipiscing elit.',
          },
        ]}
      />
      <EmptyRaw />
      <Title
        title={
          <>
            Lorem <span className="brand-gradient">ipsum</span>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <DoubleCard
        firstTitle="Lorem ipsum"
        firstDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        firstIllustration={<></>}
        secondTitle="Lorem ipsum"
        secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        secondIllustration={<></>}
      />
      <EmptyRaw />
      <Title
        title={
          <>
            <span className="brand-gradient">Lorem</span> ipsum
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <SingleCard
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        illustration={<></>}
      />
      <DoubleCard
        firstTitle="Lorem ipsum"
        firstDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        firstIllustration={<></>}
        secondTitle="Lorem ipsum"
        secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        secondIllustration={<></>}
      />
      <EmptyRaw />
      <Title
        title={
          <>
            Lorem <span className="brand-gradient">ipsum</span>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <SingleCard
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        illustration={<></>}
      />
      <Icons
        items={[
          {
            icon: <Heart />,
            title: 'Lorem ipsum',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            icon: <Globe />,
            title: 'Lorem ipsum',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            icon: <Users />,
            title: 'Lorem ipsum',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
        ]}
      />
      <EmptyRaw />
      <WithButton
        title={
          <>
            Proudly <span className="brand-gradient">open source</span>
          </>
        }
        description="Fucina is not greedy, and neither of us is: we keep this tool entirely open source. "
        button={
          <Button asChild variant="secondary" className="w-full sm:w-fit">
            <Link
              target="blank"
              href="https://github.com/fucinastudio/website-template"
              className="flex items-center gap-2"
            >
              <GithubIcon />
              Github
            </Link>
          </Button>
        }
      />
      <EmptyRaw />
    </section>
  );
}
