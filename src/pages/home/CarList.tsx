import React from "react";
import carTypes from "@/assets/data/car.json";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import CarItem from "./CarItem";

const CarList = () => {
  return (
    <>
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
    </>
  );
};

export default CarList;
