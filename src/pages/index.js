import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const renderPost = ({ node }, i) => {
  return <Post key={i} data={node} />;
};

const IndexPage = () => (
  <StaticQuery
    query={postsQuery}
    render={(data) => {
      return (
        <Layout>
          <SEO title="Home" keywords={[`Phoebe Hong`]} />
          {data.allMarkdownRemark.edges.map(renderPost)}
        </Layout>
      );
    }}
  />
);

export default IndexPage;

const postsQuery = graphql`{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        frontmatter {
          title
          date
          slug
          keywords
        }
        html
      }
    }
  }
}`;
