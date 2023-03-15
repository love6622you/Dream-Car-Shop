import { Stack, Flex, Heading } from "@chakra-ui/react";

import bgBanner from "/img/car-banner.jpeg";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={{ base: "15.625rem", md: "700px", lg: "43.75rem" }}
      backgroundImage={bgBanner}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundRepeat={"no-repeat"}
    >
      <Stack w={"full"} align="center" pt={8}>
        <Heading fontSize={{ base: "0.9375rem", md: "2rem", lg: "4xl" }}>
          Best Luxury Cars For Rent In Dubai
        </Heading>
      </Stack>
    </Flex>
  );
};

export default Hero;
