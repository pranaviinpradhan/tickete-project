import React from "react";
import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon, LockIcon } from "@chakra-ui/icons";
import logo from "../logo.png";

export default function Navbar() {
  return (
    <div>
      <Center my="15px">
        <Grid templateColumns="repeat(3, 1fr)" gap={"350px"}>
          <GridItem>
            <img src={logo} alt="logo" width={"120px"} height={"auto"} />
          </GridItem>
          <GridItem color={"#60646C"} fontSize={"14px"}>
            <LockIcon /> Checkout
          </GridItem>
          <GridItem fontSize={"14px"}>
            <QuestionOutlineIcon /> Help
          </GridItem>
        </Grid>
      </Center>
    </div>
  );
}
