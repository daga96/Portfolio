import React from "react";
import payment from "../payment.png";
import mockup2 from "../mockup02.png";

import { ProjectPage } from "./Layout";

const Two = () => {
  return (
    <ProjectPage
      src={payment}
      src1={mockup2}
      alt="Payment screen"
      number="02"
      title="Payment Screen"
      children={["#App", "#Shopping", "#Checkout", "#Figma"]}
      text="Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Aenean a auctor risus. 
      Cras neque urna, tempor in quam sit amet, pretium vestibulum ligula. 
      Morbi nec bibendum ex. Cras id magna nec velit viverra consectetur ornare ac diam. Aenean porta purus quis augue laoreet scelerisque. Phasellus ligula dui, pellentesque et scelerisque in, mattis eget diam. 
      Pellentesque magna enim, varius quis pharetra eu, porttitor id magna. 
      Interdum et malesuada fames ac ante ipsum primis in faucibus."
      subText="Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit."
      src2={mockup2}
      alt2="mockup"
      subSection="Functional and simple."
      fontName="Roboto"
      colors={["#21D59E", "#F8F8F8", "#101010", "#C4C4C4"]}
      next="three"
      prev="one"
    ></ProjectPage>
  );
};

export default Two;
