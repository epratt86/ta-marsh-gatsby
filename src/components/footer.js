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
            <p>TA Marsh Roofing © {year}</p>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="https://www.epratt.net"
              target="_blank"
              style={{ marginTop: "2rem" }}
            >
              site by ePratt.net
            </a>
          </div>

          <div className={footerStyles.col}>
            <p>PO Box 925 </p>
            <p>Jamul, CA 91935</p>
            <p>(619) 669-1600</p>
            <p>CA #440346</p>
            <p>AZ #150919</p>
            <p>NV #0045850</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
