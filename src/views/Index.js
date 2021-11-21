import React, { Fragment, useEffect } from "react";
import DemoNavbar from "./examples/DemoNavbar.js";
import Landing from "./examples/Landing.js";
import Profile from "./examples/Profile.js";

const Index = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);
  return (
    <Fragment>
      <DemoNavbar />
      <Profile />
      <Landing />
    </Fragment>
  );
};

export default Index;
