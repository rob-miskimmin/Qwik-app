import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";



export default component$(() => {

    useStylesScoped$(`
        div{
            position: relative;
            width: 16rem;
            height: 10rem;
            margin: 1rem;
            border: 2px solid blue;
            cursor: pointer;
        }
        img{
            width: 100%;
            height: 100%;
            }
        div p{
            position: absolute;
            top: 0;
            left: 0;
            width: 16rem;
            height: 10rem;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            margin: 0;
        }
        `)

    const showLion = useSignal(false);
    const showTiger = useSignal(false);
    const showPeacock = useSignal(false);

    return(
        <>
        <h2> My Animal Gallery</h2>
        <div onClick$={() => showLion.value = !showLion.value}> 
        <img src="/lion.jpg" alt="Lion picture" height="400" width="600" />
        {showLion.value && <p>This is my Lion. He is painted with pastels on A3 paper. Cost is £100 with a black wood frame</p>}
        </div>
        <div onClick$={() => showTiger.value = !showTiger.value}>
        <img src="/tiger.jpg" alt="Tiger picture" height="400" width="600" />
        {showTiger.value && <p>This is my Tiger. He is painted with pastels on A3 paper. Cost is £100 with a black wood frame</p>}
        </div>
        <div onClick$={() => showPeacock.value = !showPeacock.value}>
        <img src="/peacock.jpg" alt="Peacock picture" height="400" width="600" />
        {showPeacock.value && <p>This is my Peacock. He is painted with pastels on A3 paper. Cost is £100 with a black wood frame</p>}
        </div>

        </>
    )

});
