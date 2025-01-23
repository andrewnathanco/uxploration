import { link } from "../shared/styles";

export default function Home() {
  return (
    <main class="mx-auto text-gray-800 p-4 flex flex-col space-y-2">
      <div class="border flex flex-col space-y-1 border-black rounded-lg p-2">
        <p class="text-xl font-bold"><span class="text-amber-600">UX</span>plore</p>
        <p>Hi... this is a website dedicated to me trying to recreate interesting things I find on the internet.</p>
        <p>This is all with the goal of getting better at user interface and user experience</p>
        <p>This is mostly inspired by <a class={link} href='https://www.youtube.com/@Hyperplexed'>@Hyperplexed</a></p>
      </div>
      <div class="border flex flex-col space-y-2 border-black rounded-lg p-2">
        <p class="text-lg font-bold">Table of Contents</p>
        <div>
          <a class={link} href="/glow-hover-box">/glow-hover-box</a>
          <p>inspired by: <a class={link} href="https://atproto.com/">https://atproto.com/</a></p>
        </div>
      </div>
    </main>
  );
}
