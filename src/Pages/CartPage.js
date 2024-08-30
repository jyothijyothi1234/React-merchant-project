import { Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function CartPage() {
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
            Shopping Cart
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: "19px",
              paddingBottom: "70px",
              fontWeight: "lighter",
              color: "white",
            }}
          >
            Manage your cart items. Add remove checkout or continue shopping.
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: "30px",
                marginTop: "35px",
                textAlign: "left",
                justifyContent: "center",
                display: "flex",
                marginRight: { xs: "140px", md: "0" },
              }}
            >
              Your cart is empty.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Link to="/ShopPage" style={{ textDecoration: "none" }}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "30px",
                  marginTop: "1px",
                  textAlign: "left",
                  justifyContent: "center",
                  display: "flex",
                  marginRight: { xs: "130px", md: "0" },
                }}
              >
                Continue Shopping
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: "30px",
                textAlign: "left",
                fontStyle: "bold",
                margin: "25px 0 22px 5px",
              }}
            >
              Your cart summary
            </Typography>

            <Grid
              item
              xs={12}
              sx={{
                width: "500px",
                border: "1px solid black",
                height: "0px",
                marginRight: "20px",
              }}
            >
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "30px",
                  textAlign: "left",
                  fontStyle: "bold",
                  margin: "25px 0 0 5px",
                }}
              >
                Total: $0
              </Typography>

              <Link to="/LoginPage" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "20px",
                    marginLeft: { xs: "10px", md: "0" },
                  }}
                >
                  LOGIN TO CHECKOUT
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CartPage;
