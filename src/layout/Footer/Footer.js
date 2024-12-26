import "./Footer.css";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Bg_Image from "../../img/hero-bg.png";
import Components from "../../Style/Components/Components";
import { useSelector } from "react-redux";
export default function Footer() {
  const { MyComponentHeroSubtitleA} = Components();
  const { value } = useSelector((state) => state.mode)
  return (
    <footer className={`footer ${value}`} id="contact">
      <div
        className="section footer-top has-bg-image"
        style={{ backgroundImage: `url(${Bg_Image})` }}
      >
        <div className="container">
          <div className="footer-brand">
            <a href="index" className="logo">
              <FitnessCenterIcon className="ion-icon" />

              <span className="span">Fitlife</span>
            </a>

            <p className="footer-brand-text">
              Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.
            </p>

            <div className="wrapper">
            
              <ul className="footer-brand-list">
                <li>
                  <p className="footer-brand-title">Monday - Friday</p>

                  <p className="footer_p">7:00Am - 10:00Pm</p>
                </li>

                <li>
                  <p className="footer-brand-title">Saturday - Sunday</p>

                  <p className="footer_p">7:00Am - 2:00Pm</p>
                </li>
              </ul>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">Our Links</p>
            </li>

            <li>
              <a href="#home" className="footer-link">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#goal" className="footer-link">
                Goal
              </a>
            </li>

            <li>
              <a href="#plan" className="footer-link">
                Plans
              </a>
            </li>

            <li>
              <a href="#contact" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">Contact Us</p>
            </li>

            <li className="footer-list-item">
              <div className="icon">
                <LocationOnIcon />
              </div>

              <address className="address footer-link">
                1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
              </address>
            </li>

            <li className="footer-list-item">
              <div className="icon">
                <PhoneIcon />
              </div>

              <div>
                <a href="tel:18001213637" className="footer-link">
                  1800-121-3637
                </a>

                <a href="tel:+915552348765" className="footer-link">
                  +91 555 234-8765
                </a>
              </div>
            </li>

            <li className="footer-list-item">
              <div className="icon">
                <EmailIcon />
              </div>

              <div>
                <a href="mailto:info@fitlife.com" className="footer-link">
                  info@fitlife.com
                </a>

                <a href="mailto:services@fitlife.com" className="footer-link">
                  services@fitlife.com
                </a>
              </div>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">Our Newsletter</p>
            </li>

            <li>
              <form action="" className="footer-form">
                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  placeholder="Email Address"
                  required
                  className="input-field"
                />

                <button
                  type="submit"
                  className="btn btn-primary"
                  aria-label="Submit"
                >
                <SendIcon />
                </button>
              </form>
            </li>

            <li>
              <ul className="social-list">
                <li>
                  <MyComponentHeroSubtitleA href="index" className="social-link">
                    <FacebookIcon />
                  </MyComponentHeroSubtitleA>
                </li>

                <li>
                  <MyComponentHeroSubtitleA href="index" className="social-link">
                    <InstagramIcon />
                  </MyComponentHeroSubtitleA>
                </li>

                <li>
                  <MyComponentHeroSubtitleA href="index" className="social-link">
                    <TwitterIcon />
                  </MyComponentHeroSubtitleA>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 Fitlife. All By{" "}
            <a href="index" className="copyright-link">
              Boshra.
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
