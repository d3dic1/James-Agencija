'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    price: { monthly: '$49', annually: '$39' },
    description: 'Perfect for small businesses just getting started with digital marketing.',
    features: [
      'Basic SEO optimization',
      'Social media management (2 platforms)',
      'Monthly content creation (2 posts)',
      'Basic analytics reporting',
      'Email support',
      '1-hour monthly strategy call',
    ],
    cta: 'Get started',
    mostPopular: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    price: { monthly: '$149', annually: '$119' },
    description: 'Ideal for growing businesses looking to scale their marketing efforts.',
    features: [
      'Advanced SEO optimization',
      'Social media management (4 platforms)',
      'Weekly content creation (4 posts)',
      'Advanced analytics reporting',
      'Priority email & phone support',
      '2-hour monthly strategy call',
      'PPC campaign management',
      'Email marketing automation',
    ],
    cta: 'Get started',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: { monthly: '$499', annually: '$399' },
    description: 'For established businesses requiring comprehensive marketing solutions.',
    features: [
      'Full-service SEO optimization',
      'Social media management (all platforms)',
      'Daily content creation (20 posts)',
      'Custom analytics dashboard',
      '24/7 priority support',
      '4-hour monthly strategy call',
      'Full PPC campaign management',
      'Advanced email marketing',
      'Content strategy development',
      'Custom reporting',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
];

const faqs = [
  {
    question: 'What\'s included in the monthly price?',
    answer: 'Each plan includes all the features listed in the pricing table, with no hidden fees. You\'ll get access to our full suite of marketing tools and services, along with dedicated support from our team.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we\'ll prorate any differences in pricing.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we understand that every business has unique needs. Contact our sales team to discuss custom solutions tailored to your specific requirements.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide different levels of support based on your plan. All plans include email support, while Professional and Enterprise plans include priority phone support and dedicated account managers.',
  },
  {
    question: 'How long are the contracts?',
    answer: 'We offer flexible month-to-month contracts for all plans. We also provide discounted annual plans for those who prefer longer commitments.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 14-day free trial for all plans. This allows you to test our services and ensure they meet your needs before making a commitment.',
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the perfect plan for your business. All plans include our core features
              and are backed by our 100% satisfaction guarantee.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg">Get started</Button>
              <a href="#faq" className="text-sm font-semibold leading-6 text-gray-900">
                View FAQ <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Billing toggle */}
          <div className="flex justify-center">
            <div className="relative flex rounded-full p-1 bg-gray-100">
              <button
                type="button"
                className={`${
                  billingCycle === 'monthly'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                } relative rounded-full py-2 px-6 text-sm font-semibold transition-all`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`${
                  billingCycle === 'annually'
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                } relative rounded-full py-2 px-6 text-sm font-semibold transition-all`}
                onClick={() => setBillingCycle('annually')}
              >
                Annually
                <span className="absolute -top-1 -right-1 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing tiers */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                  tier.mostPopular ? 'bg-gray-900 text-white' : 'bg-white'
                }`}
              >
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    tier.mostPopular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-4 text-sm leading-6 ${
                    tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      tier.mostPopular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.price[billingCycle]}
                  </span>
                  <span
                    className={`text-sm font-semibold leading-6 ${
                      tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    /month
                  </span>
                </p>
                <Button
                  size="lg"
                  variant={tier.mostPopular ? 'secondary' : 'default'}
                  className="mt-6 w-full"
                >
                  {tier.cta}
                </Button>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${
                    tier.mostPopular ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className={`h-6 w-5 flex-none ${
                          tier.mostPopular ? 'text-white' : 'text-blue-600'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div id="faq" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-base font-semibold leading-7 text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1d4240dd-898f-445f-932d-e2872fd12de3"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
        </svg>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to grow your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Get started with our marketing services today and take your business to the next level.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Get started</Button>
            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact sales <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 