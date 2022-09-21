import React from "react";
import s from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("xoqbeovb");

  return (
    <div className={s.container} id="contact">
      <div className={s.info}>
        <h1>How can we help?</h1>
        <p>
          We are eager to hear from you. Please fill in the form below and one
          of our staff member will contact you shortly. Thank you.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>FIRST NAME</label>
        <input id="name" type="text" name="name" />
        <label>EMAIL ADDRESS</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label>WRITE YOUR MESSAGE</label>
        <input id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        {state.succeeded ? <p>¡Thanks for your interest!</p> : null}
      </form>
    </div>
  );
}
export default Contact;
