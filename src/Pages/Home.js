import About from "../components/Home/About/About";
import Goal from "../components/Home/Goal/Goal";
import Hero from "../components/Home/Hero/Hero";
import Plan from "../components/Home/Plan/Plan";

export default function Home() {
  return (
    <>
     <main>
     <article>
      <Hero />
      <About />
      <Goal />
      <Plan />
      </article>
      </main>

    </>
  );
}
