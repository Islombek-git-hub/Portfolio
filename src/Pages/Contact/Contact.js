import React, { useRef, useState } from "react";

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
// import Example from "../../components/Example";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const lightValue = useSelector((state) => state.light);
  const [inp_name, setInp_name] = useState("");
  const [inp_email, setInp_email] = useState("");
  const [inp_tel, setInp_tel] = useState("");
  const [inp_message, setInp_message] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7htmiww",
        "template_90oh6tu",
        form.current,
        "j2JVl3MimnPyN8MQ5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInp_name("");
    setInp_email("");
    setInp_tel("");
    setInp_message("");
    alert("xabaringiz yuborildi");
  };
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
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div>
              <input
                type="text"
                className="form-input name"
                placeholder="ISM..."
                name="name"
                value={inp_name}
                onChange={(e) => {
                  setInp_name(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-input email"
                placeholder="EMAIL..."
                name="email"
                value={inp_email}
                onChange={(e) => {
                  setInp_email(e.target.value);
                }}
              />
            </div>
            <input
              type="text"
              className="form-input telNumber"
              placeholder="Tel..."
              name="tel"
              value={inp_tel}
              onChange={(e) => {
                setInp_tel(e.target.value);
              }}
            />

            <textarea
              rows="7"
              className="form-input"
              placeholder="XABAR..."
              name="message"
              value={inp_message}
              onChange={(e) => {
                setInp_message(e.target.value);
              }}
            ></textarea>
            <button
              className={`button ${lightValue ? "resume-day" : "resume-night"}`}
            >
              <span>YUBORISH</span>
              <span>
                <RiMailSendLine />
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
