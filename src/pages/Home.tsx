import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Hero from "./home/Hero";

import Features from "./home/Features";
import Comments from "./home/Comments";
import FAQ from "./home/FAQ";
import CarList from "./home/CarList";

const Home = () => {
  const Desc = () => {
    return (
      <Box pb={10} display={{ base: "none", lg: "block" }}>
        <Heading fontSize={"3xl"} textAlign={"center"} my={"6"}>
          Rent Your Dream Car
        </Heading>
        <Text>
          With a few clicks on your phone, you can have your dream car right at
          your doorstep. Lux Motors has quickly gained a reputation all across
          Dubai for having perfect timing and incredible condition cars. We are
          operating our luxury car rental services in Dubai since 29th July
          2021. Lux Motors has a fleet of high-quality Luxury Rental Cars.
          Furthermore, the outstanding and enticing appearance of our cars will
          absolutely fascinate you. You can find cars with phenomenal
          specifications and features at Lux Motors. Given this, many people in
          the UAE consider it to be the Best Luxury Car Rental in Dubai, UAE.
        </Text>
      </Box>
    );
  };
  return (
    <>
      <Hero />
      <Container maxW={{ base: "480px", lg: "1170px" }}>
        <Desc />
        <CarList />
        <Features />
      </Container>
      {/* <Comments /> */}

      <Container maxW={{ base: "480px", lg: "1170px" }}>
        <FAQ />
      </Container>
    </>
  );
};

export default Home;
