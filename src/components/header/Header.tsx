import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";

import logoSrc from "/img/logo.png";

const Header = () => {
  return (
    <Box h={"6.25rem"} px={6}>
      <Flex alignItems={"center"} h={"full"} gap={5}>
        <Image src={logoSrc} />
      </Flex>
    </Box>
  );
};

export default Header;
