import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Flex,
  Avatar,
  Heading
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import comments from "@/assets/data/comment.json";

// Settings for the slider
const settings = {
  dots: true,
  autoplay: false,
  speed: 300,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1
};

export default function Comments() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "0px" });

  const CarouselsArrowIcon = ({ config }: any) => {
    return (
      <IconButton
        aria-label="left-arrow"
        position="absolute"
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        border={"1px solid #FFF"}
        borderRadius={"100%"}
        bg={"transparent"}
        _hover={{
          bg: "#181A1B",
          opacity: 0.8
        }}
        {...config}
      />
    );
  };

  return (
    <Box pb={"1.875rem"}>
      <Heading fontSize={"3xl"} m={"1.875rem"} textAlign={"center"}>
        What Clients Says
      </Heading>
      <Box
        position={"relative"}
        height={"400px"}
        overflow={"hidden"}
        maxWidth={"1400px"}
        mx={"auto"}
        color={"#718096"}
      >
        <CarouselsArrowIcon
          config={{
            left: side,
            icon: <ArrowBackIcon boxSize="20px" />,
            onClick: () => slider?.slickPrev()
          }}
        />
        <CarouselsArrowIcon
          config={{
            right: side,
            icon: <ArrowForwardIcon boxSize="20px" />,
            onClick: () => slider?.slickNext()
          }}
        />

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {comments.map((info, index) => (
            <Box key={index} height={"400px"}>
              <Stack
                w={"440px"}
                h={"full"}
                bgColor={"#FFF"}
                p={10}
                pb={12}
                rounded={"lg"}
              >
                <Text pt={5} flexGrow={1}>
                  {info.comment}
                </Text>

                <Flex alignItems={"center"}>
                  <Avatar boxSize={"3.75rem"} rounded={"full"} mr={4} />
                  <Box alignItems={"flex-start"}>
                    <Text>Happy Customer</Text>
                    <Text as={"span"} pr={2} color={"#2D3748"}>
                      {info.name}
                    </Text>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <IconButton
                        key={index}
                        variant="unstyled"
                        aria-label="star"
                        bgColor={"transparent"}
                        size={"16px"}
                        top={-0.5}
                        icon={<StarIcon color={"orange"} />}
                      />
                    ))}
                  </Box>
                </Flex>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
