import React from "react";
import { Link } from "react-router-dom";
import "./UXdesign.css";
import wallet from "../wallet.png";
import payment from "../payment.png";
import profile from "../profile.png";
import dnd from "../dnd.png";
import zeus from "../zeus.png";
import settings from "../settings.png";
import music from "../music.png";
import signin from "../signin.png";
import mis from "../mis.png";
import { GalleryItem } from "../UXPages/Layout";

const UXdesign = () => {
  return (
    <div className="uxMain ">
      <h3 className="sectionTitle" id="titleSec">
        UX Challenge
      </h3>
      <p>Some of the designs I created for the 30 Day UX Challenge.</p>

      <div className="gallery">
        <GalleryItem
          src={wallet}
          alt="Financial App"
          number="01"
          title="Wallet App"
          link="one"
        ></GalleryItem>
        <GalleryItem
          src={payment}
          alt="Payment and Checkout Screen"
          number="02"
          title="Pay Screen"
          link="two"
        ></GalleryItem>
        <GalleryItem
          src={profile}
          alt="Social Profile"
          number="03"
          title="Social Profile"
          link="three"
        ></GalleryItem>
        <GalleryItem
          src={dnd}
          alt="Tabletop Landing Page"
          number="04"
          title="Landing Page"
          link="four"
        ></GalleryItem>
        <GalleryItem
          src={zeus}
          alt="Product page for watch"
          number="05"
          title="Product Page"
          link="five"
        ></GalleryItem>
        <GalleryItem
          src={settings}
          alt="Settings pages"
          number="06"
          title="Settings pages"
          link="six"
        ></GalleryItem>
        <GalleryItem
          src={music}
          alt="Music Player"
          number="07"
          title="Music Player"
          link="seven"
        ></GalleryItem>
        <GalleryItem
          src={signin}
          alt="Sign In Screen"
          number="08"
          title="Sign In"
        ></GalleryItem>
        <GalleryItem
          src={mis}
          alt="Other designs"
          number="09"
          title="Others"
        ></GalleryItem>
      </div>
    </div>
  );
};

export default UXdesign;
