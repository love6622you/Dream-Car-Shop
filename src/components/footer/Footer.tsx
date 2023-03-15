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
  phone: "+971 502003179",
  email: "sales@luxmotorsdxb.com",
  address: "Warehouse 5, Al Quoz Industrial Area 4, Dubai, United Arab Emirates"
};

const Footer = () => {
  return (
    <>
      <Box bgColor={"#212020"}>
        <Container maxW={"1170px"} h={"450px"} py={12}>
          <Grid
            templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(4,1fr)" }}
          >
            <GridItem colStart={4} textAlign={"right"}>
              <Heading fontSize={"3xl"} my={6}>
                Contact Us
              </Heading>
              {Object.keys(contactInfo).map((info) => (
                <Text mt={"15px"} mb={"22px"} color={"#FFFFFFCC"}>
                  {contactInfo[info]}
                </Text>
              ))}
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box bgColor={"#191919"}>
        <Container maxW={"1170px"} h={"120px"}>
          <Flex alignItems={"center"} h={"full"} gap={5}>
            <Image src={logoSrc} />
            <Text fontSize={"sm"} color={"#FFFFFF80"}>
              © 2022 Lux Motors Car Rental L.L.C. All Right Reserved.
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
