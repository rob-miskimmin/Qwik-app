import { component$, useStylesScoped$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";

export default component$(() => {
  useStylesScoped$(AboutStyles);

  return (
    <div class="about">
      <h1>About</h1>
      <p>This page is all about me, my art history, art style and preferred mediums</p>
    </div>
  );
});