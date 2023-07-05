import React from "react";
import Link from "next/link";
import intro5Data from "../../data/sections/intro5.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
SwiperCore.use([Navigation, Pagination, Parallax]);

const Intro5 = ({ bgImage }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    removeSlashFromPagination();
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header id="arch-slider" className="slider arch-slider mt-100">
      <div className="swiper-container parallax-slider" id="novedades">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {intro5Data.map((slide, index) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center mt-30">
                          <h1
                            className="color-font"
                            style={{
                              fontStyle: "italic",
                              textAlign: "center",
                            }}
                          >
                            {slide.title.first}
                          </h1>
                          {slide?.title.second && (
                            <p
                              style={{
                                fontStyle: "italic",
                              }}
                            >
                              {slide.title.second}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1></h1>
                  <h2></h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="social-icon">
          <a
            href="https://www.facebook.com/comunaloscedros"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/comunaloscedros"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/comunaloscedros/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@comunaloscedros"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.tiktok.com/@comunaloscedros/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Intro5;
