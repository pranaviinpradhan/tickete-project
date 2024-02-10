import {
  Box,
  Button,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import icon from "../Group 99.png";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { useScreenDetector } from "../useScreenDetector";

export default function Footer() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <Box ml={isDesktop ? "40px" : "0px"}>
      <Flex
        gap={isDesktop ? "60px" : "0px"}
        direction={isDesktop ? "row" : "column-reverse"}
      >
        <Box>
          {isDesktop && (
            <>
              <Text fontWeight={"500"} fontSize={"20px"}>
                Frequently asked questions
              </Text>
              <Text color={"#60646B"} mt="15px">
                Here are some of our most asked questions.{" "}
              </Text>
            </>
          )}
          <Box
            backgroundColor={"#F9F9FB"}
            borderRadius={"10px"}
            padding={"20px"}
            mt="30px"
          >
            <Flex gap={isDesktop ? "100px" : "80px"}>
              <Box>
                <Text fontWeight={"500"}>
                  Still need help?
                  <br /> We’re here for you.
                </Text>
                <Button
                  color={"white"}
                  backgroundColor={"black"}
                  borderRadius={"10px"}
                  mt="20px"
                >
                  Chat with us
                </Button>
              </Box>
              <img src={icon} alt="icon" />
            </Flex>
          </Box>
        </Box>
        <Accordion
          defaultIndex={[0]}
          allowMultiple
          allowToggle
          width={isDesktop ? "600px" : "390px"}
          textAlign={"left"}
        >
          <AccordionItem
            border={"1px solid #DBDBE4"}
            borderRadius={"10px"}
            my="20px"
            py="10px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton gap={"20px"}>
                    {isExpanded ? (
                      <CloseIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box>What should I do on my first trip to Rome?</Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            border={"1px solid #DBDBE4"}
            borderRadius={"10px"}
            my="20px"
            py="10px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton gap={"20px"}>
                    {isExpanded ? (
                      <CloseIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box>What are some hidden gems to see in Rome?</Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Rome is packed with hidden gems. If you love art, don't miss
                  the Galleria Doria Pamphilj or Palazzo Barberini. The Museo
                  Barracco is a free museum and well worth a quick visit. If you
                  love the ancient stuff, don't miss the Domus Romana at Palazzo
                  Valentini, the Domus Aurea, and the Baths of Caracalla. For
                  even more hidden gems, take a tour of Trastevere, a
                  fascinating neighborhood full of history and ambiance.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            border={"1px solid #DBDBE4"}
            borderRadius={"10px"}
            my="20px"
            py="10px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton gap={"20px"}>
                    {isExpanded ? (
                      <CloseIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box>How much time should I spend in Rome?</Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Rome is packed with hidden gems. If you love art, don't miss
                  the Galleria Doria Pamphilj or Palazzo Barberini. The Museo
                  Barracco is a free museum and well worth a quick visit. If you
                  love the ancient stuff, don't miss the Domus Romana at Palazzo
                  Valentini, the Domus Aurea, and the Baths of Caracalla. For
                  even more hidden gems, take a tour of Trastevere, a
                  fascinating neighborhood full of history and ambiance.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            border={"1px solid #DBDBE4"}
            borderRadius={"10px"}
            my="20px"
            py="10px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton gap={"20px"}>
                    {isExpanded ? (
                      <CloseIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box>What food is Rome known for?</Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Rome is packed with hidden gems. If you love art, don't miss
                  the Galleria Doria Pamphilj or Palazzo Barberini. The Museo
                  Barracco is a free museum and well worth a quick visit. If you
                  love the ancient stuff, don't miss the Domus Romana at Palazzo
                  Valentini, the Domus Aurea, and the Baths of Caracalla. For
                  even more hidden gems, take a tour of Trastevere, a
                  fascinating neighborhood full of history and ambiance.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            border={"1px solid #DBDBE4"}
            borderRadius={"10px"}
            my="20px"
            py="10px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton gap={"20px"}>
                    {isExpanded ? (
                      <CloseIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box>What is the best way to get around Rome?</Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Rome is packed with hidden gems. If you love art, don't miss
                  the Galleria Doria Pamphilj or Palazzo Barberini. The Museo
                  Barracco is a free museum and well worth a quick visit. If you
                  love the ancient stuff, don't miss the Domus Romana at Palazzo
                  Valentini, the Domus Aurea, and the Baths of Caracalla. For
                  even more hidden gems, take a tour of Trastevere, a
                  fascinating neighborhood full of history and ambiance.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Flex>
      <hr />
    </Box>
  );
}
