import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Phoebe Hong`]} />
    <h1>Hey there,</h1>
    <p>I code for web, mostly with React.</p>
    <p>You can find me <a href="https://github.com/phoebejhhong" target="_blank" rel="noopener noreferrer">@phoebejhhong</a> on github.</p>
  </Layout>
)

export default IndexPage
