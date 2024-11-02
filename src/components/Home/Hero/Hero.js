import "./Hero.css";
import Hero_1 from '../../../img/image.png'
import Hero_2 from '../../../img/h-circle-one.png'
import Hero_3 from '../../../img/h-circle-two.png'
import Bg_Image from '../../../img/hero-bg.png'
import Components from "../../../Style/Components/Components";
export default function Hero() {
  const { MyComponentHeroSubtitle , MyComponentTitle , MyComponentTextP } = Components();
  return (
    <section
      className="section hero has-after has-bg-image"
      id="home"
      aria-label="hero"
      data-section
      style={{ backgroundImage: `url(${Bg_Image})` }}
    >
      <div className="container">
        <div className="hero-content">
          <MyComponentHeroSubtitle className="hero-subtitle">
            <strong className="strong">The Best</strong>Fitness Club
          </MyComponentHeroSubtitle>

          <MyComponentTitle className="h1 hero-title">Work Hard To Get Better Life</MyComponentTitle>

          <MyComponentTextP className="section-text">
            Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi,
            a faucibus nisi eleifend eu.
          </MyComponentTextP>

          <button className="btn btn-primary">
            Get Started
          </button>
        </div>
        <div className="hero-banner">
          <img
            src={Hero_1}
            alt="hero banner"
            className="w-100"
          />

          <img
            src={Hero_2}
            width="666"
            height="666"
            aria-hidden="true"
            alt=""
            className="circle circle-1"
          />
          <img
            src={Hero_3}
            width="666"
            height="666"
            aria-hidden="true"
            alt=""
            className="circle circle-2"
          />
        </div>
      </div>
    </section>
  );
}
