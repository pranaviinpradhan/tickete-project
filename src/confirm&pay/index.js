import React from "react";
import {
  Center,
  Flex,
  Text,
  Container,
  Input,
  Stack,
  Select,
  Radio,
  Box,
  Button,
} from "@chakra-ui/react";
import { InfoIcon, InfoOutlineIcon, LockIcon } from "@chakra-ui/icons";
import "./index.css";
import { MultiSelect } from "chakra-multiselect";
import vector from "../Vector.png";
import logo from "../Logos.png";
import badge from "../Badge.png";
import applePay from "../Input Add-on.png";
import gpay from "../gpay.png";

export default function ConfirmComp() {
  return (
    <div>
      <Text fontWeight={"500"} fontSize={"38px"} fontFamily={"serif"}>
        Confirm & pay
      </Text>
      <Container
        border={"1px solid #D8D9DF"}
        py={"15px"}
        px={"15px"}
        width={"700px"}
        borderRadius={"10px"}
        backgroundColor={"#FCFCFD"}
        mt="30px"
      >
        <Flex
          justifyContent={"space-between"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <div>
            <Text fontSize={"13px"}>Free cancellation</Text>
            <Text color={"#60646B"} fontSize={"12px"}>
              Tickets can be cancelled by 13th December, 2022.
            </Text>
          </div>
          <InfoIcon color={"#7F808A"} />
        </Flex>
      </Container>
      <Container mt={"50px"}>
        <Text fontSize={"20px"} fontWeight={"500"}>
          Enter your details
        </Text>
        <Text color={"#60646B"} fontSize={"14px"}>
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </Text>
      </Container>
      <div>
        <Stack mt="40px" mb={"20px"}>
          <Input placeholder="Full name " />
          <Flex gap={"15px"}>
            <Input placeholder="Country Code" />
            <Input placeholder="Phone number" />
          </Flex>
          <Flex gap={"15px"}>
            <Input placeholder="Email" />
            <Input placeholder="Confirm email" />
          </Flex>
        </Stack>
        <hr />
      </div>
      <Container mt={"50px"}>
        <Text fontSize={"20px"} fontWeight={"500"}>
          Additional information
        </Text>
        <Text color={"#60646B"} fontSize={"14px"}>
          We need a few more details to complete your reservation.
        </Text>
      </Container>
      <div>
        <Stack mt="40px" mb={"20px"}>
          <Flex gap={"15px"}>
            <Input placeholder="Input label " />
            <Select placeholder="Select">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
          <MultiSelect options={[]} placeholder="multiselect" />
        </Stack>
        <hr />
      </div>
      <Container mt={"50px"}>
        <Text fontSize={"20px"} fontWeight={"500"}>
          Select your mode of payment
        </Text>
        <Text color={"#60646B"} fontSize={"14px"}>
          Payments with Tickete are secure and encrypted.
        </Text>
      </Container>
      <Container
        border={"1px solid black"}
        borderRadius={"10px"}
        padding={"15px"}
      >
        <Flex justifyContent={"space-between"}>
          <div>
            <Flex gap={"10px"} alignContent={"center"} alignItems={"center"}>
              <img src={vector} alt="vector" />
              <Text>Credit & debit card</Text>
            </Flex>
          </div>
          <Radio size="md" />
        </Flex>
        <Box my={"15px"}>
          <img src={logo} alt="logo" />
        </Box>
        <Box>
          <Flex gap={"10px"}>
            <Input placeholder="Name on card " />
            <Input placeholder="Card Number " />
          </Flex>
          <Flex gap={"10px"} my="20px">
            <Input placeholder="Expiry date " />
            <Input placeholder="<CVV/CVC> " />
          </Flex>
          <hr />
        </Box>

        <Flex justifyContent={"space-between"} my={"20px"}>
          <Text>Total payable:${"XXX"}</Text>
          <img src={badge} alt="badge" />
        </Flex>
        <Flex justifyItems={"center"} gap={"10px"} alignItems={"center"}>
          <Text color={"#60646B"} fontSize={"13px"}>
            You will be charged in AED
          </Text>
          <InfoOutlineIcon color={"#7F808A"} boxSize={3} />
        </Flex>
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
        <Button
          color={"white"}
          backgroundColor={"black"}
          borderRadius={"10px"}
          mt="15px"
          gap={"10px"}
        >
          <LockIcon />
          Confirm & pay
        </Button>
      </Container>
      <Container
        border={"1px solid #D8D9DF"}
        py={"15px"}
        px={"15px"}
        width={"700px"}
        borderRadius={"10px"}
        backgroundColor={"#FCFCFD"}
        mt="30px"
      >
        <Flex
          justifyContent={"space-between"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Flex gap={"10px"}>
            <img src={applePay} alt="apple pay" />
            <Text color={"#60646B"}>Coming soon</Text>
          </Flex>
          <Radio size={"md"} />
        </Flex>
      </Container>
      <Container
        border={"1px solid #D8D9DF"}
        py={"15px"}
        px={"15px"}
        width={"700px"}
        borderRadius={"10px"}
        backgroundColor={"#FCFCFD"}
        my="20px"
      >
        <Flex
          justifyContent={"space-between"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Flex gap={"10px"}>
            <img src={gpay} alt="apple pay" />
            <Text color={"#60646B"}>Coming soon</Text>
          </Flex>
          <Radio size={"md"} />
        </Flex>
      </Container>
      <hr />
      <Box mt="30px">
        <Text fontSize={"22px"} fontWeight={"500"}>
          Total Payable: $XXX
        </Text>
      </Box>
      <Container
        border={"1px solid #D8D9DF"}
        py={"15px"}
        px={"15px"}
        width={"700px"}
        borderRadius={"10px"}
        my="30px"
      >
        <Flex alignContent={"center"} alignItems={"center"} gap={"10px"}>
          <InfoIcon />
          <Box fontSize={"14px"}>
            <Text fontWeight={"500"}>You will be charged in AED</Text>
            <Text color={"#60646B"}>
              The price shown here is in US Dollar (USD) as per the current
              conversion rate. You will be charged in United Arab Emirates
              Dirham (AED).
            </Text>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
