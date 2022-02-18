import React from "react";
import full2 from "../full2.png";
import payment from "../payment.png";
import mockup2 from "../mockup02.png";

import { ProjectPage } from "./Layout";

const Two = () => {
  return (
    <ProjectPage
      src={payment}
      src1={full2}
      alt="Payment screen"
      number="02"
      title="Payment Screen"
      children={["#App", "#Shopping", "#Checkout", "#Figma"]}
      text="Simple checkout and payment screens. Checkout screen allows user to confirm cart content all overall price.
      Payment screen allows user to choose payment options and confirm order summary."
      subText="Basic but informative."
      src2={mockup2}
      alt2="mockup"
      subSection="Functional and simple."
      fontNameH="Roboto"
      fontNameSH="Roboto"
      fontName="Roboto"
      colors={["#21D59E", "#F8F8F8", "#101010", "#C4C4C4"]}
      next="three"
      prev="one"
      screens="2 screens"
      tools={["Pen & Paper", "Artboat Studio Mockup", "Figma"]}
    ></ProjectPage>
  );
};

export default Two;
