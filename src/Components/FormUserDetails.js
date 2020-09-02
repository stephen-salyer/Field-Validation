import React, { Component } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Card,
} from "@material-ui/core";

const loginFields = [
  {
    id: "firstName",
    size: 6,
    name: "firstName",
    label: "First Name",
    placeholder: "First Name",
  },
  {
    id: "lastName",
    size: 6,
    name: "lastName",
    label: "Last Name",
    placeholder: "Last Name",
  },
  {
    id: "email",
    size: 12,
    name: "email",
    label: "Email",
    placeholder: "Email",
  },
  {
    id: "password",
    size: 12,
    name: "password",
    label: "Password",
    placeholder: "Password",
  },
];

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {};
    {
      this.state.username.length < 3
        ? (isError = true)
        : (errors.usersnameError = "error User Name");
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors,
      });
    }
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ height: "100vh" }}
        >
          <Card>
            <Box p={3}>
              <Box pb={3}>
                <Typography variant="h4" style={{ fontWeight: 300 }}>
                  Create Account
                </Typography>
              </Box>
              <form onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                  {loginFields.map(({ label, size, placeholder, id }, i) => (
                    <Grid item xs={12} lg={size} key={i}>
                      <TextField
                        fullWidth
                        id={id}
                        values={values.id}
                        label={label}
                        onChange={handleChange(id)}
                        placeHolder={placeholder}
                        variant="outlined"
                        defaultValue={values.id}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ width: "100%" }}
                      size="large"
                      onClick={this.continue}
                    >
                      Sign up
                    </Button>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography color="textSecondary">
                        Already have an account?
                      </Typography>
                      <Button color="primary">Login</Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Card>
        </Box>
      </>
    );
  }
}

export default FormUserDetails;
