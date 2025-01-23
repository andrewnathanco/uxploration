import { createEffect, createSignal } from "solid-js"

export default function Home() {
    function moveBox(event: MouseEvent) {
        var d = document.getElementById('box-to-move')
        console.log(event)
        if (d) {
            d.animate({
                left:`${event.clientX}px`,
                top: `${event.clientY}px`,
            }, {duration: 1000, fill: "forwards"})
        }
    }

    return (
        <div class="h-screen w-screen" onMouseMove={moveBox}>
            <div class="h-8 w-8 bg-amber-800 absolute" id='box-to-move'></div>
        </div>
    )
} 