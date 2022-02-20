import React from "react";
import zeus from "../assets/zeus.png";
import full5 from "../assets/full5.png";
import mockup05 from "../assets/mockup05.png";
import { ProjectPage } from "./Layout";

const Five = () => {
  return (
    <>
      <ProjectPage
        src={zeus}
        src1={full5}
        alt="Product Page"
        number="05"
        title="Product Page"
        children={["#Product", "#ECommerce", "Watch", "#Figma"]}
        text=" The page includes complete product information, 
        and shows the product design. The simple design allows user to focus on the product over the page."
        subText="Masuline and simple Product Page for watch brand.  "
        src2={mockup05}
        alt2="watch"
        subSection="Minimalistic,modern and fun design"
        fontNameH="Open Sans"
        fontNameSH="Open Sans"
        fontName="Poppins"
        colors={["#171717", "#D0D0D0", "#FEFFD1", "#FFFFFF"]}
        next="six"
        prev="four"
        screens="1 screen"
        tools={["Pen & Paper", "Artboat Studio Mockup", "Figma"]}
      ></ProjectPage>
    </>
  );
};

export default Five;
