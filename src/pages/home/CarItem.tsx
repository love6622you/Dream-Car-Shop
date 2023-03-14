import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";

type DescInfo = {
  door: String;
  seat: String;
  transmission: String;
};

type CardInfo = {
  image: string;
  name: string;
  price: string;
  desc: DescInfo;
};

type CardItemProps = {
  car: CardInfo;
};

const CarItem = ({ car }: CardItemProps) => {
  const { name, image, price, desc } = car;
  return (
    <Card maxW="sm" backgroundColor={"#1b1f28"} color={"inherit"}>
      <CardHeader p={0}>
        <Image
          src={image}
          alt={name}
          borderRadius="lg"
        />
      </CardHeader>

      <CardBody pt={4} px={6} textAlign={"center"}>
        <Heading size="md" isTruncated>
          {name}
        </Heading>
        <VStack spacing={1.5} pt={6}>
          <Text>Doors: {desc.door}</Text>
          <Text>Seat: {desc.seat}</Text>
          <Text>Transmission: {desc.transmission}</Text>
        </VStack>
      </CardBody>

      <Divider w={"90%"} mx={"auto"} color={"#27374c"} />

      <CardFooter px={6} justify={"space-between"} alignItems={"center"}>
        <Text>Details</Text>
        <Text fontSize={"xl"} color={"#fff01a"}>
          {price} AED
        </Text>
      </CardFooter>
    </Card>
  );
};

export default CarItem;
