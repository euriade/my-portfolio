import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Introduction />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
