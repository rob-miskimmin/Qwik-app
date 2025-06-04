import { component$, useStylesScoped$ } from "@builder.io/qwik";

export default component$(() => {
  useStylesScoped$(`
    div {
    padding: 2rem;
    background-color: var(--theme-yellow);
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    margin: 2rem;
}
    `);

  return (
    <div>
      <h1>About</h1>
      <p>This page is all about me, my art history, art style and preferred mediums</p>
    </div>
  );
});