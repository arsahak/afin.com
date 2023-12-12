import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Login from "./Login";
import LofinWithFb from "./LofinWithFb";

function Home() {
  return (
    <div>
      <Container>
        <Grid item xs={6} sx={{ marginTop: 10 }}>
          <Login />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: 15 }}>
          <LofinWithFb />
        </Grid>
      </Container>
    </div>
  );
}
export default Home;
