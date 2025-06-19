import "./page.scss";

/**
 * Demonstrate how to implement grid
 * - TODO: Graphics context.
 */
function GridPage() {
  return (
    <section>
      <h1>Grid</h1>
      <section>
        <h2>Using CSS</h2>
        <div className="GridPage__css" />
      </section>
    </section>
  );
}

GridPage.displayName = "GridPage";

export default GridPage;
