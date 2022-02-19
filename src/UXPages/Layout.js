import React from "react";
import "./Layout.css";

export const SectionTitle = ({ children }) => {
  return <h3 className="sectionTitle">{children}</h3>;
};

export const SubTitle = ({ children }) => {
  return <h4 className="subTitle">{children}</h4>;
};

export const GalleryItem = ({ src, alt, number, title, link }) => {
  return (
    <div className="gallery-item">
      <img className="gallery-image" src={src} alt={alt} />
      <a href={link}>
        <div className="overlay">
          <div className="textPhoto">
            <span className="number">{number}</span>
            <span className="titleSmall">UX Challenge</span>
            <span className="pieceTitle">{title}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export const ProjectPage = ({
  src,
  src1,
  alt,
  number,
  title,
  children,
  text,
  subText,
  src2,
  alt2,
  subSection,
  fontNameH,
  fontNameSH,
  fontName,
  colors,
  next,
  prev,
  screens,
  tools,
}) => {
  return (
    <div className="projectMain">
      <div className="projectWrapper">
        <div className="imageWrapper">
          <img src={src} alt={alt} className="mockupImage"></img>
        </div>
        <div className="projectDescr">
          <h3 className="uxTitle">UX Challenge {number}</h3>
          <hr className="separator"></hr>
          <div className="projectTitle">{title}</div>
          <ul className="tagList">
            {children.map(function (item) {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="descriptionWrap">
        <div className="detailedDescription">
          <div className="aboutPr">
            <SectionTitle>About the project</SectionTitle>
            <h4 className="subText">{subText}</h4>
            <div className="textDesc">{text}</div>
            <div className="uxDetails">
              <h4>Deliverables:</h4> {screens}
              <h4>Tools:</h4>{" "}
              <ul className="toolsList">
                {tools.map(function (item) {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mockupImg">
          <img src={src2} alt={alt2} className="imageBig"></img>
        </div>
      </div>
      <div className="fullClass">
        <img src={src1} alt={alt2} className="imageFull"></img>
      </div>
      <div className="visualIdentity">
        <SectionTitle>Visual Identity</SectionTitle>
        <div className="subSection">{subSection}</div>
        <div className="contentVisual">
          <div className="left">
            <SubTitle>TYPOGRAPHY</SubTitle>
            <span
              className="headerFont"
              style={{ fontFamily: fontNameH + ", sans-serif" }}
            >
              Aa {fontNameH}
            </span>
            <span
              className="subFont"
              style={{ fontFamily: fontNameH + ", sans-serif" }}
            >
              Aa {fontNameSH}
            </span>
            <span
              className="normalFont"
              style={{ fontFamily: fontNameH + ", sans-serif" }}
            >
              Aa {fontName}
            </span>
          </div>
          <div className="right">
            <SubTitle>COLORS</SubTitle>
            {colors.map(function (item) {
              return <button style={{ backgroundColor: item }}>{item}</button>;
            })}
          </div>
        </div>
        <div className="navigationLinks">
          <a href={prev} className="linkClass">
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0211 4.71596C14.0211 4.58335 13.9684 4.45618 13.8746 4.36241C13.7809 4.26864 13.6537 4.21596 13.5211 4.21596H1.72807L4.87507 1.06996C4.96896 0.976077 5.0217 0.848739 5.0217 0.715964C5.0217 0.583188 4.96896 0.45585 4.87507 0.361964C4.78119 0.268077 4.65385 0.215332 4.52107 0.215332C4.3883 0.215332 4.26096 0.268077 4.16707 0.361964L0.167072 4.36196C0.120509 4.40841 0.0835667 4.46358 0.0583601 4.52433C0.0331535 4.58508 0.0201788 4.6502 0.0201788 4.71596C0.0201788 4.78173 0.0331535 4.84685 0.0583601 4.9076C0.0835667 4.96834 0.120509 5.02352 0.167072 5.06996L4.16707 9.06996C4.26096 9.16385 4.3883 9.21659 4.52107 9.21659C4.65385 9.21659 4.78119 9.16385 4.87507 9.06996C4.96896 8.97608 5.0217 8.84874 5.0217 8.71596C5.0217 8.58319 4.96896 8.45585 4.87507 8.36196L1.72807 5.21596H13.5211C13.6537 5.21596 13.7809 5.16329 13.8746 5.06952C13.9684 4.97575 14.0211 4.84857 14.0211 4.71596Z"
                fill="white"
              />
            </svg>
            Prev
          </a>

          <a href={next} className="linkClass">
            Next
            <svg
              width="20"
              height="15"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0201721 4.71596C0.0201721 4.58336 0.0728505 4.45618 0.166619 4.36241C0.260387 4.26864 0.387564 4.21596 0.520172 4.21596H12.3132L9.16617 1.06996C9.07229 0.976077 9.01954 0.848739 9.01954 0.715964C9.01954 0.583188 9.07229 0.45585 9.16617 0.361964C9.26006 0.268077 9.3874 0.215332 9.52017 0.215332C9.65295 0.215332 9.78029 0.268077 9.87417 0.361964L13.8742 4.36196C13.9207 4.40841 13.9577 4.46359 13.9829 4.52433C14.0081 4.58508 14.0211 4.6502 14.0211 4.71596C14.0211 4.78173 14.0081 4.84685 13.9829 4.9076C13.9577 4.96834 13.9207 5.02352 13.8742 5.06996L9.87417 9.06996C9.78029 9.16385 9.65295 9.21659 9.52017 9.21659C9.3874 9.21659 9.26006 9.16385 9.16617 9.06996C9.07229 8.97608 9.01954 8.84874 9.01954 8.71596C9.01954 8.58319 9.07229 8.45585 9.16617 8.36196L12.3132 5.21596H0.520172C0.387564 5.21596 0.260387 5.16329 0.166619 5.06952C0.0728505 4.97575 0.0201721 4.84857 0.0201721 4.71596V4.71596Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
