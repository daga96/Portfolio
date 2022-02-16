import React from "react";
import profile from "../profile.png";
import mockup3 from "../mockup03.png";
import { ProjectPage } from "./Layout";

const Three = () => {
  return (
    <ProjectPage
      src={profile}
      src1={mockup3}
      alt="Social Profile"
      number="03"
      title="Social Profile"
      children={["#Profile", "#SocialMedia", "#Figma"]}
      text="Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Aenean a auctor risus. 
      Cras neque urna, tempor in quam sit amet, pretium vestibulum ligula. 
      Morbi nec bibendum ex. Cras id magna nec velit viverra consectetur ornare ac diam. Aenean porta purus quis augue laoreet scelerisque. Phasellus ligula dui, pellentesque et scelerisque in, mattis eget diam. 
      Pellentesque magna enim, varius quis pharetra eu, porttitor id magna. 
      Interdum et malesuada fames ac ante ipsum primis in faucibus."
      subText="Simple and fun."
      src2={mockup3}
      alt2="wallet"
      subSection="Minimalistic,modern and fun design"
      fontName="Poppins"
      colors={["#333333", "#FFFFFF", "#FFBFA8"]}
      next=""
      prev="two"
    ></ProjectPage>
  );
};

export default Three;
