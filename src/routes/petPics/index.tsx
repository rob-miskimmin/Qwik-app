import { component$} from "@builder.io/qwik";


export default component$(() => {


    return(
        < div class= 'pets'>
        <h2> My Pet Gallery</h2>
        <img src="https://placehold.co/600x400?text=Spirit" alt="Spirit picture" />
        <img src="https://placehold.co/600x400?text=Shadow" alt="Shadow picture" />

        </ div>
    )

});