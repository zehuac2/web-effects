import GridWithCSS from './GridWithCSS';
import GridWithShader from './GridWithShader';

import './page.scss';

/**
 * Demonstrate how to implement grid
 */
function GridPage() {
  return (
    <section>
      <h1>Grid</h1>
      <GridWithCSS />
      <GridWithShader />
    </section>
  );
}

GridPage.displayName = 'GridPage';

export default GridPage;
