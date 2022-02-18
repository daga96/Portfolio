import React from "react";
import wallet from "../wallet.png";
import mockup from "../mockup01.png";
import full from "../full.png";
import { ProjectPage } from "./Layout";

const One = () => {
  return (
    <>
      <ProjectPage
        src={wallet}
        src1={full}
        alt="Financial app"
        number="01"
        title="Wallet App"
        children={["#App", "#Banking", "#Figma"]}
        text="WalletShare is a mobile app that functions as a digital wallet, making transactions and budget tracking easier and fun. "
        subText="All your finances in your pocket."
        src2={mockup}
        alt2="wallet"
        subSection="Minimalistic,modern and fun design"
        fontNameH="Roboto"
        fontNameSH="Roboto"
        fontName="Roboto"
        colors={["#582CD8", "#9A7FE7", "#3C18A3", "#666666", "#FFFFFF"]}
        next="two"
        prev="four"
        screens="3 screens"
        tools={["Pen & Paper", "Artboat Studio Mockup", "Figma"]}
      ></ProjectPage>
    </>
  );
};

export default One;
