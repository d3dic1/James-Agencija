'use client';

import { CheckIcon } from '@heroicons/react/20/solid';
import { Button } from '../ui/Button';
import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/contact',
    price: { monthly: '$15' },
    description: 'Everything you need to get started with your business.',
    features: [
      'Up to 5 projects',
      'Up to 10 team members',
      'Basic analytics',
      '24-hour support response time',
      '1GB storage',
      'Basic integrations',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '/contact',
    price: { monthly: '$30' },
    description: 'Everything in Starter, plus advanced features for growing businesses.',
    features: [
      'Up to 20 projects',
      'Up to 50 team members',
      'Advanced analytics',
      '4-hour support response time',
      '10GB storage',
      'Advanced integrations',
      'Custom reporting',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact',
    price: { monthly: '$60' },
    description: 'Everything in Professional, plus custom solutions for large organizations.',
    features: [
      'Unlimited projects',
      'Unlimited team members',
      'Custom analytics',
      '1-hour support response time',
      'Unlimited storage',
      'Custom integrations',
      'Custom reporting',
      'Dedicated support',
      'Custom training',
      'SLA guarantee',
    ],
    featured: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Pricing = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
          Explicabo id ut laborum.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? 'text-blue-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={tier.href} className="mt-8">
                <Button variant={tier.featured ? 'default' : 'outline'} className="w-full">
                  Get started today
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 