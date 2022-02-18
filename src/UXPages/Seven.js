import React from "react";
import music from "../music.png";
import full7 from "../full7.png";
import mockup07 from "../mockup07.png";
import { ProjectPage } from "./Layout";

const Six = () => {
  return (
    <>
      <ProjectPage
        src={music}
        src1={full7}
        alt="Music Player"
        number="07"
        title="Music Player"
        children={["#MusicPlayer", "#Glassmorphism", "#Figma"]}
        text="Interesting and modern music player design following 2022 hot design trend glassmorphism."
        subText=""
        src2={mockup07}
        alt2="watch"
        subSection="Glassmorphism and basic colors."
        fontNameH="Quattrocento Sans"
        fontNameSH="Quattrocento Sans"
        fontName="Quattrocento Sans"
        colors={["#000000", "#C9C9C9", "#7534FF", "#F7F8FB", "FFFFFF"]}
        next="eight"
        prev="six"
        screens="1 screen"
        tools={[
          "Pen & Paper",
          "Artboat Studio Mockup",
          "Vectary 3D Elements",
          "Figma",
        ]}
      ></ProjectPage>
    </>
  );
};

export default Six;
