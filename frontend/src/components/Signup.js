import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import "./sign.css";
import { useNavigate } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { InputLabel } from "@material-ui/core";

const theme = createTheme();

export default function Signup() {
  const Axios = useAxiosPrivate();
  const navigate = useNavigate();
  document.title = "SignUp";
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);
  const phoneChangeHandler = (e) => {
    if (e.target.value.length !== 10 || !/^[0-9]+$/.test(e.target.value)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      customer: {
        gender: formData.get("gender"),
        phone: formData.get("phone"),
        country: formData.get("country"),
        state: formData.get("state"),
        city: formData.get("city"),
      },
    };
    console.log(data);
    Axios.post(`/auth/register/`, {
      ...data,
    })
      .then((res) => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert("Sorry some error was caused");
        navigate("/signup");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main">
        <CssBaseline />

        <div className="home-button-box">
          <button className="home-button" onClick={() => navigate("/")}>
            <HomeIcon className="home-icon" style={{ fontSize: 20 }} />{" "}
            <span>Home</span>
          </button>
        </div>

        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={2}
          style={{ margin: "5% auto 50px auto" }}
        >
          <Box
            sx={{
              mx: 8,
              my: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ mb: 1, bgcolor: "secondary.main", background: "#08CCD9" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="first_name"
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="last_name"
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    required
                    id="gender"
                    label="Gender"
                    name="gender"
                    fullWidth
                  >
                    <MenuItem id="male" value={"M"}>
                      Male
                    </MenuItem>
                    <MenuItem id="female" value={"F"}>
                      Female
                    </MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    name="country"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    error={isPhoneValid}
                    onChange={phoneChangeHandler}
                    label="Phone Number"
                    type="phone"
                    id="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1, background: "#08CCD9" }}
                style={{
                  display: "block",
                  margin: "30px auto 30px auto",
                  width: "50%",
                }}
                id="signup-btn"
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    variant="body2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/signin");
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
