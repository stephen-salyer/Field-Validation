import React, { Component } from "react";
// import Success from "./Success";
import { FormUserDetails } from "./FormUserDetails";

export class Fields extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password } = this.state;
    const values = { firstName, lastName, email, password };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            handleChange={this.handleChange}
            values={values}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return <h1>Success</h1>;
    }
  }
}

export default Fields;
