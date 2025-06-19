import './page.scss';

function Content() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
  );
}

Content.displayName = 'Content';

/**
 * Demonstrate common problems with Safari and how to fix them.
 * - TODO: after opacity animation without will-change, Safari drops content.
 * @returns
 */
function SafariPage() {
  return (
    <section>
      <h1>Safari</h1>
      <section className="SafariPage__without-will-change">
        <h2>Without will-change</h2>
        <Content />
      </section>
      <section className="SafariPage__with-will-change">
        <h2>With will-change</h2>
        <Content />
      </section>
    </section>
  );
}

SafariPage.displayName = 'SafariPage';

export default SafariPage;
