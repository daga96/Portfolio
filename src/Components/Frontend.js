import React from "react";
import "./Frontend.css";
import tracktoon from "../assets/tracktoon.png";
import weather from "../assets/weather.png";
import she from "../assets/she.png";
import dash from "../assets/dash.png"
import not from "../assets/not.png";
import { SectionTitle } from "../UXPages/Layout";

const Frontend = () => {
  return (
    <div className="frontMain">
      <div className="contentWrap">
        <SectionTitle>Things I've Built</SectionTitle>
        <div className="project">
          <div className="projectImage">
            <a
             href="/"
              target="_blank"
              
            >
            <img src={not} alt="tracktoon" className="picture"></img>

            </a>
          </div>
          <div className="description">
            <h3 className="projectTitle">Admin Tool</h3>
            <i>Admin Dashboard for mobile game</i>
            <hr className="line"></hr>

            <span className="projectDescription">
             Advanced admin dashboard created using ReactJS, NodeJS, Koa and ChakraUI. 
             Allows to check user information, game data, send items to users, 
             reserve push notifications and emails and add notifications.
            </span>
            <ul className="projectTags">
              <li>#ChakraUI</li>
              <li>#Koa</li>
              <li>#JavaScript</li>
              <li>#ReactJS</li>
            </ul>
            <ul className="projectLinks">
             Internal Project
            </ul>
          </div>
        </div>
        <div className="project" id="reverse">
          <div className="projectImage">
            <a
              href="https://github.com/daga96/AdminTool"
              target="_blank"
              rel="noreferrer"
            >
              <img src={dash} alt="adminTool" className="picture"></img>
            </a>
          </div>
          <div className="description">
            <h3 className="projectTitle">Admin Tool </h3>
            <i>Admin Dashboard for Personal Project: In Progress</i>
            <hr className="line"></hr>

            <span className="projectDescription">
             Admin dashboard created using ReactJS, NodeJS, Koa and ChakraUI. 
             Allows to check user information, game data, send items to users, 
             reserve push notifications and emails and add notifications.
            </span>
            <ul className="projectTags">
              <li>#ChakraUI</li>
              <li>#Koa</li>
              <li>#JavaScript</li>
              <li>#ReactJS</li>
            </ul>
            <ul className="projectLinks">
            <li>
                <a
                  href="https://github.com/daga96/AdminTool"
                  target="_blank"
                >
                  <svg
                    id="githubLogo"
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.035 4.757C19.945 5.849 20.399 7.123 20.399 8.579C20.399 13.856 17.397 15.403 14.576 15.858C14.94 16.495 15.031 17.223 15.031 17.951V21.681C15.031 22.136 14.758 22.409 14.394 22.409C14.298 22.4103 14.2027 22.3924 14.1138 22.3563C14.0249 22.3202 13.9441 22.2666 13.8762 22.1988C13.8083 22.1309 13.7548 22.0501 13.7187 21.9612C13.6826 21.8722 13.6646 21.777 13.666 21.681V17.951C13.7139 17.5696 13.6732 17.1824 13.5469 16.8193C13.4206 16.4563 13.2122 16.1273 12.938 15.858L13.393 14.675C16.214 14.311 19.126 13.401 19.126 8.488C19.126 7.305 18.671 6.213 17.852 5.303L17.67 4.576C18.016 3.70405 18.0479 2.73885 17.76 1.846C17.306 1.936 16.396 2.119 14.85 3.211L14.303 3.301C12.1538 2.75527 9.90222 2.75527 7.75299 3.301L7.20599 3.211C5.56999 2.21 4.65999 1.937 4.20399 1.937C3.93099 2.847 3.93099 3.847 4.29399 4.667L4.11299 5.394C3.20299 6.304 2.74799 7.487 2.74799 8.579C2.74799 13.401 5.47799 14.402 8.47999 14.766L8.84399 15.949C8.29799 16.495 8.02499 17.223 8.11599 17.951V21.772C8.11734 21.868 8.09943 21.9632 8.06332 22.0522C8.02721 22.1411 7.97363 22.2219 7.90576 22.2898C7.83789 22.3576 7.7571 22.4112 7.66817 22.4473C7.57924 22.4834 7.48396 22.5013 7.38799 22.5C7.29202 22.5013 7.19675 22.4834 7.10781 22.4473C7.01888 22.4112 6.93809 22.3576 6.87022 22.2898C6.80235 22.2219 6.74877 22.1411 6.71266 22.0522C6.67655 21.9632 6.65864 21.868 6.65999 21.772V19.68C3.65799 20.317 2.47499 18.77 1.56499 17.588C1.10999 17.042 0.74599 16.587 0.29099 16.496C0.20099 16.405 -0.0730097 16.041 0.0179903 15.677C0.10899 15.313 0.47299 15.04 0.83799 15.222C1.74799 15.404 2.29299 16.132 2.83799 16.769C3.65799 17.861 4.47699 18.861 6.93299 18.316V17.952C6.84299 17.224 7.02399 16.496 7.38799 15.859C4.65799 15.313 1.47399 13.766 1.47399 8.58C1.47399 7.124 1.92899 5.85 2.83899 4.758C2.56599 3.485 2.65699 2.12 3.11199 1.028L3.56699 0.664001C3.74899 0.573001 5.02299 0.300001 7.65999 1.937C9.84034 1.39107 12.1216 1.39107 14.302 1.937C16.851 0.208001 18.216 0.480001 18.398 0.572001L18.853 0.936001C19.308 2.21 19.399 3.484 19.035 4.757V4.757Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project">
          <div className="projectImage">
            <a
              href="https://tracktoon-a462e.web.app/"
              target="_blank"
            >
              <img src={tracktoon} alt="tracktoon" className="picture"></img>
            </a>
          </div>
          <div className="description">
            <h3 className="projectTitle">Tracktoon</h3>
            <i>Campston Project</i>
            <hr className="line"></hr>

            <span className="projectDescription">
              Simple webtoon reading list made with React, implementing React
              Hooks and Context API. For scraping webtoons information Python
              Selenium and BeautifulSoup was used.
            </span>
            <ul className="projectTags">
              <li>#Webtoons</li>
              <li>#Python</li>
              <li>#JavaScript</li>
              <li>#ReactJS</li>
            </ul>
            <ul className="projectLinks">
              <li>
                <a
                  href="https://github.com/daga96/TrackToon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    id="githubLogo"
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.035 4.757C19.945 5.849 20.399 7.123 20.399 8.579C20.399 13.856 17.397 15.403 14.576 15.858C14.94 16.495 15.031 17.223 15.031 17.951V21.681C15.031 22.136 14.758 22.409 14.394 22.409C14.298 22.4103 14.2027 22.3924 14.1138 22.3563C14.0249 22.3202 13.9441 22.2666 13.8762 22.1988C13.8083 22.1309 13.7548 22.0501 13.7187 21.9612C13.6826 21.8722 13.6646 21.777 13.666 21.681V17.951C13.7139 17.5696 13.6732 17.1824 13.5469 16.8193C13.4206 16.4563 13.2122 16.1273 12.938 15.858L13.393 14.675C16.214 14.311 19.126 13.401 19.126 8.488C19.126 7.305 18.671 6.213 17.852 5.303L17.67 4.576C18.016 3.70405 18.0479 2.73885 17.76 1.846C17.306 1.936 16.396 2.119 14.85 3.211L14.303 3.301C12.1538 2.75527 9.90222 2.75527 7.75299 3.301L7.20599 3.211C5.56999 2.21 4.65999 1.937 4.20399 1.937C3.93099 2.847 3.93099 3.847 4.29399 4.667L4.11299 5.394C3.20299 6.304 2.74799 7.487 2.74799 8.579C2.74799 13.401 5.47799 14.402 8.47999 14.766L8.84399 15.949C8.29799 16.495 8.02499 17.223 8.11599 17.951V21.772C8.11734 21.868 8.09943 21.9632 8.06332 22.0522C8.02721 22.1411 7.97363 22.2219 7.90576 22.2898C7.83789 22.3576 7.7571 22.4112 7.66817 22.4473C7.57924 22.4834 7.48396 22.5013 7.38799 22.5C7.29202 22.5013 7.19675 22.4834 7.10781 22.4473C7.01888 22.4112 6.93809 22.3576 6.87022 22.2898C6.80235 22.2219 6.74877 22.1411 6.71266 22.0522C6.67655 21.9632 6.65864 21.868 6.65999 21.772V19.68C3.65799 20.317 2.47499 18.77 1.56499 17.588C1.10999 17.042 0.74599 16.587 0.29099 16.496C0.20099 16.405 -0.0730097 16.041 0.0179903 15.677C0.10899 15.313 0.47299 15.04 0.83799 15.222C1.74799 15.404 2.29299 16.132 2.83799 16.769C3.65799 17.861 4.47699 18.861 6.93299 18.316V17.952C6.84299 17.224 7.02399 16.496 7.38799 15.859C4.65799 15.313 1.47399 13.766 1.47399 8.58C1.47399 7.124 1.92899 5.85 2.83899 4.758C2.56599 3.485 2.65699 2.12 3.11199 1.028L3.56699 0.664001C3.74899 0.573001 5.02299 0.300001 7.65999 1.937C9.84034 1.39107 12.1216 1.39107 14.302 1.937C16.851 0.208001 18.216 0.480001 18.398 0.572001L18.853 0.936001C19.308 2.21 19.399 3.484 19.035 4.757V4.757Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://tracktoon-a462e.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    id="linkLogo"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 14V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H10M13.5 10.5L21 3L13.5 10.5ZM16 3H21V8L16 3Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="project" id="reverse">
          <div className="projectImage">
            <a
              href="https://weforecast-87f47.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={weather}
                alt="weather forecast app"
                className="picture"
              ></img>
            </a>
          </div>
          <div className="description">
            <h3 className="projectTitle">WeForecast</h3>
            <i>2021/2 HCI Course Project</i>
            <hr className="line"></hr>

            <span className="projectDescription">
              Weather Infomation Service application made for HCI course. The
              API used to get weather forecast information
            </span>
            <ul className="projectTags">
              <li>#Weather</li>
              <li>#API</li>
              <li>#JavaScript</li>
              <li>#ReactJS</li>
              <li>#HCI</li>
            </ul>
            <ul className="projectLinks">
              <li>
                <a
                  href="https://github.com/daga96/WeForecast"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.035 4.757C19.945 5.849 20.399 7.123 20.399 8.579C20.399 13.856 17.397 15.403 14.576 15.858C14.94 16.495 15.031 17.223 15.031 17.951V21.681C15.031 22.136 14.758 22.409 14.394 22.409C14.298 22.4103 14.2027 22.3924 14.1138 22.3563C14.0249 22.3202 13.9441 22.2666 13.8762 22.1988C13.8083 22.1309 13.7548 22.0501 13.7187 21.9612C13.6826 21.8722 13.6646 21.777 13.666 21.681V17.951C13.7139 17.5696 13.6732 17.1824 13.5469 16.8193C13.4206 16.4563 13.2122 16.1273 12.938 15.858L13.393 14.675C16.214 14.311 19.126 13.401 19.126 8.488C19.126 7.305 18.671 6.213 17.852 5.303L17.67 4.576C18.016 3.70405 18.0479 2.73885 17.76 1.846C17.306 1.936 16.396 2.119 14.85 3.211L14.303 3.301C12.1538 2.75527 9.90222 2.75527 7.75299 3.301L7.20599 3.211C5.56999 2.21 4.65999 1.937 4.20399 1.937C3.93099 2.847 3.93099 3.847 4.29399 4.667L4.11299 5.394C3.20299 6.304 2.74799 7.487 2.74799 8.579C2.74799 13.401 5.47799 14.402 8.47999 14.766L8.84399 15.949C8.29799 16.495 8.02499 17.223 8.11599 17.951V21.772C8.11734 21.868 8.09943 21.9632 8.06332 22.0522C8.02721 22.1411 7.97363 22.2219 7.90576 22.2898C7.83789 22.3576 7.7571 22.4112 7.66817 22.4473C7.57924 22.4834 7.48396 22.5013 7.38799 22.5C7.29202 22.5013 7.19675 22.4834 7.10781 22.4473C7.01888 22.4112 6.93809 22.3576 6.87022 22.2898C6.80235 22.2219 6.74877 22.1411 6.71266 22.0522C6.67655 21.9632 6.65864 21.868 6.65999 21.772V19.68C3.65799 20.317 2.47499 18.77 1.56499 17.588C1.10999 17.042 0.74599 16.587 0.29099 16.496C0.20099 16.405 -0.0730097 16.041 0.0179903 15.677C0.10899 15.313 0.47299 15.04 0.83799 15.222C1.74799 15.404 2.29299 16.132 2.83799 16.769C3.65799 17.861 4.47699 18.861 6.93299 18.316V17.952C6.84299 17.224 7.02399 16.496 7.38799 15.859C4.65799 15.313 1.47399 13.766 1.47399 8.58C1.47399 7.124 1.92899 5.85 2.83899 4.758C2.56599 3.485 2.65699 2.12 3.11199 1.028L3.56699 0.664001C3.74899 0.573001 5.02299 0.300001 7.65999 1.937C9.84034 1.39107 12.1216 1.39107 14.302 1.937C16.851 0.208001 18.216 0.480001 18.398 0.572001L18.853 0.936001C19.308 2.21 19.399 3.484 19.035 4.757V4.757Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://weforecast-87f47.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 14V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H10M13.5 10.5L21 3L13.5 10.5ZM16 3H21V8L16 3Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="project">
          <div className="projectImage">
            <a
              href="https://github.com/daga96/She-Ra-Jump"
              target="_blank"
              rel="noreferrer"
            >
              <img src={she} alt="tracktoon" className="picture"></img>
            </a>
          </div>
          <div className="description">
            <h3 className="projectTitle">She-ra Run Game</h3>
            <i>Personal Project</i>
            <hr className="line"></hr>

            <span className="projectDescription">
              Google Chrome T-Rex inspired game. All the characters are inspired
              by the 2018 She-Ra and the Princesses of Power Series.
            </span>
            <ul className="projectTags">
              <li>#SPOP</li>
              <li>#MiniGame</li>
              <li>#JavaScript</li>
            </ul>
            <ul className="projectLinks">
              <li>
                <a
                  href="https://github.com/daga96/She-Ra-Jump"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.035 4.757C19.945 5.849 20.399 7.123 20.399 8.579C20.399 13.856 17.397 15.403 14.576 15.858C14.94 16.495 15.031 17.223 15.031 17.951V21.681C15.031 22.136 14.758 22.409 14.394 22.409C14.298 22.4103 14.2027 22.3924 14.1138 22.3563C14.0249 22.3202 13.9441 22.2666 13.8762 22.1988C13.8083 22.1309 13.7548 22.0501 13.7187 21.9612C13.6826 21.8722 13.6646 21.777 13.666 21.681V17.951C13.7139 17.5696 13.6732 17.1824 13.5469 16.8193C13.4206 16.4563 13.2122 16.1273 12.938 15.858L13.393 14.675C16.214 14.311 19.126 13.401 19.126 8.488C19.126 7.305 18.671 6.213 17.852 5.303L17.67 4.576C18.016 3.70405 18.0479 2.73885 17.76 1.846C17.306 1.936 16.396 2.119 14.85 3.211L14.303 3.301C12.1538 2.75527 9.90222 2.75527 7.75299 3.301L7.20599 3.211C5.56999 2.21 4.65999 1.937 4.20399 1.937C3.93099 2.847 3.93099 3.847 4.29399 4.667L4.11299 5.394C3.20299 6.304 2.74799 7.487 2.74799 8.579C2.74799 13.401 5.47799 14.402 8.47999 14.766L8.84399 15.949C8.29799 16.495 8.02499 17.223 8.11599 17.951V21.772C8.11734 21.868 8.09943 21.9632 8.06332 22.0522C8.02721 22.1411 7.97363 22.2219 7.90576 22.2898C7.83789 22.3576 7.7571 22.4112 7.66817 22.4473C7.57924 22.4834 7.48396 22.5013 7.38799 22.5C7.29202 22.5013 7.19675 22.4834 7.10781 22.4473C7.01888 22.4112 6.93809 22.3576 6.87022 22.2898C6.80235 22.2219 6.74877 22.1411 6.71266 22.0522C6.67655 21.9632 6.65864 21.868 6.65999 21.772V19.68C3.65799 20.317 2.47499 18.77 1.56499 17.588C1.10999 17.042 0.74599 16.587 0.29099 16.496C0.20099 16.405 -0.0730097 16.041 0.0179903 15.677C0.10899 15.313 0.47299 15.04 0.83799 15.222C1.74799 15.404 2.29299 16.132 2.83799 16.769C3.65799 17.861 4.47699 18.861 6.93299 18.316V17.952C6.84299 17.224 7.02399 16.496 7.38799 15.859C4.65799 15.313 1.47399 13.766 1.47399 8.58C1.47399 7.124 1.92899 5.85 2.83899 4.758C2.56599 3.485 2.65699 2.12 3.11199 1.028L3.56699 0.664001C3.74899 0.573001 5.02299 0.300001 7.65999 1.937C9.84034 1.39107 12.1216 1.39107 14.302 1.937C16.851 0.208001 18.216 0.480001 18.398 0.572001L18.853 0.936001C19.308 2.21 19.399 3.484 19.035 4.757V4.757Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/daga96/She-Ra-Jump"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 14V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H10M13.5 10.5L21 3L13.5 10.5ZM16 3H21V8L16 3Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
