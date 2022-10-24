import React, { Fragment, useEffect, useRef } from "react";

// reactstrap components
import CardExampleCard from "./Card";

const WorkProfile = () => {
  const mainRef = useRef();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

  const cards = [
    {
      name:'Matthew',
      joined:'2015',
      description:'Matthew is a lead living in Nashville.',
      friends:'22'
    },
    {
      name:'Palo',
      joined:'2022',
      description:'Palo is a designer living in Colombo.',
      friends:'12'
    },
    {
      name:'Nooshine',
      joined:'2018',
      description:'Nooshine is a developer living in Australia',
      friends:'30'
    },
];

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
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "80%",
            margin: "auto",
            gap: "20px",
            marginTop : '-200px',
            justifyContent : 'center',
            alignItems: 'center'

          }}
        >
          {cards.map((card, index) => (
            <CardExampleCard 
            {...card}
            key={index} />
          ))}
        </section>
      </main>
    </Fragment>
  );
};

export default WorkProfile;
