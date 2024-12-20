import "./About.css";

import About_5 from '../../../img/about-coach.jpg'
import About_1 from '../../../img/a-banner.png'
import { Link } from "react-router-dom";
export default function About() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
      <div className="about-banner has-after">
          <img
            src={About_1}
            width="660"
            height="648"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </div>

        <div className="about-content">
          <p className="section-subtitle" style={{margin: '0'}}>About Us</p>

          <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>

          <p className="section-text">
            Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus
            vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien
            non accumsan dignissim curabitur sagittis nulla sit amet dolor
            feugiat.
          </p>

          <p className="section-text">
            Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante
            ac aliquet viverra vestibulum ante ipsum primis.
          </p>

          <div className="wrapper">
            <div className="about-coach">
              <figure className="coach-avatar">
                <img
                  src={About_5}
                  width="65"
                  height="65"
                  loading="lazy"
                  alt="Trainer"
                />
              </figure>

              <div>
                <h3 className="h3 coach-name">Denis Robinson</h3>

                <p className="coach-title">Our Coach</p>
              </div>
            </div>

            <Link to={'#'} className="btn btn-primary">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
