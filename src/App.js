import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import FormUserDetails from "./Components/FormUserDetails";

const App = () => (
  <Container maxWidth="sm">
    <FormUserDetails />
  </Container>
);

export default App;
