/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./code.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,700|Roboto:400,700" rel="stylesheet" />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer style={{
          textAlign: `center`,
          marginBottom: `2rem`,
        }}>
          <small>

            built with{" "}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              gatsby
            </a>
            <span style={{ margin: `0 0.5rem` }}> | </span>
            view{" "}
            <a
              href="https://github.com/phoebejhhong/phoebejhhong.github.io/tree/develop"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>
          </small>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
