import About from "@/components/About";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <About />
    </main>
  );
}
