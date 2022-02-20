import React from "react";
import settings from "../assets/settings.png";
import full6 from "../assets/full6.png";
import mockup06 from "../assets/mockup06.png";
import { ProjectPage } from "./Layout";

const Six = () => {
  return (
    <>
      <ProjectPage
        src={settings}
        src1={full6}
        alt="Settings Page"
        number="06"
        title="Settings Page"
        children={["#Settings", "#User", "Simple", "#Figma"]}
        text="Settings page allowing user to modify existing data. 
        The screen shows current data so user can make sure to input their information correctly."
        subText="Functional profiel settings"
        src2={mockup06}
        alt2="watch"
        subSection="Simple and functional."
        fontNameH="Roboto"
        fontNameSH="Roboto"
        fontName="Roboto"
        colors={["#000000", "#C9C9C9", "#7534FF", "#F7F8FB", "FFFFFF"]}
        next="seven"
        prev="five"
        screens="1 screen"
        tools={["Pen & Paper", "Artboat Studio Mockup", "Figma"]}
      ></ProjectPage>
    </>
  );
};

export default Six;
