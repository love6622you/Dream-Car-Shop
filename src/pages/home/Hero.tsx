import React from "react";
import { Stack, Flex, useBreakpointValue, Heading } from "@chakra-ui/react";

import bgBanner from "/img/car-banner.jpeg";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={"700px"}
      backgroundImage={bgBanner}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundRepeat={"no-repeat"}
    >
      <Stack w={"full"} align="center" pt={8}>
        <Heading fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
          Best Luxury Cars For Rent In Dubai
        </Heading>
      </Stack>
    </Flex>
  );
};

export default Hero;
