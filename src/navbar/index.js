import React from "react";
import { Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon, LockIcon, ArrowBackIcon } from "@chakra-ui/icons";
import logo from "../logo.png";
import { useScreenDetector } from "../useScreenDetector";

export default function Navbar() {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  return (
    <div>
      <Center my="15px">
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={isDesktop ? "350px" : "50px"}
        >
          <GridItem>
            {isDesktop ? (
              <img src={logo} alt="logo" width={"120px"} height={"auto"} />
            ) : (
              <ArrowBackIcon />
            )}
          </GridItem>
          <GridItem color={"#60646C"} fontSize={"14px"}>
            <LockIcon /> Checkout
          </GridItem>
          <GridItem fontSize={"14px"}>
            <Flex alignItems={"center"} gap={"5px"}>
              <QuestionOutlineIcon />
              {isDesktop && <Text>Help</Text>}
            </Flex>
          </GridItem>
        </Grid>
      </Center>
    </div>
  );
}
