import React from "react"
import { Link } from "gatsby"
import _ from "lodash.throttle"
import logo from "../img/logo.png"

import headerStyles from "./header.module.scss"

const Header = () => {
  const { header, title, navList, navItem, activeNavItem } = headerStyles

  // Nav opacity on scroll - throttled w/ lodash
  try {
    window.addEventListener(
      "scroll",
      _(() => {
        if (window.scrollY > 200) {
          document.querySelector("header").style.opacity = 0.9
        } else {
          document.querySelector("header").style.opacity = 1
        }
      }, 300)
    )
  } catch (err) {
    console.log("error message: ", err)
  }

  return (
    <header className={header}>
      <div>
        <Link className={title} to="/">
          <img src={logo} alt="TA Marsh Roofing" />
        </Link>
      </div>
      <nav>
        <ul className={navList}>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
