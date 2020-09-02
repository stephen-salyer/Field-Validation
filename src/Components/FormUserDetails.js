import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Card,
} from "@material-ui/core";

// Andrew Maxwell co-owner

const emailRegex = /^[a-z0-9-._+]+@[a-z0-9]+[a-z0-9-._+]+[a-z]{2,5}$/i;

const loginFields = [
  {
    id: "firstName",
    size: 6,
    label: "First Name",
    type: "text",
    validate: (str) => {
      if (!str) return "Please enter your first name.";
      if (str.length < 3) return "3 or more characters please";
    },
  },
  {
    id: "lastName",
    size: 6,
    label: "Last Name",
    type: "text",
    validate: (str) => {
      if (!str) return "Please enter your last name.";
      if (str.length < 3) return "3 or more characters please";
    },
  },
  {
    id: "email",
    size: 12,
    label: "Email",
    type: "email",
    validate: (str) => {
      if (!emailRegex.test(str)) return "Please enter a valid email";
    },
  },
  {
    id: "password",
    size: 12,
    label: "Password",
    type: "password",
    validate: (str) => {
      if (str.length < 6) return "6 or more characters please";
    },
  },
];

const FormUserDetails = () => {
  const [state, setState] = React.useState(
    Object.fromEntries(loginFields.map(({ id }) => [id, { value: "" }]))
  );

  const runAllValidators = () => {
    setState((state) =>
      loginFields.reduce(
        (newState, { id, validate }) => ({
          ...newState,
          [id]: { ...newState[id], error: validate(newState[id].value) },
        }),
        state
      )
    );
  };

  const handleSubmit = () => {
    runAllValidators();
    if (loginFields.some(({ id }) => state[id].error)) {
      console.log("Fix the errors!");
      return;
    }

    console.log("Do something with the data", state);
    // change route to some other page?
  };

  return (
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
          <Grid container spacing={3}>
            {loginFields.map(
              ({ label, size, type, id, validate = () => "" }, i) => {
                const { value, error } = state[id];
                return (
                  <Grid item xs={12} lg={size} key={i}>
                    <TextField
                      fullWidth
                      id={id}
                      label={label}
                      placeholder={label}
                      variant="outlined"
                      type={type}
                      value={value}
                      error={!!error}
                      helperText={error}
                      onBlur={() => {
                        const field = { value, error: validate(value) };
                        setState((state) => ({ ...state, [id]: field }));
                      }}
                      onChange={(e) => {
                        const field = {
                          value: e.target.value,
                          error: error ? validate(e.target.value) : error,
                        };
                        setState((state) => ({ ...state, [id]: field }));
                      }}
                    />
                  </Grid>
                );
              }
            )}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
                size="large"
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography color="textSecondary">
                  Already have an account?
                </Typography>
                <Button color="primary" size="small">
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default FormUserDetails;
