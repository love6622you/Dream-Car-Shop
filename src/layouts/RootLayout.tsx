import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const RootLayout = () => {
  return (
    <Grid bg={"#323638"} color={"#E8E6E3"} fontWeight={600}>
      <GridItem>
        <Header />
      </GridItem>

      <GridItem as="main" minHeight={"100dvh"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
