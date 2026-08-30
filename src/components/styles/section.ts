import { cva } from 'cva';

const section = cva({
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

export default section;
