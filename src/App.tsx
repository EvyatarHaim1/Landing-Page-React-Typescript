import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/landing/Landing";

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Landing />
    <Footer />
  </ChakraProvider>
);
