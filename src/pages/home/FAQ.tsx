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
      <Heading fontSize={"3xl"} m={"1.875rem"} textAlign={"center"}>
        FAQs
      </Heading>

      {questions.map((faq) => (
        <Accordion allowToggle={true} key={faq.title}>
          <AccordionItem bg={"black"} border={"none"} mb={5}>
            <AccordionButton minH={"6.25rem"} fontWeight={600} px={10}>
              <Box as="span" flex="1" textAlign="left" fontSize={"2xl"}>
                {faq.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel px={"3.125rem"} pb={10}>
              {faq.text}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
