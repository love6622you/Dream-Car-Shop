import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";

import logoSrc from "/img/logo.png";

type InfoType = {
  [key: string]: any;
};

const contactInfo: InfoType = {
  Email: import.meta.env.VITE_APP_EMAIL,
  Address: import.meta.env.VITE_APP_ADDRESS
};

const Footer = () => {
  return (
    <>
      <Box bgColor={"#212020"} py={{ base: 12 }}>
        <Container
          maxW={{ base: "540px", md: "750px", lg: "970px", xl: "1170px" }}
        >
          <Grid templateColumns={{ lg: "repeat(4,1fr)" }}>
            <GridItem colStart={4} textAlign={"right"}>
              <Heading fontSize={"3xl"} my={6}>
                Contact Us
              </Heading>
              {Object.keys(contactInfo).map((info) => (
                <Text
                  key={contactInfo[info]}
                  mt={"15px"}
                  mb={"22px"}
                  color={"#FFFFFFCC"}
                >
                  {info} <br />
                  {contactInfo[info]}
                </Text>
              ))}
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box bgColor={"#191919"} py={{ base: 6 }}>
        <Container
          maxW={{ base: "540px", md: "750px", lg: "970px", xl: "1170px" }}
        >
          <Flex alignItems={"center"} h={"full"} gap={5}>
            <Image src={logoSrc} h={{ base: "45px", lg: "70px" }} />
            <Text fontSize={"sm"} color={"#FFFFFF80"}>
              {import.meta.env.VITE_APP_FOOTER_TEXT}
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
