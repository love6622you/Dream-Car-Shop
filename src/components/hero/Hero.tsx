import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={"50vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack w={"full"} pt={8} px={useBreakpointValue({ base: 4, md: 8 })}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            dropShadow={"2px 4px 6px black"}
          >
            Best Luxury Cars For Rent In Dubai
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
