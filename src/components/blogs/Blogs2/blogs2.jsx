/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Ultimas noticias</h6>
              <h3>Novedades</h3>
              <p>Eventos y noticias sobre Comuna los Cedros.</p>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <Link href="" passHref>
                  <img src="/img/blog/1.jpg" alt="" />
                </Link>
              </div>
              <div className="cont valign">
                <div>
                  <h5>
                    <Link href="">
                      <a>Escuela de fútbol</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <Link href="" passHref>
                  <img src="/img/blog/2.jpg" alt="" />
                </Link>
              </div>
              <div className="cont valign">
                <div>
                  <h5>
                    <Link href="">
                      <a>Adultos mayores.</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <Link href="" passHref>
                  <img src="/img/blog/3.jpg" alt="" />
                </Link>
              </div>
              <div className="cont valign">
                <div>
                  <h5>
                    <Link href="">
                      <a>Humor y folclore.</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
