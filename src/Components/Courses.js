import React from "react";
import "./Courses.css";
import { SectionTitle, SubTitle } from "../UXPages/Layout";

const Courses = () => {
  return (
    <div className="coursesMain" id="courses">
      <SectionTitle>Courses</SectionTitle>

      <div className="contentWrap">
        <div className="contentLeft">
          <SubTitle>Offline and Univeristy Courses</SubTitle>
          <ul className="coursesList">
            <li>
              IT Essentials: PC Hardware and Software
              <span className="institutionName">Cisco Networking Academy</span>
              <span className="date">Jun 2014</span>
            </li>
            <li>
              Graphic design - vector and 3D graphics
              <span className="institutionName">Oswiata i Biznes</span>
              <span className="date">Mar 2015</span>
            </li>
            <li>
              Algorithms
              <span className="date">Fall 2019</span>
            </li>
            <li>
              Data Structure
              <span className="date">Spring 2019</span>
            </li>
            <li>
              Software Engineering
              <span className="date">Fall 2019</span>
            </li>
            <li>
              Human Computer Interaction
              <span className="date">Fall 2021</span>
            </li>
          </ul>
        </div>
        <div className="contentRight">
          <h4 className="subTitle">Online Courses and Certifications</h4>
          <ul className="coursesList">
            <li>
              <a
                href="https://www.hackerrank.com/certificates/57822a330163"
                target="_blank"
                rel="noreferrer"
              >
                JavaScript(Basic and Intermediate)
              </a>
              <span className="institutionName">HackerRank</span>

              <span className="date"> Jan 2022</span>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/certification/fccd46ad565-3ccc-47ea-b2a3-7dbf369aaa06/responsive-web-design"
                target="_blank"
                rel="noreferrer"
              >
                Responsive Web Design
              </a>
              <span className="institutionName"> freeCodeCamp</span>
              <span className="date">Feb 2022</span>
            </li>
            <li>
              <a
                href="https://www.studysection.com/users/socialMedia/NDkyMjk4/ZGFnYWx1azk2QGdtYWlsLmNvbQ=="
                target="_blank"
                rel="noreferrer"
              >
                React 16.x (Foundation)
              </a>
              <span className="institutionName">StudySection</span>
              <span className="date">Feb 2022</span>
            </li>
            <li>
              <a
                href="https://freecodecamp.org/certification/fccd46ad565-3ccc-47ea-b2a3-7dbf369aaa06/javascript-algorithms-and-data-structures"
                target="_blank"
                rel="noreferrer"
              >
                JavaScript Algorithms and Data Structures
              </a>
              <span className="institutionName"> freeCodeCamp</span>
              <span className="date">Feb 2022</span>
            </li>
            <li>
              <a
                href="https://www.futurelearn.com/certificates/gtp4fcc"
                target="_blank"
                rel="noreferrer"
              >
                Digital Skills: User Experience
              </a>
              <span className="institutionName">Accenture</span>
              <span className="date">Feb 2022</span>
            </li>
            <li>
              <a
                href="https://www.studysection.com/users/socialMedia/NDkyMjg4/ZGFnYWx1azk2QGdtYWlsLmNvbQ=="
                target="_blank"
                rel="noreferrer"
              >
                CSS (Foundation and Advanced)
              </a>
              <span className="institutionName">StudySection</span>
              <span className="date">Feb 2022</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
