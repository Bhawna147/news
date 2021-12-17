import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Axios from "axios";
import { useHistory } from "react-router";
import "./sign.css";

Axios.defaults.withCredentials = true;

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        NewsNation
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  document.title = "SignUp";

  const [gender, setGender] = React.useState("Male");
  const [profession, setProfession] = React.useState("Student");
  //   const History = useHistory();
  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };
  const professionChangeHandler = (event) => {
    setProfession(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const data = {
      name: formData.get("name"),
      username: formData.get("username"),
      gender: formData.get("gender"),
      country: formData.get("country"),
      state: formData.get("state"),
      city: formData.get("city"),
      profession: formData.get("profession"),
      institute: formData.get("institute"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    Axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/signup`, {
      data: { ...data },
    })
      .then((res) => {
        if (res.data.success === true) {
          sessionStorage.setItem("LoggedIn", true);
          History.push(-1);
        } else {
          alert(res.data.err);
        }
      })
      .catch((err) => {
        console.log(err);
        History.push("/");
      });
  };

  return (
    <ThemeProvider theme={theme}>



      <Grid container component="main">
        <CssBaseline />

        <div className="home-button-box" >
        <button className="home-button">
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
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Select
                    id="gender"
                    value={gender}
                    name="gender"
                    fullWidth
                    onChange={genderChangeHandler}
                  >
                    <MenuItem id="male" value={"Male"}>
                      Male
                    </MenuItem>
                    <MenuItem id="female" value={"Female"}>
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
                      History.push("/login");
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
