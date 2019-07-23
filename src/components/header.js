import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.css";

const pink = "#E863A2";
const orange = "#F89B60";
const mint = "#019D93";
const blue = "#1885D8";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `
        radial-gradient(ellipse at bottom left, ${mint}, transparent),
        radial-gradient(ellipse at top left, ${pink}, transparent),
        radial-gradient(ellipse at top right, ${orange}, transparent),
        radial-gradient(ellipse at bottom right, ${blue}, transparent)
      `,
      backgroundSize: `100% 15rem`,
      backgroundColor: `white`,
      marginBottom: `1.45rem`,
      height: `15rem`,
      borderBottom: `1px solid black`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `7rem 0 4rem 0`,
      }}
    >
      <span
        className={`${headerStyles.badge} ${headerStyles.badgeTop}`}
      >
        <span role="img" aria-label="wave">👋</span> welcome to
      </span>
      <h1 className={headerStyles.title}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            padding: `0.5rem 1rem`,
            border: `2px solid black`,
            boxShadow: `4px 4px black`,
            fontStyle: `italic`,
            textTransform: `uppercase`,
            fontFamily: "roboto",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <span
        className={`${headerStyles.badge} ${headerStyles.badgeBottom}`}
      >
        's website <span role="img" aria-label="home">🏡</span>
      </span>
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
