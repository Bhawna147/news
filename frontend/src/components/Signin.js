import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { createNotification } from "../Notification";
axios.defaults.withCredentials = true;

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        NewsNation
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Signin() {
  document.title = "SignIn";

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  //   const History = useHistory();
  const HandleSubmit = (event) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_ADDRESS}/login`, {
        data: {
          userName: userName,
          password: password,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          sessionStorage.setItem("LoggedIn", true);
          sessionStorage.setItem("isAdmin", res.data.admin);
          History.push(-1);
        } else {
          setUserName("");
          setPassword("");
          //   createNotification(res.data.err, "error", 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main">
        {/* <CssBaseline /> */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={2}
          style={{ margin: " 5% auto 5% auto" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar style={{ background: "#08CCD9", margin: 10 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                autoFocus
                value={userName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />

              <Button
                fullWidth
                variant="contained"
                onClick={HandleSubmit}
                id="signin-btn"
                style={{
                  background: "#08CCD9",
                  display: "block",
                  margin: "30px auto 30px auto",
                  width: "50%",
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    variant="body2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      History.push("/signup");
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright style={{ marginTop: 30 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
