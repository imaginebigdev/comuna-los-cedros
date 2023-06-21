/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutUs4 = () => {
  console.clear();
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/intro/4.jpg" alt="" />
          </div>
          <div className="col-lg-4 valign">
            <div className="cont full-width">
              <h2 className="color-font">
                Festival De Humor y Folclore. Febrero2023
              </h2>
              <br />
              <p>
                Vení a disfrutar de un evento para toda la familia. Con artistas
                invitados, la mejor música y toda nuestra tradición. Te
                esperamos!
              </p>
              <Link href="/cultura">
                <a
                  className="butn bord curve mt-30"
                  target="_blank"
                  rel="noreferrer"
                >
                  Quiero saber más
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
