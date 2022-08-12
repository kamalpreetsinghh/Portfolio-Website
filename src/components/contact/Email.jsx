import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  let isValidated = false;

  const form = useRef();

  const handleNameChange = (e) => {
    let name = e.target.value;
    setName(name);

    if (name.trim() === "") setNameError("Name cannot be left blank");
    else setNameError("");
  };

  const handleEmailChange = (e) => {
    let email = e.target.value;
    setEmail(e.target.value);

    if (email.trim() === "") setEmailError("Email cannot be left blank");
    else setEmailError("");
  };

  const handleMessageChange = (e) => {
    let message = e.target.value;
    setMessage(e.target.value);

    if (message.trim() === "") setMessageError("Message cannot be left blank");
    else setMessageError("");
  };

  const validateEmail = () => {
    if (name.trim() === "") setNameError("Name cannot be left blank");
    else setNameError("");

    if (email.trim() === "") setEmailError("Email cannot be left blank");
    else setEmailError("");

    if (message.trim() === "") setMessageError("Message cannot be left blank");
    else setMessageError("");

    isValidated =
      name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    validateEmail();
    if (!isValidated) return;
    console.log("Email Sent");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEKEY,
        process.env.REACT_APP_TEMPLATEKEY,
        form.current,
        process.env.REACT_APP_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="app__contact-div">
      <form
        className="app__contact-email"
        autoComplete="off"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="app__contact-input"
          placeholder="Your Name"
        />
        <p className="error-text">{nameError}</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="app__contact-input"
          placeholder="Your Email"
        />
        <p className="error-text">{emailError}</p>
        <textarea
          type="text"
          name="message"
          value={message}
          onChange={handleMessageChange}
          className="app__contact-input"
          placeholder="Message"
          rows="8"
        />
        <p className="error-text">{messageError}</p>
        <button type="submit" className="app__button app__contact-button">
          Send Message <EmailIcon />
        </button>
      </form>
    </div>
  );
};

export default Email;
