import React from "react";
import Header from "../../common/header/Header";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Header />

        <div className="container">
          <div className="row">
            <Heading subtitle="CourseLine" title="Online Education" />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                SIGN UP <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
