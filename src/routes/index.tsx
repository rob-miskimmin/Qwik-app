import { component$, useSignal, $} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Pets from "./petPics"
import Animals from "./animalPics"




export default component$(() => {


  const gallery = useSignal(true);
  const isFading = useSignal(false);

  const galleryChange = $(() => {
    isFading.value = true
    setTimeout(() => {
      gallery.value = !gallery.value;
      isFading.value = false;
    }, 500);
  })
 


  return (
    <div class='home'>
      <h1>Hi 👋 </h1>
      
      <button onClick$={galleryChange}>Change Gallery</button>
     
     
     <p>Click the button to switch between my Pet and Animal galleries</p>

     <div class={`gallery-wrapper ${isFading.value ? 'fade-out' : 'fade-in'}`}>
        {gallery.value ? <Animals /> : <Pets />}
      </div>

      
    </ div>
  );
});

export const head: DocumentHead = {
  title: "My Qwik App",
  meta: [
    {
      name: "description",
      content: "My Qwik App",
    },
  ],
};


