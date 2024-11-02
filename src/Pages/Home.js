import About from "../components/Home/About/About";
import Goal from "../components/Home/Goal/Goal";
import Hero from "../components/Home/Hero/Hero";
import Plan from "../components/Home/Plan/Plan";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import "../Style/Media.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <About />
          <Goal />
          <Plan />
        </article>
      </main>
      <Footer />
    </>
  );
}
