import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Introduction />
      <About />
      <Projects />
    </main>
  );
}
