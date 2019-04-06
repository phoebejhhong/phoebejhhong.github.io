import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import background from "../images/memphis-green.png";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `url(${background})`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `7rem 0 4rem 0`,
      }}
    >
      <span
        style={{
          background: `#f0a0a1`,
          color: `white`,
          padding: `0.5rem`,
          position: `absolute`,
          left: `30%`,
          top: `10%`,
          textTransform: `uppercase`,
        }}
      >
        Hello, my name is
      </span>
      <h1 style={{ textAlign: `center`, fontSize: "3rem" }}>
        <Link
          to="/"
          style={{
            color: `black`,
            background: `white`,
            textDecoration: `none`,
            padding: `0 1rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
