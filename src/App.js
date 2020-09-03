import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import FormUserDetails from "./Components/FormUserDetails";
import Success from "./Components/Success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Container maxWidth="sm">
    <Router>
      <Switch>
        <Route path="/">
          <FormUserDetails />
        </Route>
        <Route path="/login-successful">
          <Success />
        </Route>
      </Switch>
    </Router>
  </Container>
);

export default App;
