'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const stats = [
  { id: 1, name: 'Years of experience', value: '10+' },
  { id: 2, name: 'Clients worldwide', value: '500+' },
  { id: 3, name: 'Projects completed', value: '1000+' },
  { id: 4, name: 'Team members', value: '50+' },
];

const team = [
  {
    name: 'Sarah Chen',
    imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80',
    title: 'CEO, TechStart Inc.',
  },
  {
    name: 'Michael Rodriguez',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80',
    title: 'Marketing Director, Global Solutions',
  },
  {
    name: 'Emily Thompson',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80',
    title: 'Founder, EcoLife',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    imageUrl: '/images/team/david-kim.jpg',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  About Growthly
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We're a team of passionate digital marketers, developers, and strategists dedicated to helping businesses grow in the digital age.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button size="lg">Get in touch</Button>
                  <a href="#team" className="text-sm font-semibold leading-6 text-gray-900">
                    Meet our team <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 md:-mr-20 lg:-mr-36" aria-hidden="true" />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-blue-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            About.tsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">Team.tsx</div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        <pre className="text-[0.8125rem] leading-6 text-gray-300">
                          <code>
                            {`// Our mission is to help businesses
// grow through innovative digital
// marketing solutions.

const mission = {
  goal: "Empower businesses",
  method: "Digital marketing",
  outcome: "Sustainable growth"
};`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by businesses worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We've helped hundreds of businesses achieve their growth goals through our digital marketing solutions.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team section */}
      <div id="team" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're a diverse group of individuals who are passionate about helping businesses grow.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name}>
              <Image
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt={person.name}
                width={500}
                height={500}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 