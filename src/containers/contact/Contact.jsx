import React from "react";
import Email from "../../components/contact/Email";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="app__contact app__section">
      <h2 className="app__heading">
        Contact <span>Me</span>
      </h2>
      <Email />
    </section>
  );
};

export default Contact;
