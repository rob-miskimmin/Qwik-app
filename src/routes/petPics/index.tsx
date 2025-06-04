import { component$, useStylesScoped$ } from "@builder.io/qwik";


export default component$(() => {
    useStylesScoped$(`
        div img {
             width: 10rem;
    height: 10rem;
    margin: 1rem;
    border: 2px solid red
        }
        `)


    return(
        < div class= 'pets'>
        <h2> My Pet Gallery</h2>
        <img src="https://placehold.co/600x400?text=Spirit" height="600" width="400" alt="Spirit picture" />
        <img src="https://placehold.co/600x400?text=Shadow" height="600" width="400" alt="Shadow picture" />

        </ div>
    )

});