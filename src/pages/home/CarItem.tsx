import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";

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
    <Card backgroundColor={"#22273A"} color={"inherit"}>
      <CardHeader p={0}>
        <Image
          src={image}
          alt={name}
          borderRadius="lg"
          w={"full"}
          h={{ base: "260px" }}
          objectFit={"cover"}
        />
      </CardHeader>

      <CardBody pt={4} px={6} textAlign={"center"}>
        <Heading size="md" isTruncated>
          {name}
        </Heading>
        <VStack
          spacing={{ base: 0, lg: 1.5 }}
          pt={{ base: 4, lg: 6 }}
          color={"#DBDBDB"}
        >
          <Text>Doors: {desc.door}</Text>
          <Text>Seat: {desc.seat}</Text>
          <Text>Transmission: {desc.transmission}</Text>
        </VStack>
      </CardBody>

      <Divider w={"90%"} mx={"auto"} color={"#FFF"} />

      <CardFooter px={6} justify={"space-between"} alignItems={"center"}>
        <Text>Details</Text>
        <Text fontSize={"xl"} color={"#FFF01A"}>
          {price} AED
        </Text>
      </CardFooter>
    </Card>
  );
};

export default CarItem;
