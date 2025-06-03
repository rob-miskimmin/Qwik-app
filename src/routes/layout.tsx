import { component$, Slot } from "@builder.io/qwik";
import Navbar from "../components/router-head/navbar";

export default component$(() => {
    return (
        <>
        <Navbar />
        <Slot />
        <footer>
            <p>© 2025 Robert Miskimmin. All rights reserved.</p>
        </footer>
        </>
    );
});