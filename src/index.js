import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

import Index from "../src/views/Index.js";
import Landing from "../src/views/examples/Landing.js";
import Login from "../src/views/examples/Login.js";
import Profile from "../src/views/examples/Profile.js";
import Register from "../src/views/examples/Register.js";
import "./assets/css/argon-design-system-react.css";
import TabsSection from "./views/examples/Tabs.js";
import OurWorks from "./views/OurWorks.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />

      <Route
        path="/our-works"
        exact
        render={(props) => <OurWorks {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
