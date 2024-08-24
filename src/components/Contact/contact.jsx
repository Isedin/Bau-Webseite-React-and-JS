import React, { useRef } from "react";
import "./Contact.css";
import { contacts } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { EmailJSResponseStatus } from "@emailjs/browser";

const Contact = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });
      timeline.fromTo(
        ".contact_form",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 }
      );
      timeline.fromTo(
        ".option",
        { x: 100, opacity: 0 },
        { opacity: 1, stagger: 0.5, x: 0 }
      );
    },
    { scope: container }
  );
  return (
    <section id="contact" ref={container}>
      <div className="container">
        <div className="contact_form">
          <div className="contact_form_top">
            <h1 className="title">
              <span className="g-text">Schließen Sie sich uns an!!</span>
            </h1>
            <p className="text_muted">
              Wir bauen mit Präzision und Leidenschaft und schaffen Strukturen,
              die den Test der Zeit bestehen. So einfach ist das!
            </p>
          </div>
          <div className="contact_form_middle">
            <div className="row">
              <input
                type="text"
                placeholder="Vorname"
                name="firstname"
                className="control"
              />
              <input
                type="text"
                placeholder="Nachname"
                name="lastname"
                className="control"
              />
            </div>
            <div className="row">
              <input
                type="email"
                placeholder="Email Adresse"
                name="email"
                className="control"
              />
              <input
                type="tel"
                placeholder="Telefonnummer"
                name="Telefon"
                className="control"
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="control"
            ></textarea>
          </div>
          <div className="contact_form_bottom">
            <button
              className="btn btn_primary"
              onClick={() => {
                alert("Die Webseite befindet sich in Umbau!");
              }}
            >
              Absenden
            </button>
          </div>
        </div>
        <div className="contact_options">
          {contacts.map((contact, index) => (
            <div className="option" key={index}>
              <div className="icon_container">
                <a href={contact.href} target="_blank">
                  {contact.icon}
                </a>
              </div>
              <a href={contact.href}></a>
              <h3 className="name">{contact.name}</h3>
              <h4 className="text_muted">{contact.value}</h4>
              <div>
                <a
                  href={contact.href}
                  target="_blank"
                  className="btn btn_primary"
                >
                  {contact.buttonTitle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
