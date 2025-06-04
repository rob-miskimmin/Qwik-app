import { component$, useSignal, useStylesScoped$, $} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Pets from "./petPics"
import Animals from "./animalPics"




export default component$(() => {
  useStylesScoped$(`
    .home button {
        margin: 1rem 0 1rem 0;
        width: 200px;
        background-color: var(--theme-yellow);
        border: 1px solid var(--theme-purple);
        color: var(--theme-purple);
        border-radius: 1rem;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
        padding: 0.5rem;
        cursor: pointer;
    
}
        p {
            margin-top: 0.5rem;
        }

.gallery-wrapper {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
  
  .gallery-wrapper.fade-out {
    opacity: 0;
  }
  
  .gallery-wrapper.fade-in {
    opacity: 1;
  }`)


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
      <h1>Hi Animal Lovers</h1>
      <p>Here are some of my paintings</p>
      <p>Click the button to switch between my Pet and Animal galleries</p>
      
      <button onClick$={galleryChange}>Change Gallery</button>
     
     
     

     <div class={`gallery-wrapper ${isFading.value ? 'fade-out' : 'fade-in'}`}>
        {gallery.value ? <Animals /> : <Pets />}
      </div>

      
    </ div>
  );
});

export const head: DocumentHead = {
  title: "Marions Portraits",
  meta: [
    {
      name: "description",
      content: "Marions Portraits",
    },
  ],
};


