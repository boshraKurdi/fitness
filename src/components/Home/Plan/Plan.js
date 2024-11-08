import "./Plan.css";
import Plan_1 from "../../../img/blog-two.jpg";
import Heading from "../../Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
export default function Plan() {
  return (
    <section className="section blog" id="plan" aria-label="blog">
      <div className="container" style={{ position: "relative" }}>
        <Heading title="Our Plans" subTitle="muscle" />
        <ul className="blog-list has-scrollbar">
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
           }}>
            <SwiperSlide
            >
              <li className="scrollbar-item">
                <div className="blog-card">
                  <div className="card-banner img-holder">
                    <img
                      src={Plan_1}
                      width="440"
                      height="270"
                      loading="lazy"
                      alt="Going to the gym for the first time"
                      className="img-cover"
                    />

                    <time className="card-meta">1 week</time>
                  </div>

                  <div className="card-content">
                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Plan Title
                      </Link>
                    </h3>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>

                    <Link to="#" className="btn-link has-before">
                      Read More
                    </Link>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide
             
            >
              <li className="scrollbar-item">
                <div className="blog-card">
                  <div className="card-banner img-holder">
                    <img
                      src={Plan_1}
                      width="440"
                      height="270"
                      loading="lazy"
                      alt="Going to the gym for the first time"
                      className="img-cover"
                    />

                    <time className="card-meta">1 week</time>
                  </div>

                  <div className="card-content">
                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Plan Title
                      </Link>
                    </h3>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>

                    <Link to="#" className="btn-link has-before">
                      Read More
                    </Link>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide
             
            >
              <li className="scrollbar-item">
                <div className="blog-card">
                  <div className="card-banner img-holder">
                    <img
                      src={Plan_1}
                      width="440"
                      height="270"
                      loading="lazy"
                      alt="Going to the gym for the first time"
                      className="img-cover"
                    />

                    <time className="card-meta">1 week</time>
                  </div>

                  <div className="card-content">
                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Plan Title
                      </Link>
                    </h3>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>

                    <Link to="#" className="btn-link has-before">
                      Read More
                    </Link>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide
              
            >
              <li className="scrollbar-item">
                <div className="blog-card">
                  <div className="card-banner img-holder">
                    <img
                      src={Plan_1}
                      width="440"
                      height="270"
                      loading="lazy"
                      alt="Going to the gym for the first time"
                      className="img-cover"
                    />

                    <time className="card-meta">1 week</time>
                  </div>

                  <div className="card-content">
                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Plan Title
                      </Link>
                    </h3>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>

                    <Link to="#" className="btn-link has-before">
                      Read More
                    </Link>
                  </div>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide
             
            >
              <li className="scrollbar-item">
                <div className="blog-card">
                  <div className="card-banner img-holder">
                    <img
                      src={Plan_1}
                      width="440"
                      height="270"
                      loading="lazy"
                      alt="Going to the gym for the first time"
                      className="img-cover"
                    />

                    <time className="card-meta">1 week</time>
                  </div>

                  <div className="card-content">
                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Plan Title
                      </Link>
                    </h3>

                    <p className="card-text">Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>

                    <Link to="#" className="btn-link has-before">
                      Read More
                    </Link>
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
