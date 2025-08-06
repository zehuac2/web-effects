function Background() {
  return <div>Background</div>;
}

/**
 * TODO: implement windows effect.
 * @link https://openai.com/open-models/
 */
function WindowsEffectPage() {
  return (
    <ul>
      {/*
      We should place the background in such a way that it appears to span both
      windows, creating a seamless effect. However, elements outside of the
      windows should be hidden.
       */}
      <li>
        Window 1
        <Background />
      </li>
      <li>
        Window 2
        <Background />
      </li>
    </ul>
  );
}

WindowsEffectPage.displayName = "WindowsEffectPage";

export default WindowsEffectPage;
