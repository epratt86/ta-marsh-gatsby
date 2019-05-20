import React from "react"
import { Link } from "gatsby"
import { FaArrowRight, FaHandshake, FaHome, FaHammer } from "react-icons/fa"
import Layout from "../components/layout"
import Head from "../components/head"
import Testimonials from "../components/Testimonials"
import ContactForm from "../components/ContactForm"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const { btn, cta, callToAction, strip, section, contact } = indexStyles

  return (
    <Layout>
      <Head title="Home" />
      {/* Call To Action */}
      <section id={cta}>
        <div className={callToAction}>
          <h1>
            Quality Roofing San Diegan's <br /> have come to Rely Upon
          </h1>
          <h4 style={{ marginBottom: "3rem" }}>
            Our experience as a Roofing, General and Prime Contractor as well as
            Forensic Consultant/Expert Witness provides a wealth of knowledge to
            assist you in your roofing construction, consulting projects or
            cases.
          </h4>
          <Link to="/about" className={btn}>
            Find Out More <FaArrowRight />
          </Link>
        </div>
      </section>
      {/* 3 col section */}
      <div className="container">
        <h2>Welcome to TA Marsh Roofing</h2>
        <section id={strip}>
          <div className={section}>
            <FaHandshake size={70} style={{ marginTop: "10px" }} />
            <h3>Trusted Professionals</h3>
            <p>
              Is your home suffering from a leaking roof or are most of the
              shingles badly worn or damaged? You are in urgent need of
              experienced and reliable roof repairs. TA Marsh Roofing has clear
              contracts and performs reliable and affordable roofing repairs for
              all residents of the San Diego, CA area.
            </p>
          </div>
          <div className={section} style={{ margin: "0 1rem" }}>
            <FaHome size={70} />
            <h3>Results You Can Rely On</h3>
            <p>
              An easy choice for any respectful & reputable roofing needs. Our
              roofing contractors are well trained and prepared to meet all of
              your expectations and requirements. With our company you will
              spend less than you think and the final results will be more than
              desirable for you.
            </p>
          </div>
          <div className={section}>
            <FaHammer size={70} />
            <h3>Quality Guaranteed</h3>
            <p>
              We maintain a staff of skilled roofers, sheet metal, carpenters
              and inspectors for construction defect and non litigation
              inspections. We provide services for Commercial, Industrial and
              Residential projects. Our areas of service include California,
              Arizona and Nevada.
            </p>
          </div>
        </section>
      </div>
      <Testimonials />
      <div id={contact} className="bg-primary">
        <div className="container">
          <h5 style={{ paddingTop: "2rem" }}>We Offer FREE Consultations</h5>
          <h6 style={{ paddingBottom: "2rem" }}>
            Fill out this form to get in touch
          </h6>
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
