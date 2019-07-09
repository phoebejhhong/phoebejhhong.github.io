import React from "react"
import { graphql } from "gatsby"
import Post from "../components/post";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PostPage = ({ data }) => {
  const postData = data.markdownRemark;
  return (
    <>
    <SEO title={postData.frontmatter.title} keywords={postData.frontmatter.keywords ? postData.frontmatter.keywords.split(" ") : []} />
    <Layout><Post data={postData} /></Layout>
    </>
  );
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
