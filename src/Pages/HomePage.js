import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
function HomePage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const NewArriveData = [
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/a/m/-original-imagwzrj7tytaakg.jpeg?q=70",
      Product: "vivo T2x 5G",
      Price: "50,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/2/b/galaxy-f54-5g-sm-e546bdbhins-samsung-original-imagq79fjhhcb6u2.jpeg?q=70",
      Product: "vivo T2x ",
      Price: "40,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70",
      Product: "Motorola",
      Price: "20,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/e/3/g84-5g-paym0018in-motorola-original-imagsy5zmhvkcfsx.jpeg?q=70",
      Product: "Apple Iphone",
      Price: "60,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70",
      Product: "realme C53",
      Price: "10,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70",
      Product: "realme ",
      Price: "15,000",
      Button: "ADD TO CART",
    },
  ];

  const BestSellData = [
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
      Product: "Apple Iphone 10",
      Price: "50,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70",
      Product: "vivo ",
      Price: "40,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/y/g34-5g-pb1v0000in-motorola-original-imagwu4s8naevwyq.jpeg?q=70",
      Product: "redmi note 13 pro",
      Price: "20,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/i/m/g24-pb1c0001in-motorola-original-imagxm3bhyh7ywnr.jpeg?q=70",
      Product: "Apple Iphone 14",
      Price: "60,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70",
      Product: "POCO X6",
      Price: "10,000",
      Button: "ADD TO CART",
    },
    {
      Image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/q/d/-original-imagtc4hzawdcp4g.jpeg?q=70",
      Product: "POCO M6 Pro",
      Price: "15,000",
      Button: "ADD TO CART",
    },
  ];
  const [filtered, setFiltered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();

    const filteredNewArrivals = NewArriveData.filter((item) =>
      item.Product.toLowerCase().includes(query)
    );

    const filteredBestSellers = BestSellData.filter((item) =>
      item.Product.toLowerCase().includes(query)
    );

    const combinedFilteredData = [
      ...filteredNewArrivals,
      ...filteredBestSellers,
    ];

    setFilteredProducts(combinedFilteredData);
    setFiltered(true);
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
            Home page
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: "18px",
              // paddingBottom: "70px",
              fontWeight: "lighter",
              color: "white",
              padding: "10px 0 80px 0",
            }}
          >
            MERN E-commerce App
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{
          marginTop: "50px",
          justifyContent: "center",
          display: { xs: "none", xl: "flex" },
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 1000,
            bgcolor: "#f8f9fa",
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
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
            </Select>
          </FormControl>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by name"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
          <Button variant="contained" onClick={handleSearch}>
            SEARCH
          </Button>
        </Paper>
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
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={10}>
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by name"
              inputProps={{ "aria-label": "search google maps" }}
              onChange={(event) => setSearchQuery(event.target.value)}
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
            <Button variant="contained" onClick={handleSearch}>
              SEARCH
            </Button>
          </Grid>
        </Paper>
      </Grid>

      <Grid container item xs={12}>
        {filtered ? (
          <Grid
            container
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {filteredProducts.map((item, index) => (
              <SearchData
                Image={item.Image}
                product={item.Product}
                Price={item.Price}
                Button={item.Button}
              />
            ))}
          </Grid>
        ) : (
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "45px",
                  margin: "80px 0 80px 0",
                }}
              >
                New Arrivals
              </Typography>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {NewArriveData.map((item) => (
                <NewArrivalsData
                  Image={item.Image}
                  product={item.Product}
                  Price={item.Price}
                  Button={item.Button}
                />
              ))}
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "45px",
                  margin: "56px 0 80px 0",
                }}
              >
                Best Sellers
              </Typography>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {BestSellData.map((item, index) => (
                <BestSellersData
                  Image={item.Image}
                  product={item.Product}
                  Price={item.Price}
                  Button={item.Button}
                />
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

function NewArrivalsData(Props) {
  return (
    <Grid container item width="100%" xs={12} md={2}>
      <Grid item xs={12}>
        <img src={Props.Image} alt="not found" />
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
        <Typography sx={{ fontSize: "25px" }}>{Props.Price}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{ height: "50px", marginTop: "10px", marginBottom: "20px" }}
        >
          {Props.Button}
        </Button>
      </Grid>
    </Grid>
  );
}

function BestSellersData(Props) {
  return (
    <Grid container item xs={12} md={2} width="100%">
      <Grid item xs={12}>
        <img src={Props.Image} alt="not found" />
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
        <Typography sx={{ fontSize: "25px" }}>{Props.Price}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{ height: "50px", marginTop: "10px", marginBottom: "20px" }}
        >
          {Props.Button}
        </Button>
      </Grid>
    </Grid>
  );
}

function SearchData(Props) {
  return (
    <Grid
      container
      item
      xs={12}
      md={2}
      width="100%"
      sx={{ marginTop: "50px", width: "50%", overflow: "hidden" }}
    >
      <Grid item xs={12}>
        <img src={Props.Image} alt="not found" />
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
        <Typography sx={{ fontSize: "25px" }}>{Props.Price}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ height: "50px", marginTop: "10px" }}>
          {Props.Button}
        </Button>
      </Grid>
    </Grid>
  );
}

export default HomePage;
