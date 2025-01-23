const glowSize = 100

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
        <main class="h-screen w-screen p-4 flex justify-center items-center" >
            <div class="flex flex-wrap gap-2">
                <Box 
                title="Repository"
                description="Self-authenticating storage for public account content."
                />
                <Box 
                title="Repository"
                description="Self-authenticating storage for public account content."
                />
                <Box 
                title="Repository"
                description="Self-authenticating storage for public account content."
                />
            </div>
            <div 
            style={{height: `${glowSize}px`, width: `${glowSize}px`, filter:"blur(25px)"}}
            class="rounded-full bg-amber-800 absolute" id="glow"></div>
        </main>
    )
} 

function Box(props: {title: string, description: string}) {
    return (
        <div class={"rounded-lg border border-black p-2 flex flex-col space-y-1"}on:mousemove={moveGlow}>
            <h1 class={"text-2xl font-bold"}>
                {props.title}
            </h1>
            <p>{props.description}</p>
        </div>
    )
}
