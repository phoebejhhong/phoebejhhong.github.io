import React from "react"
import { graphql } from "gatsby"
import Post from "../components/post";
import Layout from "../components/layout";

const PostPage = ({ data }) => {
  return <Layout><Post data={data.markdownRemark} /></Layout>
};

export default PostPage;

export const postBySlugQuery = graphql`
  query postBySlugQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
        keywords
      }
    }
}`
