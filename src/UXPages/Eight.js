import React from "react";
import signin from "../assets/signin.png";
import full8 from "../assets/full8.png";
import mockup08 from "../assets/mockup08.png";

import { ProjectPage } from "./Layout";

const Eight = () => {
  return (
    <>
      <ProjectPage
        src={signin}
        src1={full8}
        alt="Log In"
        number="08"
        title="Log In"
        children={["#LoginPage", "#Gaming", "#Figma"]}
        text="Log In screen that uses email as the user ID to make it easier to remember. 
        Screen provides a Sign Up option on Log In page to enable users to flip in case a user has reached the section by mistake.
        also provides an option for users to keep themselves signed in."
        subText="Log In page for gaming service Gamplaying."
        src2={mockup08}
        alt2="signin"
        subSection="Minimalistic,modern and fun design"
        fontNameH="Poppins"
        fontNameSH="Poppins"
        fontName="Poppins"
        colors={["#2B86C5", "#784BA0", "#FF3CAC", "FFFFFF"]}
        next="one"
        prev="seven"
        screens="1 screen"
        tools={["Pen & Paper", "Artboat Studio Mockup", "Figma"]}
      ></ProjectPage>
    </>
  );
};

export default Eight;
