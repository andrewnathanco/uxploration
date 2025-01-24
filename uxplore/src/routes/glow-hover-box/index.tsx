import { Accessor, createSignal } from "solid-js"

const glowSize = 500

function moveGlow(event: MouseEvent) {
    var d = document.getElementById('glow')

    const div_x = event.clientX - (glowSize / 2)
    const div_y = event.clientY - (glowSize / 2)

    if (d) {
        d.style.display = 'block'
        d.animate({
            left:`${div_x}px`,
            top: `${div_y}px`,
        }, {duration: 1000, fill: "forwards"})
    }
}


function clearGlow(event: MouseEvent) {
    var d = document.getElementById('glow')

    if (d) {
        d.style.display = "none"
    }
}

export default function Home() {
    return (
        <main class="h-screen w-screen p-4 flex justify-center items-center"  >
            <div class="flex flex-wrap gap-2">
                <Box
                    title="Repository"
                    description="Self-authenticating storage for public account content."
                />
                <Box 
                    title="Other Box"
                    description="This is another box"
                />
                <Box 
                    title="Other Other Box"
                    description="this is one more box"
                />
            </div>
        </main>
    )
} 

function Glow() {
    return <div
        style={
            { 
                height: `${glowSize}px`, 
                width: `${glowSize}px`,
                background: "radial-gradient(circle, rgba(58,130,246,0.70) 0%, rgba(254,243,198,0.70) 70%)"
            }
        }
        class="rounded-full absolute -z-10 bg-blue-500" id="glow"></div>
}

function Box(props: {
    title: string, 
    description: string,
}) {

    const [xPos, setXPos] = createSignal(0);
    const [yPos, setYPos] = createSignal(0);

    const boxTitle = `box-${props.title}`;

    function updateBox(event: MouseEvent) {
        const div_x = event.clientX - (glowSize / 2)
        const div_y = event.clientY - (glowSize / 2)
        const div_x_pos = `${div_x}px`
        const div_y_pos = `${div_y}px`

        var box = document.getElementById(boxTitle)

        if (box) {
            box.style.maskImage = `
                radial-gradient(180px at ${div_x_pos} ${div_y_pos}, white, transparent);-webkit-mask-image:radial-gradient(180px at ${div_x_pos} ${div_y_pos}, white, transparent
            `

            console.log(box.style)
        }
    } 

    return (
        <div 
            id={boxTitle}
            on:mousemove={(event) => {
                setXPos(event.clientX)
                setYPos(event.clientY)
            }}
            style={{"mask-image": `radial-gradient(180px at ${xPos()}px ${yPos()}px, white, transparent);-webkit-mask-image:radial-gradient(180px at ${xPos()}px ${yPos()}px, white, transparent`}}
            class="
                w-full
                p-2 flex flex-col space-y-1 shadow-lg
                border
                border-black
                inset-0 rounded-2xl bg-gradient-to-r from-[#e9f7ff] to-[#cee7f9] opacity-0 transition duration-300 hover:opacity-100 dark:from-[#12294d] dark:to-[#003964]
            "
        >
            <h1 class={"text-2xl font-bold"}>
                {props.title}
            </h1>
            <p>{props.description}</p>
        </div>
    )
}
