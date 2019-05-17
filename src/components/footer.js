import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <div className={footerStyles.row}>
          <div className={footerStyles.col}>
            <p>© {year} TA Marsh Roofing. All Rights Reserved</p>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className={footerStyles.col}>
            <p>Address: PO Box 925 </p>
            <p>Jamul, CA 91935</p>
            <p>Phone: (619) 669-1600</p>
            <p>License: CA #440346</p>
            <p>AZ #150919</p>
            <p style={{ marginBottom: "4rem" }}>NV #0045850</p>
            <a href="https://www.epratt.net" target="_blank">
              site by ePratt.net
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
