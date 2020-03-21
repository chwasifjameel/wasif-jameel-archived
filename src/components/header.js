import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
const Header = ({ siteTitle }) => (
  <header className="background-color">
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
      className="ml-5"
    >
      <Link
        to="/"
        style={{
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: 70,
            height: 70,
            borderRadius: 35,
          }}
        >
          <Image src="logo.png" />
        </div>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
