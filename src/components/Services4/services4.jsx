import React from "react";
import featuresData from "../../data/sections/features.json";

const Services4 = ({ serviceMB50 }) => {
  return (
    <section className="services box section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow color-font">
                Habla directamente con los responsables por WhatsApp
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          {featuresData.map((item, index) => (
            <div
              className="col-lg-4 wow fadeInLeft mt-50"
              data-wow-delay={index == 0 ? ".5s" : index == 1 ? ".7s" : ".9s"}
              key={item.id}
            >
              <div
                className={`item-box no-curve ${
                  serviceMB50 && index + 1 != featuresData.length - 1
                    ? "mb-50"
                    : ""
                }`}
              >
                <span className={`icon color-font ${item.icon}`}></span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
                <p>{item.phone}</p>
                <a
                  className="butn bord curve mt-30"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://api.whatsapp.com/send?phone=${item.phone}`}
                >
                  Como llegar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services4;
