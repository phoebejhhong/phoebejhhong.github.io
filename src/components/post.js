import React from "react"
import PropTypes from "prop-types"

const Post = ({ data }) => {
  return (
    <>
      <h1>{data.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </>
  )
};

export default Post;

Post.propTypes = {
  data: PropTypes.object,
}
