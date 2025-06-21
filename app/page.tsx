import Link from 'next/link';

const LINKS = [
  { href: '/grid', label: 'Grid' },
  { href: '/glass', label: 'Glass' },
  { href: '/scroll-animations', label: 'Scroll Animations' },
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
