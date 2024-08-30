import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CopyRightPage() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ display: "flex", justifyContent: "center", paddingTop: "120px" }}
    >
      <Typography
        variant="h1"
        component="h2"
        style={{
          fontWeight: "lighter",
          color: "#666",
          fontSize: "15px",
        }}
      >
        Copyright &copy; JL 2024.
      </Typography>
    </Grid>
  );
}
