'use client';

import Image from 'next/image';

const testimonials = [
  {
    quote:
      'Working with Growthly has been a game-changer for our business. Their data-driven approach and strategic insights have helped us achieve remarkable growth in our online presence.',
    imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80',
    name: 'Sarah Chen',
    title: 'CEO, TechStart Inc.',
  },
  {
    quote:
      "The team at Growthly is incredibly professional and knowledgeable. They've helped us optimize our marketing campaigns and improve our ROI significantly.",
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80',
    name: 'Michael Rodriguez',
    title: 'Marketing Director, Global Solutions',
  },
  {
    quote:
      "I'm impressed by Growthly's ability to understand our business needs and deliver results. Their analytics tools have given us valuable insights into our customer behavior.",
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=64&h=64&facepad=2&q=80',
    name: 'Emily Thompson',
    title: 'Founder, EcoLife',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div key={testimonialIdx} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.quote}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 