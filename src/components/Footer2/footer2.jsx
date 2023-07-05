import Link from "next/dist/client/link";
import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Contactanos</h5>
              <ul>
                <li>
                  <a>+54 9 351 552 5738</a>
                </li>
                <li>
                  <a>web@comunaloscedros.ar</a>
                </li>
                <li>
                  <p>Av. Eduardo F. Luppi esquina Hector Llorens.</p>
                  <p> Los Cedros – Cordoba Argentina</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Servicios</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://api.whatsapp.com/send?phone=3515525738">
                    Atención Ciudadana
                  </a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://api.whatsapp.com/send?phone=3515525738">
                    Universidad Popular
                  </a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://api.whatsapp.com/send?phone=3515525738">
                    Club Social
                  </a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="https://api.whatsapp.com/send?phone=3515525738">
                    Turno Online
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6"></div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links">
              <h5 className="title mb-30">Redes Sociales</h5>
              <div className="logo" style={{ width: "200px" }}>
                <img src="/img/logo-loscedros-b.png" alt="" />
              </div>
              <div className="social mt-30">
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
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>
                  © 2023 Comuna los Cedros. Hecho con pasión por{" "}
                  <Link href="https://www.imaginebig.dev/">
                    <a target="_blank" style={{ color: "#9913b6" }}>
                      Imagine Big
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
