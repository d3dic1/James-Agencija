'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionVariants = cva('w-full', {
  variants: {
    variant: {
      default: 'bg-white',
      primary: 'bg-blue-50',
      secondary: 'bg-gray-50',
    },
    padding: {
      default: 'py-16 md:py-24',
      sm: 'py-12 md:py-16',
      lg: 'py-24 md:py-32',
      none: 'py-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'default',
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ variant, padding, className }))}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

const SectionContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    {...props}
  />
));
SectionContent.displayName = 'SectionContent';

const SectionHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-center max-w-3xl mx-auto mb-12', className)}
    {...props}
  />
));
SectionHeader.displayName = 'SectionHeader';

const SectionTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl',
      className
    )}
    {...props}
  />
));
SectionTitle.displayName = 'SectionTitle';

const SectionDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('mt-4 text-lg text-gray-600', className)}
    {...props}
  />
));
SectionDescription.displayName = 'SectionDescription';

export {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
  SectionDescription,
}; 