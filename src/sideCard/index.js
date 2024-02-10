import { Box, Button, Center, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import image from "../Gallery.png";
import ticket from "../Ticket.png";
import calendar from "../CalendarBlank.png";
import time from "../time.png";
import guest from "../guest.png";
import { AddIcon, InfoOutlineIcon, LockIcon } from "@chakra-ui/icons";
import badge from "../Badge2.png";
import { useScreenDetector } from "../useScreenDetector";

export default function SideCard() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <Box
      border={"1px solid #DBDBE4"}
      borderRadius={"25px"}
      height={isDesktop ? "850px" : "700px"}
    >
      <img src={image} alt="imag" />
      <Box px="45px">
        <Box>
          <Text>⭐️ 4.9(4.5k) • category</Text>
          <Text fontWeight={"500"} fontSize={"14px"}>
            Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
            Housef
          </Text>
          <Flex gap={"10px"} my="5px">
            <img src={ticket} alt="ticket" />
            <Text>ticket type - variant</Text>
          </Flex>
          <Flex gap={"10px"} my="5px">
            <img src={calendar} alt="ticket" />
            <Text>day, month date</Text>
          </Flex>
          <Text fontSize={"12px"} color={"#60646B"}>
            Duration: duration
          </Text>
          <Flex gap={"10px"} my="5px">
            <img src={time} alt="ticket" />
            <Text>time </Text>
          </Flex>
          <Text fontSize={"12px"} color={"#60646B"}>
            Operating hours: time to time
          </Text>
          <Flex gap={"10px"} my="5px">
            <img src={guest} alt="ticket" />
            <Text>5 guests </Text>
          </Flex>
        </Box>
        <Divider orientation="horizontal" variant="dashed" />
        <Flex justifyContent={"space-between"} py="10px">
          <Text color={"#60646B"} decoration={"underline"}>
            View payment summary
          </Text>
          <AddIcon />
        </Flex>
        <Divider />
        <Flex justifyContent={"space-between"} my="20px">
          <Text fontWeight={"500"} fontSize={"18px"}>
            Total payable
          </Text>
          <Text>$XXX</Text>
        </Flex>
        <img src={badge} alt="badge" />
        <Flex
          justifyItems={"center"}
          gap={"10px"}
          alignItems={"center"}
          mt="30px"
        >
          <Text color={"#60646B"} fontSize={"13px"}>
            You will be charged in AED
          </Text>
          <InfoOutlineIcon color={"#7F808A"} boxSize={3} />
        </Flex>
        {isDesktop && (
          <Text fontSize={"11px"} mt="30px" color={"#60646B"}>
            By clicking “confirm & pay”, you agree to{" "}
            <span style={{ textDecoration: "underline", color: "#4667CF" }}>
              Tickete’s general terms and conditions
            </span>{" "}
            and{" "}
            <span style={{ textDecoration: "underline", color: "#4667CF" }}>
              cancellation policy.
            </span>
          </Text>
        )}
        {isDesktop && (
          <Center>
            <Button
              color={"white"}
              backgroundColor={"black"}
              borderRadius={"10px"}
              mt="15px"
              gap={"10px"}
              size={"lg"}
              px="50px"
            >
              <LockIcon />
              Confirm & pay
            </Button>
          </Center>
        )}
      </Box>
    </Box>
  );
}
