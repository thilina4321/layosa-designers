import React, { Fragment, useEffect, useRef } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
import me from "../../assets/img/layosa.jpg";
import CardExampleCard from "./Card";

const WorkProfile = () => {
  const mainRef = useRef();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

  const cards = [1, 1, 2, 3];

  return (
    <Fragment>
      <main className="profile-page" ref={mainRef}>
        <section className="section-profile-cover section pb-0 bg-gradient-warning">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4"></div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section
          className="mt--300"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "80%",
            margin: "auto",
            gap: "20px",
          }}
        >
          {cards.map((card, index) => (
            <CardExampleCard key={index} />
          ))}
        </section>
      </main>
    </Fragment>
  );
};

export default WorkProfile;
