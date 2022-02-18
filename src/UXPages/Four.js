import React from "react";
import dnd from "../dnd.png";
import full4 from "../full4.png";
import mockup04 from "../mockup04.png";

import { ProjectPage } from "./Layout";

const Four = () => {
  return (
    <>
      <ProjectPage
        src={dnd}
        src1={full4}
        alt="Landing page"
        number="04"
        title="Landing Page"
        children={["#Tabletop", "#DnD", "LandingPage", "#Figma"]}
        text="Fun design with shapes that are identifable by all tabletop enthusiasts. This landing page
        is simple and clean, providing a clear path to the visitor to learn about service and decide next steps."
        subText="Landing page for your tabletop campaign."
        src2={mockup04}
        alt2="landingpage"
        subSection="Minimalistic,modern and fun design"
        fontNameH="Recursive"
        fontNameSH="Recursive"
        fontName="Roboto"
        colors={["#2F5CFC", "#FFFFFF", "#787878", "#C4C4C4"]}
        next="five"
        prev="three"
        screens="1 screen"
        tools={["Pen & Paper", "Artboat Studio Mockup", "Inkscape", "Figma"]}
      ></ProjectPage>
    </>
  );
};

export default Four;
