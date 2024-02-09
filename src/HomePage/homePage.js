import React from "react";
import Navbar from "../navbar";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import ConfirmComp from "../confirm&pay";
import Footer from "../footer";
import logo from "../Frame 777.png";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Center backgroundColor={"black"} color={"white"} font>
        <Text>Holding your tickets for 30:00</Text>
      </Center>
      <Flex mt={"60px"} px={"150px"}>
        <ConfirmComp />
      </Flex>
      <hr />
      <Box mt={"60px"} px={"150px"}>
        <Footer />
      </Box>
      <Box backgroundColor={"black"} mt="50px" height={"200px"}>
        <Box p="100px">
          <img src={logo} alt="logo" />
        </Box>
      </Box>
    </>
  );
}
