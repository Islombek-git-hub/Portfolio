import React from "react";
import NavLinks from "../../components/Navlinks/NavLinks";
import "./About.css";
import { useSelector } from "react-redux";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Example from "../../components/Progress/Example";
import { FaBriefcase } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const education = [
  {
    date: "2005 - 2014",
    edu: "maktab",
    desc: "Farg'ona viloyati, Oltiariq tumani, 5-umumiy o'rta ta'lim maktabi.",
  },
  {
    date: "2014 - 2017",
    edu: "kollej",
    desc: "Farg'ona viloyati, Oltiariq tumani, Oltiariq avtomibil yo'llari k.h.k.",
  },
  {
    date: "2018 - ...",
    edu: "universitet",
    desc: "TATU 'Telekommunikatsiya texnologiyalari' fakulteti.",
  },
];
const experience = [
  {
    date: "2022",
    edu: "SoffStudy",
    desc: "Stajor.",
  },
];

const skills = [
  { texnology: "HTML", percent: 75 },
  { texnology: "CSS", percent: 70 },
  { texnology: "SCSS", percent: 65 },
  { texnology: "Bootstrap", percent: 85 },
  { texnology: "JavaScript", percent: 75 },
  { texnology: "JQuery", percent: 65 },
  { texnology: "ReactJs", percent: 75 },
  { texnology: "NextJs", percent: 75 },
  { texnology: "Redux", percent: 55 },
  { texnology: "MaterialUI", percent: 75 },
  { texnology: "Git", percent: 50 },
  { texnology: "GitHub", percent: 50 },
];
const About = () => {
  const lightValue = useSelector((state) => state.light);

  return (
    <div className={`about ${lightValue ? "day" : "night"}`}>
      <div className="container">
        <h1 className="title">
          <span>o'zim</span> haqimda
        </h1>
        <div className="about-body">
          <h2>shaxsiy ma'lumotlar</h2>
          <div className="personal-infos">
            <ul className="personal-infos-left">
              <li>
                <span>FIO:</span> Oribjonov Islombek Umidjon o'g'li
              </li>
              <li>
                <span>Tug'ilgan sana:</span> 30.10.1998
              </li>
              <li>
                <span>Kasbi:</span> Hozirda talaba
              </li>
              <li>
                <span>Ko'nikma:</span> Front-End(React)
              </li>
              <li>
                <span>Manzil:</span> Farg'ona viloyati, Oltiariq tumani
              </li>
              <li>
                <span>Telefon:</span> +998(90)994-01-97
              </li>
              <li>
                <span>Email:</span> islombekoribjonov3@gmail.com
              </li>
            </ul>
            <ul className="personal-infos-right">
              <li>
                <div>
                  <h1>
                    6<span>+</span>
                  </h1>
                  <p>
                    oy <br /> Tajriba
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h1>
                    10<span>+</span>
                  </h1>
                  <p>
                    Shaxsiy <br /> proektlar
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <h2>ko'nikmalar</h2>
          <div className="skill">
            {skills.map((skill) => {
              return (
                <Example label={skill.texnology}>
                  <CircularProgressbar
                    styles={buildStyles({
                      textColor: "#72b626",
                      pathColor: "#72b626",
                      trailColor: "#fff",
                    })}
                    value={skill.percent}
                    text={`${skill.percent}%`}
                  />
                </Example>
              );
            })}
          </div>
        </div>
        {/* EXPERIENCE & EDUCATION */}
        <div className="experience-education">
          <h2>ta'lim va tajriba</h2>{" "}
          <div className="education">
            {education.map((a, i) => {
              return (
                <div key={i + 1000000} className="ee-box">
                  <div className="ee-box-left">
                    <span>
                      <FaBook />
                    </span>
                    <div></div>
                  </div>
                  <span className="ee-date">{a.date}</span>
                  <h3>{a.edu}</h3>
                  <p>{a.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="experience">
            {experience.map((a, i) => {
              return (
                <div key={i + 1000000} className="ee-box">
                  <div className="ee-box-left">
                    <span>
                      <FaBriefcase />
                    </span>
                    <div></div>
                  </div>
                  <span className="ee-date">{a.date}</span>
                  <h3>{a.edu}</h3>
                  <p>{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <NavLinks />
    </div>
  );
};

export default About;
