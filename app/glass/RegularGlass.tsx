import Theme from './Theme';

/**
 * Regular Glass
 * - (Optional) Frosted glass background
 * - Typically 1px border
 * - Dark theme: slightly lighter color on the border than the background
 * - Light theme: darker color on the border than the background
 */
function RegularGlass() {
  return (
    <section>
      <h2>Regular Glass</h2>
      <Theme theme="light">
        <h3>Light Theme</h3>
        <div />
      </Theme>
      <Theme theme="dark">
        <h3>Dark Theme</h3>
        <div />
      </Theme>
    </section>
  );
}

RegularGlass.displayName = 'RegularGlass';

export default RegularGlass;
