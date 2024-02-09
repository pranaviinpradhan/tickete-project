import React from "react";
import Navbar from "../navbar";
import { Center, Flex, Text } from "@chakra-ui/react";
import ConfirmComp from "../confirm&pay";
import Footer from "../footer";

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
      <Footer />
    </>
  );
}
