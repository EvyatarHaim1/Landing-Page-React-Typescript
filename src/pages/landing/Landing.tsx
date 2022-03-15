import { Box } from "@chakra-ui/react";
import React from "react";
import Intro from "./sections/Inro";
import Services from "./sections/Services";
import Commitments from "./sections/Commitments";
import HowWeWork from "./sections/HowWeWork";
import Testimonials from "./sections/Testimonials";

const Landing = () => {
  return (
    <Box>
      <Intro />
      <Services />
      <Commitments />
      <HowWeWork />
      <Testimonials />
    </Box>
  );
};

export default Landing;
