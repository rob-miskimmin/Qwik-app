import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import navStyle from "./navbar.css?inline"

export default component$(() => {
    useStylesScoped$(navStyle)
    return (
        <header>
            <h1>Marions Portraits</h1>
        <nav>
                <Link class="link" href="/">Home</Link>
                <Link class="link" href="/about">About</Link>
                <Link class="link" href="/contact">Contact</Link>
        </nav>
        </header>
    );
});