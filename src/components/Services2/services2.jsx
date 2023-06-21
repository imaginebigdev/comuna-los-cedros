import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h5 className="wow color-font">
                Generamos espacios de interacción entre la sociedad y el Estado
                para articular la colaboración y participación ciudadana
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop ">
              <h6>Gobierno electrónico</h6>
              <ul className="text-left">
                <li>
                  <span>●</span> Rendicion de cuentas
                </li>
                <li>
                  <span>●</span> Transparencia en la gestion
                </li>
                <li>
                  <span>●</span> Dialogo con los vecinos
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <h6>Servicios</h6>
              <ul className="text-left">
                <li>
                  <span>●</span> Gestión de consulta Ciudadana
                </li>
                <li>
                  <span>●</span> Turnos Online
                </li>
                <li>
                  <span>●</span> Universidad Popular
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <h6>Novedades</h6>
              <ul className="text-left">
                <li>
                  <span>●</span> Noticias en Tiempo Real
                </li>
                <li>
                  <span>●</span> Información de los Eventos
                </li>
                <li>
                  <span>●</span> Transmisiones en Vivo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
