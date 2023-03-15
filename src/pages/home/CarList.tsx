import React from "react";
import carTypes from "@/assets/data/car.json";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import CarItem from "./CarItem";

const CarList = () => {
  return (
    <>
      {carTypes.map((list) => (
        <Box key={list.type}>
          <Heading
            textAlign={"center"}
            fontSize={{ base: "1.625rem", lg: "3xl" }}
            my={{ base: 5, md: 6 }}
          >
            {list.type}
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={"1.875rem"}
            pt={2.5}
            pb={10}
          >
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
