import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const { content } = layoutStyles
  return (
    <div>
      <Header />
      <div className={content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
