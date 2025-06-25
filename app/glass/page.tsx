/**
 * TODO:
 * @summary Demonstrate glass effects.
 */
import RegularGlass from './RegularGlass';
import LiquidGlass from './LiquidGlass';

function GlassPage() {
  return (
    <section>
      <h1>Glass</h1>
      <RegularGlass />
      <LiquidGlass />
    </section>
  );
}

GlassPage.displayName = 'GlassPage';

export default GlassPage;
