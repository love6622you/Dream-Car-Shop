import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import React from "react";

const list = [
  {
    icon: "/img/book-online.png",
    title: "Online Booking",
    text: "Explore and book your car directly online or via WhatsApp"
  },
  {
    icon: "/img/booking-time.png",
    title: "Fast Response",
    text: "Outstanding customer service in four different languages"
  },
  {
    icon: "/img/Make-Ride.png",
    title: "Free Pick Up And Drop",
    text: "Free Pick-up and drop-off for your luxury car rental inside Dubai"
  }
];

type FeatureCardProps = {
  icon: string;
  title: string;
  text: string;
};

const FeatureCard = (props: FeatureCardProps) => {
  const { icon, title, text } = props;
  return (
    <Stack
      justify={"center"}
      alignItems={"center"}
      maxW={{ base: "345px", lg: "fit-content" }}
    >
      <Image src={icon} boxSize={"7.5rem"} mb={4} />
      <Text fontSize={"1.375rem"}>{title}</Text>
      <Text pt={2}>{text}</Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <Box textAlign={"center"} py={"1.875rem"}>
      <Heading mb={6}>Rent Your Dream Car</Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={"1.875rem"}>
        {list.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
