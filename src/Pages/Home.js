import About from "../components/Home/About/About";
import Goal from "../components/Home/Goal/Goal";
import Hero from "../components/Home/Hero/Hero";
import Plan from "../components/Home/Plan/Plan";
import "../Style/Media.css";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Goal />
      <Plan />
    </>
  );
}
