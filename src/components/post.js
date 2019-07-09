import React from "react"
import { Link } from "gatsby";
import PropTypes from "prop-types"

import postStyles from "./post.module.css";

const Post = ({ data }) => {
  return (
    <>
      <div className={postStyles.titleWrapper}>
        <Link to={data.frontmatter.slug} className={postStyles.title}><h1>{data.frontmatter.title}</h1></Link>
        <span className={postStyles.date}>{data.frontmatter.date}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </>
  )
};

export default Post;

Post.propTypes = {
  data: PropTypes.object,
}
