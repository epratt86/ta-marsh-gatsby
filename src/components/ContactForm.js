import React from "react"
import formStyles from "./ContactForm.module.scss"

const ContactForm = () => {
  const { textFields, textInput, submitBtn } = formStyles

  return (
    <form>
      <div className={textFields}>
        <input
          type="text"
          className={textInput}
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          className={textInput}
          placeholder="Email Address"
          name="email"
        />
        <input
          type="text"
          className={textInput}
          placeholder="Phone Number"
          name="phone"
        />
        <textarea
          className={textInput}
          placeholder="Enter Message"
          name="message"
        />
        <button type="submit" className={submitBtn}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
