import { Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

function SignUpPage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid container xs={12}>
      <Grid
        container
        item
        xs={12}
        sx={{
          textAlign: "left",
          paddingLeft: "30px",
          height: "200px",
          bgcolor: "green",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: "30px", paddingTop: "100px", color: "white" }}
          >
            Signup page
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: "18px",
              paddingBottom: "70px",
              fontWeight: "lighter",
              color: "white",
              paddingTop: "10px",
            }}
          >
            Signup to MERN E-commerce App
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{ justifyContent: "center", marginTop: "70px" }}
      >
        <Grid item xs={12}>
          <LockOutlinedIcon
            sx={{
              borderRadius: "25px",
              height: "30px",
              width: "30px",
              bgcolor: "red",
              color: "white",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: "27px",
              marginTop: "8px",
            }}
          >
            Sign up
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: "25px" }}>
          <TextField
            id="outlined-basic"
            label="Full Name*"
            variant="outlined"
            sx={{ width: { xs: "350px", md: "400px" } }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginTop: "25px" }}>
          <TextField
            id="outlined-basic"
            label="Email Address*"
            variant="outlined"
            sx={{ width: { xs: "350px", md: "400px" } }}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "25px" }}>
          <TextField
            id="outlined-basic"
            label="Password*"
            variant="outlined"
            sx={{ width: { xs: "350px", md: "400px" } }}
          />
        </Grid>

        <Grid item xs={12} sx={{ marginTop: "22px" }}>
          <Button
            variant="contained"
            sx={{ width: { xs: "350px", md: "400px" }, fontSize: "15px" }}
          >
            SIGN UP
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0 0 175px",
          }}
        >
          <Link to="/LoginPage" style={{ textDecoration: "none" }}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                marginRight: "20px",
              }}
            >
              Already have an account? Login
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SignUpPage;
