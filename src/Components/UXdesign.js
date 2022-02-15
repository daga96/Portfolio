import React from "react";
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

const UXdesign = () => {
  return (
    <div className="uxMain ">
      <h3 className="sectionTitle" id="titleSec">
        UX Challenge
      </h3>
      <div className="gallery">
        <div className="gallery-item">
          <img
            className="gallery-image"
            src={wallet}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">01</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Wallet App</span>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img
            className="gallery-image"
            src={payment}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">02</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Payment Screen</span>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <img
            className="gallery-image"
            src={profile}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">03</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Social Profile</span>
            </div>
          </div>
        </div>
        <div className="gallery-item">
          <img
            className="gallery-image"
            src={dnd}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">04</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Landing Page</span>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img
            className="gallery-image"
            src={zeus}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">05</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Product Page</span>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img
            className="gallery-image"
            src={settings}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">06</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Settings Page</span>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img
            className="gallery-image"
            src={music}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">07</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Music Player</span>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img
            className="gallery-image"
            src={signin}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">08</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Sign In</span>
            </div>
          </div>
        </div>

        <div className="gallery-item">
          <img
            className="gallery-image"
            src={mis}
            alt="product page for watch"
          />
          <div className="overlay">
            <div className="textPhoto">
              <span className="number">09</span>
              <span className="titleSmall">UX Challenge</span>
              <span className="pieceTitle">Others</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXdesign;
