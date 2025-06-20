import GridWithCSS from './GridWithCSS';

import './page.scss';

/**
 * Demonstrate how to implement grid
 * - TODO: Graphics context.
 */
function GridPage() {
  return (
    <section>
      <h1>Grid</h1>
      <GridWithCSS />
    </section>
  );
}

GridPage.displayName = 'GridPage';

export default GridPage;
