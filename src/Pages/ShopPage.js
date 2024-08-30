import React, { useState } from "react";
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
function ShopPage() {
  const [age, setAge] = useState("");
  const [selectedValue, setSelectedValue] = useState("Any");
  const [enabled, setEnabled] = useState(false);

  const BestSellData = [
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70",
      Product: "vivo T2x 5G",
      Price: "60,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/h/7/-original-imaghx9qaepzajta.jpeg?q=70",
      Product: "Apple Iphone",
      Price: "90,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70",
      Product: "Apple Iphone 15",
      Price: "70,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/i/m/g24-pb1c0001in-motorola-original-imagxm3bhyh7ywnr.jpeg?q=70",
      Product: "Motorola",
      Price: "15,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/r/b/nord-ce-3-lite-5g-ce2099-oneplus-original-imagzj42cctpjjze.jpeg?q=70",
      Product: "realme C53",
      Price: "10,499",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/e/f/-original-imagymhw8g7tdyhk.jpeg?q=70",
      Product: "realme ",
      Price: "19,499",
      Button: "ADD TO CART",
    },
  ];

  const [filteredData, setFilteredData] = useState(BestSellData);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    setEnabled(true);
    filterProducts(event.target.value);
  };

  const filterProducts = (priceRange) => {
    const filteredProducts = BestSellData.filter((item) => {
      const price = parseInt(item.Price.replace(/,/g, ""));
      switch (priceRange) {
        case "Any":
          return true;
        case "0 to 9000":
          return price >= 0 && price <= 9000;
        case "10000 to 19000":
          return price >= 10000 && price <= 19000;
        case "20000 to 29000":
          return price >= 20000 && price <= 29000;
        case "30000 to 39000":
          return price >= 30000 && price <= 39000;
        case "More than 40":
          return price > 40000;
        default:
          return true;
      }
    });
    setFilteredData(filteredProducts);
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
            Shop page
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
            }}
          >
            Search and find books
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sx={{
          justifyContent: "center",
          display: { xs: "flex", xl: "none" },
          marginTop: "50px",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            alignItems: "center",
            width: 1000,
            bgcolor: "#f8f9fa",
            margin: "0 20px 0 20px",
          }}
        >
          <Grid
            item
            xs={9}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "10px",
            }}
          >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                label="Age"
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={10}>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by name"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Grid>

          <Grid
            item
            xs={5}
            sx={{
              marginBottom: "8px",
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "22px",
            }}
          >
            <Button variant="contained">SEARCH</Button>
          </Grid>
        </Paper>
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={12} md={3}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: "25px",
                textAlign: "left",
                margin: "100px 0 0 15px",
              }}
            >
              Filter by categories
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: "25px",
                textAlign: "left",
                margin: "0px 0 200px 15px",
              }}
            >
              Filter by price range
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "85px",
            }}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue}
                onChange={handleRadioChange}
                disabled={!enabled}
              >
                <FormControlLabel value="Any" control={<Radio />} label="Any" />
                <FormControlLabel
                  value="0 to 9000"
                  control={<Radio />}
                  label="0 to 9000"
                />
                <FormControlLabel
                  value="10000 to 19000"
                  control={<Radio />}
                  label="10000 to 19000"
                />
                <FormControlLabel
                  value="20000 to 29000"
                  control={<Radio />}
                  label="20000 to 29000"
                />
                <FormControlLabel
                  value="30000 to 39000"
                  control={<Radio />}
                  label="30000 to 39000"
                />
                <FormControlLabel
                  value="More than 40"
                  control={<Radio />}
                  label="More than 40"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={9}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontSize: "40px",
                textAlign: "left",
                fontStyle: "bold",
                margin: "90px 0 0 5px",
              }}
            >
              Products
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid  black",
              margin: "0 20px 180px 0",
              height: "0",
            }}
          ></Grid>
          <Grid container item xs={12}>
            {filteredData.map((item) => (
              <SellingData
                image={item.Image}
                product={item.Product}
                price={item.Price}
                button={item.Button}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function SellingData(Props) {
  return (
    <Grid container item xs={12} md={4} sx={{ marginBottom: "40px" }}>
      <Grid item xs={12}>
        <img src={Props.image} alt="not found" />
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize: "30px", marginTop: "40px" }}
        >
          {Props.product}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h1" component="h2" sx={{ fontSize: "30px" }}>
          {Props.price}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained">{Props.button}</Button>
      </Grid>
    </Grid>
  );
}

export default ShopPage;
