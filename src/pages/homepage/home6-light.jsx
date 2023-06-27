import React from "react";
import Navbar from "../../components/Navbar/navbar";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import LightTheme from "../../layouts/Light";
import Services4 from "../../components/Services4/services4";
import AboutUs4 from "../../components/About-us4/about-us4";
import Intro5 from "../../components/Intro5/intro5";
import Footer2 from "../../components/Footer2/footer2";
import Services2 from "../../components/Services2/services2";
import RadioPlayer from "../../components/Radio/radio-player";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <RadioPlayer />
        <Services4 />
        <AboutUs4 />
        <Intro5 />

        <Blogs2 />
        <Intro5 />
        <Services2 />
        <Footer2 />
      </div>
    </LightTheme>
  );
};

export default Homepage1;
