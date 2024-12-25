import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <article>
            <Outlet/>
        </article>
      </main>
      <Footer />
    </>
  );
}
