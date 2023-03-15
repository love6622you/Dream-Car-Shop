import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading
} from "@chakra-ui/react";
import React from "react";
import questions from "@/assets/data/faq.json";

const FAQ = () => {
  return (
    <Box pb={5}>
      <Heading
        fontSize={{ base: "1.625rem", lg: "3xl" }}
        m={"1.875rem"}
        textAlign={"center"}
      >
        FAQs
      </Heading>

      {questions.map((faq) => (
        <Accordion allowToggle={true} key={faq.title}>
          <AccordionItem bg={"black"} border={"none"} mb={5}>
            <AccordionButton
              fontWeight={600}
              px={{ base: 6, lg: 10 }}
              py={{ base: 6, lg: 8 }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={{ base: "lg", lg: "2xl" }}
              >
                {faq.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              color={"#BFBFBF"}
              px={{ base: 6, lg: "3.125rem" }}
              pb={{ base: 6, lg: 10 }}
              pt={0}
            >
              {faq.text}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
