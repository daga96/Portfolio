import React from "react";
import wallet from "../wallet.png";
import mockup from "../mockup01.png";
import mockup1 from "../mockup01-1.png";
import { ProjectPage } from "./Layout";

const One = () => {
  return (
    <>
      <ProjectPage
        src={wallet}
        src1={mockup1}
        alt="Financial app"
        number="01"
        title="Wallet App"
        children={["#App", "#Banking", "#Figma"]}
        text="Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Aenean a auctor risus. 
      Cras neque urna, tempor in quam sit amet, pretium vestibulum ligula. 
      Morbi nec bibendum ex. Cras id magna nec velit viverra consectetur ornare ac diam. Aenean porta purus quis augue laoreet scelerisque. Phasellus ligula dui, pellentesque et scelerisque in, mattis eget diam. 
      Pellentesque magna enim, varius quis pharetra eu, porttitor id magna. 
      Interdum et malesuada fames ac ante ipsum primis in faucibus."
        subText="All your finances in your pocket."
        src2={mockup}
        alt2="wallet"
        subSection="Minimalistic,modern and fun design"
        fontName="Roboto"
        colors={["#582CD8", "#9A7FE7", "#3C18A3", "#666666", "#FFFFFF"]}
        next="two"
        prev=""
      ></ProjectPage>
    </>
  );
};

export default One;
