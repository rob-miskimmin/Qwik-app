import { component$, useStylesScoped$ } from "@builder.io/qwik";


export default component$(() => {
    useStylesScoped$(`
        header {
          display: flex;
          justify-content: space-between;
          margin: 2rem;
        }
        nav {
            display: flex;
            gap: 2rem;
            list-style: none;
          }
        a{
            text-decoration: none;
            color: purple
          }
        
    
       
      `);
    return (
        <header>
            <h1>Marions Portraits</h1>
            <nav>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </nav>
        </header>
    );
});