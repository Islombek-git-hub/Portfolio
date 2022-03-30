import React from "react";
import { useSelector } from "react-redux";
import NavLinks from "../../components/Navlinks/NavLinks";
import "./Contact.css";
import { MdLocationPin } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import Example from "../../components/Example";

const Contact = () => {
  const lightValue = useSelector((state) => state.light);
  return (
    <div className={`contact ${lightValue ? "day" : "night"}`}>
      <div className="container">
        <h1 className="title">bog'lanish</h1>
        <div className="contact-body">
          <div className="contact-desc">
            <div className="cd-element">
              <MdLocationPin />
              <ul>
                <li>
                  <h3>MANZIL</h3>
                </li>
                <li>
                  <p>Farg'ona viloyati, Oltiariq tumani</p>
                </li>
              </ul>
            </div>
            <div className="cd-element">
              <MdPhone />
              <ul>
                <li>
                  <h3>TELEFON</h3>
                </li>
                <li>
                  <p>+998(90)994-01-97</p>
                </li>
              </ul>
            </div>
            <div className="cd-element">
              <MdAlternateEmail />
              <ul>
                <li>
                  <h3>EMAIL</h3>
                </li>
                <li>
                  <p>islombekoribjonov3@gmail.com</p>
                </li>
              </ul>
            </div>
            <ul className="social-links">
              <li>
                <a href="https://t.me/Islombek_30_10">
                  <div className={!lightValue ? "day" : "night"}>
                    <BsTelegram />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/islombek_0197/">
                  <div className={!lightValue ? "day" : "night"}>
                    <BsInstagram />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/Islombek-git-hub">
                  <div className={!lightValue ? "day" : "night"}>
                    <BsGithub />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div>
              <input
                type="text"
                className="form-input name"
                placeholder="ISM..."
              />
              <input
                type="text"
                className="form-input email"
                placeholder="EMAIL..."
              />
            </div>
            <Example />
            <textarea
              rows="7"
              className="form-input"
              placeholder="XABAR..."
            ></textarea>
            <button
              className={`button ${lightValue ? "resume-day" : "resume-night"}`}
            >
              <span>YUBORISH</span>
              <span>
                <RiMailSendLine className="form-input" />
              </span>
            </button>
          </form>
        </div>
      </div>
      <NavLinks />
    </div>
  );
};

export default Contact;
