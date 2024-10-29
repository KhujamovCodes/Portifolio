import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div class="contact-intro">
        <h2>Contact</h2>
        <p class="section-lead">
          Send me a message! Your email address will not be shared. Required
          fields are marked with a<span class="red-text">*</span>.
        </p>
      </div>

      <form class="contact-form" method="POST" action="/">
        <fieldset id="contact-form-name">
          <label for="name">
            Name<span class="red-text">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Khujamov"
            required
          />
        </fieldset>
        <fieldset id="contact-form-email">
          <label for="email">
            Email<span class="red-text">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="khujamovcodes@gmail.com"
            required
          />
        </fieldset>
        <fieldset id="contact-form-no-bots">
          <label for="bots">Please leave this field empty</label>
          <input
            type="text"
            name="bots"
            id="bots"
            placeholder="No bots allowed"
          />
        </fieldset>
        <fieldset id="contact-form-message">
          <label for="message">
            Message<span class="red-text">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Hi, how are you? Are you available to talk at 18:00 on the twelfth?"
            cols="30"
            rows="18"
            required
          ></textarea>
        </fieldset>
        <button id="contact-form-submit" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
