import React from "react";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StoreIcon from "@mui/icons-material/Store";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),

    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function AppBarrs() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Grid container xs={12} sx={{ height: "80px", bgcolor: "blue" }}>
            <Grid
              container
              item
              xs={6}
              sx={{ color: "white", alignItems: "center" }}
            >
              <Grid
                item
                xs={2}
                xl={1}
                sx={{ marginLeft: { xs: "10px", xl: "5px" } }}
              >
                <StoreIcon />
              </Grid>
              <Grid item xs={2} xl={1}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontSize: "20px",
                    marginLeft: { xs: "20px", xl: "5px" },
                  }}
                >
                  EKART
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              item
              xs={6}
              sx={{
                color: "white",
                alignItems: "center",
                justifyContent: "flex-end",
                display: { xs: "none", xl: "flex" },
              }}
            >
              <Grid item xs={8} sx={{ display: "flex" }}>
                <Grid item xs={2} sx={{ display: "flex" }}>
                  <HomeIcon />
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h1"
                      component="h2"
                      sx={{ color: "white", fontSize: "18px" }}
                    >
                      HOME
                    </Typography>
                  </NavLink>
                </Grid>
                <Grid item xs={2} sx={{ display: "flex" }}>
                  <StorefrontIcon />
                  <NavLink to="/ShopPage" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h1"
                      component="h2"
                      sx={{ color: "white", fontSize: "18px" }}
                    >
                      SHOP
                    </Typography>
                  </NavLink>
                </Grid>
                <Grid item xs={2} sx={{ display: "flex" }}>
                  <ShoppingCartIcon />
                  <NavLink to="/CartPage" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h1"
                      component="h2"
                      sx={{ color: "white", fontSize: "18px" }}
                    >
                      CART
                    </Typography>
                  </NavLink>
                </Grid>
                <Grid item xs={2} sx={{ display: "flex" }}>
                  <AccountCircleIcon />
                  <NavLink to="/LoginPage" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h1"
                      component="h2"
                      sx={{ color: "white", fontSize: "18px" }}
                    >
                      LOGIN
                    </Typography>
                  </NavLink>
                </Grid>
                <Grid item xs={2} sx={{ display: "flex" }}>
                  <PersonAddIcon />
                  <NavLink to="/SignupPage" style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h1"
                      component="h2"
                      sx={{ color: "white", fontSize: "18px" }}
                    >
                      SIGNUP
                    </Typography>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ display: { xs: "flex", md: "none" }, marginLeft: "100px" }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Grid
          container
          item
          xs={6}
          sx={{
            color: "white",
            alignItems: "center",
            justifyContent: "flex-end",
            display: { xs: "flex", xl: "none" },
          }}
        >
          <Grid item xs={7}>
            <Grid item xs={2} sx={{ display: "flex" }}>
              <HomeIcon />
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{ color: "black", fontSize: "18px" }}
                >
                  HOME
                </Typography>
              </NavLink>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex" }}>
              <StorefrontIcon />
              <NavLink to="/ShopPage" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{ color: "black", fontSize: "18px" }}
                >
                  SHOP
                </Typography>
              </NavLink>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex" }}>
              <ShoppingCartIcon />
              <NavLink to="/CartPage" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{ color: "black", fontSize: "18px" }}
                >
                  CART
                </Typography>
              </NavLink>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex" }}>
              <AccountCircleIcon />
              <NavLink to="/LoginPage" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{ color: "black", fontSize: "18px" }}
                >
                  LOGIN
                </Typography>
              </NavLink>
            </Grid>
            <Grid item xs={2} sx={{ display: "flex" }}>
              <PersonAddIcon />
              <NavLink to="/SignupPage" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{ color: "black", fontSize: "18px" }}
                >
                  SIGNUP
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}
