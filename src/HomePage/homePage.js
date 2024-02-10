import React from "react";
import Navbar from "../navbar";
import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import ConfirmComp from "../confirm&pay";
import Footer from "../footer";
import logo from "../Frame 777.png";
import SideCard from "../sideCard";
import { useScreenDetector } from "../useScreenDetector";

export default function HomePage() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <>
      <Navbar />
      <Center backgroundColor={"black"} color={"white"} padding={"10px"}>
        <Text>Holding your tickets for 30:00</Text>
      </Center>
      <Text
        fontWeight={"500"}
        fontSize={"38px"}
        fontFamily={"serif"}
        mt={isDesktop ? "60px" : "30px"}
        px={isDesktop ? "150px" : "10px"}
      >
        Confirm & pay
      </Text>
      <Flex
        mt={isDesktop ? "60px" : "20px"}
        px={isDesktop ? "150px" : "10px"}
        gap={"20px"}
        direction={isDesktop ? "row" : "column-reverse"}
      >
        <ConfirmComp />
        <SideCard />
      </Flex>
      <hr />
      <Box mt={"60px"} px={isDesktop ? "150px" : "10px"}>
        {isMobile && (
          <>
            <Text fontWeight={"500"} fontSize={"20px"}>
              Frequently asked questions
            </Text>
            <Text color={"#60646B"} mt="15px">
              Here are some of our most asked questions.{" "}
            </Text>
          </>
        )}
        <Footer />
      </Box>
      <Box backgroundColor={"black"} mt="50px" height={"250px"}>
        <Box p={isDesktop ? "100px" : "20px"} pt={isMobile ? "50px" : "140px"}>
          <img src={logo} alt="logo" />
          {isMobile && (
            <>
              <Divider mt={"30px"} />
              <Text color={"white"} fontSize={"13px"} mt="30px">
                Privacy policy • Terms of usage • Cancellation policy • Sitemap
              </Text>
              <Text color={"gray"} fontSize={"12px"} my="20px">
                Made with ❤️
              </Text>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
