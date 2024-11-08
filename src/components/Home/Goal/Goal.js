import "./Goal.css";
import Heading from "../../Heading/Heading";
import classOne from "../../../img/class-one.jpg";
import Components from "../../../Style/Components/Components";
import Goal_1 from "../../../img/hero-bg.png";
import Goal_3 from "../../../img/class-i-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Goal() {
  const { MyComponentHeroSubtitleH3 } = Components();
  return (
    <section
      className="section top has-bg-image"
      id="goal"
      aria-label="class"
      style={{ backgroundImage: `url(${Goal_1})` }}
    >
      <div className="container" style={{ position: "relative" }}>
        <Heading
          title="Our Classes"
          subTitle="Fitness Classes For Every Goal"
        />
        <ul className="class-list has-scrollbar">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            loop={true}
            spaceBetween={50}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <li className="scrollbar-item">
                <div className="class-card">
                  <figure className="card-banner img-holder">
                    <img
                      src={classOne}
                      width="416"
                      height="240"
                      loading="lazy"
                      alt="Cardio & Strenght"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="title-wrapper">
                      <img
                        src={Goal_3}
                        width="52"
                        height="52"
                        aria-hidden="true"
                        alt=""
                        className="title-icon"
                      />

                      <MyComponentHeroSubtitleH3 className="h3">
                        <a href="index" className="card-title">
                          Goal Title
                        </a>
                      </MyComponentHeroSubtitleH3>
                    </div>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="scrollbar-item">
                <div className="class-card">
                  <figure className="card-banner img-holder">
                    <img
                      src={classOne}
                      width="416"
                      height="240"
                      loading="lazy"
                      alt="Cardio & Strenght"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="title-wrapper">
                      <img
                        src={Goal_3}
                        width="52"
                        height="52"
                        aria-hidden="true"
                        alt=""
                        className="title-icon"
                      />

                      <MyComponentHeroSubtitleH3 className="h3">
                        <a href="index" className="card-title">
                          Goal Title
                        </a>
                      </MyComponentHeroSubtitleH3>
                    </div>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="scrollbar-item">
                <div className="class-card">
                  <figure className="card-banner img-holder">
                    <img
                      src={classOne}
                      width="416"
                      height="240"
                      loading="lazy"
                      alt="Cardio & Strenght"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="title-wrapper">
                      <img
                        src={Goal_3}
                        width="52"
                        height="52"
                        aria-hidden="true"
                        alt=""
                        className="title-icon"
                      />

                      <MyComponentHeroSubtitleH3 className="h3">
                        <a href="index" className="card-title">
                          Goal Title
                        </a>
                      </MyComponentHeroSubtitleH3>
                    </div>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="scrollbar-item">
                <div className="class-card">
                  <figure className="card-banner img-holder">
                    <img
                      src={classOne}
                      width="416"
                      height="240"
                      loading="lazy"
                      alt="Cardio & Strenght"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="title-wrapper">
                      <img
                        src={Goal_3}
                        width="52"
                        height="52"
                        aria-hidden="true"
                        alt=""
                        className="title-icon"
                      />

                      <MyComponentHeroSubtitleH3 className="h3">
                        <a href="index" className="card-title">
                          Goal Title
                        </a>
                      </MyComponentHeroSubtitleH3>
                    </div>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="scrollbar-item">
                <div className="class-card">
                  <figure className="card-banner img-holder">
                    <img
                      src={classOne}
                      width="416"
                      height="240"
                      loading="lazy"
                      alt="Cardio & Strenght"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="title-wrapper">
                      <img
                        src={Goal_3}
                        width="52"
                        height="52"
                        aria-hidden="true"
                        alt=""
                        className="title-icon"
                      />

                      <MyComponentHeroSubtitleH3 className="h3">
                        <a href="index" className="card-title">
                          Goal Title
                        </a>
                      </MyComponentHeroSubtitleH3>
                    </div>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
                  </div>
                </div>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </section>
  );
}