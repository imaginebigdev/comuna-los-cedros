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
                  <img src="/img/blog/01.jpg" alt="" />
                </Link>
              </div>
              <div className="cont valign">
                <div>
                  <h5>Escuela de fútbol</h5>
                  <p>Miércoles y viernes de 16.30 a 18.30</p>
                  <p style={{ fontStyle: "italic" }}>GRATIS</p>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="/img/blog/03.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <h5>Adultos mayores</h5>
                  <Link href="https://api.whatsapp.com/send?phone=3515525738">
                    <a style={{ fontStyle: "italic" }}>¡CONSULTAR!</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/02.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <h5>Humor y folclore</h5>
                  <p>Artistas invitados Y la mejor música</p>
                  <p style={{ fontStyle: "italic" }}>Febrero 2023</p>
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
