import Link from 'next/link';

const LINKS = [
  { href: '/all-gray-but-one', label: 'All Gray But One' },
  { href: '/glass', label: 'Glass' },
  { href: '/grid', label: 'Grid' },
  { href: '/safari', label: 'Safari' },
  { href: '/scroll-animations', label: 'Scroll Animations' },
  { href: '/split-flip-timer', label: 'Split Flip Timer' },
  { href: '/windows-effect', label: 'Windows Effect' },
];

function Page() {
  return (
    <section>
      <h1>Hello, Next.js!</h1>
      <ul>
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

Page.displayName = 'Page';

export default Page;
