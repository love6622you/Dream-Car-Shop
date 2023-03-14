import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import CarItem from "./home/CarItem";
import Hero from "./home/Hero";

import carTypes from "../../public/data/carData.json";
import Features from "./home/Features";

const Home = () => {
  return (
    <>
      <Hero />
      <Container maxW={"1170px"} px={"15px"}>
        <Box pb={10}>
          <Heading fontSize={"3xl"} textAlign={"center"} my={"6"}>
            Rent Your Dream Car
          </Heading>
          <Text>
            With a few clicks on your phone, you can have your dream car right
            at your doorstep. Lux Motors has quickly gained a reputation all
            across Dubai for having perfect timing and incredible condition
            cars. We are operating our luxury car rental services in Dubai since
            29th July 2021. Lux Motors has a fleet of high-quality Luxury Rental
            Cars. Furthermore, the outstanding and enticing appearance of our
            cars will absolutely fascinate you. You can find cars with
            phenomenal specifications and features at Lux Motors. Given this,
            many people in the UAE consider it to be the Best Luxury Car Rental
            in Dubai, UAE.
          </Text>
        </Box>

        {carTypes.map((list) => (
          <Box key={list.type}>
            <Heading textAlign={"center"} fontSize={"3xl"} my={6}>
              {list.type}
            </Heading>
            <SimpleGrid columns={3} gap={7} pt={2.5} pb={10}>
              {list.cars.map((car) => (
                <CarItem key={car.name} car={car} />
              ))}
            </SimpleGrid>
          </Box>
        ))}

        <Features />
      </Container>
    </>
  );
};

export default Home;
