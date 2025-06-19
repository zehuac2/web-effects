import clsx from 'clsx';

import './page.scss';

interface ContentProps {
  className?: string;
}

function Content({ className }: ContentProps) {
  return (
    <div className={clsx('SafariPageContent', className)}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <button>Some button</button>
      <div className="SafariPageContent__translated">Translated</div>
      <svg />
    </div>
  );
}

Content.displayName = 'Content';

/**
 * Demonstrate common problems with Safari and how to fix them.
 * - TODO: after opacity animation without will-change, Safari drops content.
 */
function SafariPage() {
  return (
    <section>
      <h1>Safari</h1>
      <p>This is in progress.</p>
      <section>
        <h2>Without will-change</h2>
        <p>After the opacity animation, Safari should (but currently does not) drop content.</p>
        <Content className="SafariPage__without-will-change" />
      </section>
      <section>
        <h2>With will-change</h2>
        <p>This should work as expected.</p>
        <Content className="SafariPage__with-will-change" />
      </section>
    </section>
  );
}

SafariPage.displayName = 'SafariPage';

export default SafariPage;
