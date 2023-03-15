import Footer from "@/components/footer/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const RootLayout = () => {
  return (
    <Grid bg={"#323638"} color={"#fff"} fontWeight={600}>
      <GridItem as={"header"} h={{ base: "90px" }}>
        <Header />
      </GridItem>

      <GridItem as="main" minHeight={"100dvh"}>
        <Outlet />
      </GridItem>

      <GridItem as="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
