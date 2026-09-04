import { tv } from 'tailwind-variants';

const contentColumn = tv({
  base: [
    'w-full',
    'mx-auto',
    'max-w-content-width',
    'px-4',
    'border-gray-700',
    'content-gutter:border-s',
    'content-gutter:border-e',
  ],
});

export default contentColumn;
