import "../Style/Media.css";
import About from "../components/Home/About/About";
import Hero from "../components/Home/Hero/Hero";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <About />
        </article>
      </main>
      <Footer />
    </>
  );
}
