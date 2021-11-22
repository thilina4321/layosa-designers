import React, { Fragment, useEffect } from "react";
import CardsFooter from "./examples/CardsFooter.js";
import DemoNavbar from "./examples/DemoNavbar.js";
import WorkProfile from "./examples/WorkProfile.js";

const OurWorks = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);
  return (
    <Fragment>
      <DemoNavbar />
      <WorkProfile />
      <CardsFooter />
    </Fragment>
  );
};

export default OurWorks;
