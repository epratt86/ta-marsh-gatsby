import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Form from "../components/ContactForm"

import ContactStyles from "./contact.module.scss"

const ContactPage = () => {
  const { contact, banner, card, row, form } = ContactStyles
  return (
    <Layout>
      <Head title="Contact" />
      <section id={contact}>
        <div className={banner}>
          <div className="container">
            <h1>Contact Us</h1>
            <h4>Need some assistance? We can help</h4>
          </div>
        </div>
        <div className="container">
          <div className={row}>
            <div className={card}>
              <h2>Get in touch</h2>
              <p>We offer FREE initial consultations to all new clients</p>
              <h2>Address</h2>
              <p>PO Box 925 Jamul, CA 91935</p>
              <h2>Phone</h2>
              <a href="tel:619-669-1600">(619) 619-669-1600</a>
            </div>
            <div className={form}>
              <h3>How Can We Help?</h3>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
