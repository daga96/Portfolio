import React from "react";
import profile from "../assets/profile.png";
import mockup3 from "../assets/mockup03.png";
import full3 from "../assets/full3.png";
import { ProjectPage } from "./Layout";

const Three = () => {
  return (
    <ProjectPage
      src={profile}
      src1={full3}
      alt="Social Profile"
      number="03"
      title="Social Profile"
      children={["#Profile", "#SocialMedia", "#Figma"]}
      text="Designed to make it possible to upload custom avatars and color modification. It is fun and simple, perfect for young demographic."
      subText="Fun social profile for group works."
      src2={mockup3}
      alt2="wallet"
      subSection="Minimalistic,modern and fun design"
      fontNameH="Poppins"
      fontNameSH="Poppins"
      fontName="Poppins"
      colors={["#333333", "#FFFFFF", "#FFBFA8", "#FFA8A8", "#A8F0FF"]}
      next="four"
      prev="two"
      screens="3 screens"
      tools={["Pen & Paper", "Artboat Studio Mockup", "Figma"]}
    ></ProjectPage>
  );
};

export default Three;
