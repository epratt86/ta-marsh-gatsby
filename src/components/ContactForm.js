import React from "react"
import formStyles from "./ContactForm.module.scss"

const ContactForm = () => {
  const { textFields, textInput, submitBtn } = formStyles

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <div className={textFields}>
        <input
          type="text"
          className={textInput}
          placeholder="Name"
          name="name"
          required
        />
        <input
          type="email"
          className={textInput}
          placeholder="Email Address"
          name="email"
          required
        />
        <input
          type="text"
          className={textInput}
          placeholder="Phone Number"
          name="phone"
          required
        />
        <textarea
          className={textInput}
          placeholder="Enter Message"
          name="message"
          required
        />
        <button type="submit" className={submitBtn}>
          Submit
        </button>
        <div data-netlify-recaptcha="true"> </div>
      </div>
    </form>
  )
}

export default ContactForm
