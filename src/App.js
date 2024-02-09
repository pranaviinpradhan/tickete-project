import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage/homePage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </>
  );
}

export default App;
