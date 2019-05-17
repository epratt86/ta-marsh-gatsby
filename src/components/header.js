import React from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

import headerStyles from "./header.module.scss"

const Header = () => {
  const { header, title, navList, navItem, activeNavItem } = headerStyles

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
              to="/blog"
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
