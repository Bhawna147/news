import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import HomeIcon from "@mui/icons-material/Home";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";
// import { createNotification } from "../Notification";
import "./sign.css";

const theme = createTheme();

export default function Signin(props) {
  const { setAuth } = useAuth();
  const Axios = useAxiosPrivate();
  const navigate = useNavigate();
  document.title = "SignIn";

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  //   const History = useHistory();
  const HandleSubmit = (event) => {
    Axios.post(`/auth/jwt/create`, {
      username: username,
      password: password,
    })
      .then((resauth) => {
        sessionStorage.setItem("refresh_token", resauth.data.refresh);
        Axios.get("/api/customer/me", {
          headers: { Authorization: `JWT ${resauth.data.access}` },
        })
          .then((res) => {
            console.log(res.data);
            setAuth((prev) => {
              return { ...prev, user: res.data, access: resauth.data.access };
            });
          })
          .catch((err) => {
            console.log(err?.config);
            console.log(err.response);
          });
      })
      .catch((err) => {
        setUsername("");
        setPassword("");
        console.log(err.response.data);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main">
        {/* <CssBaseline /> */}

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
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                autoFocus
                value={username}
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
                      navigate("/signup");
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
