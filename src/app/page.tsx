import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main className="flex-center h-[100vh]">
      <h1>Home</h1>
    </main>
  );
}
