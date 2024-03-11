import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./postauthor";

function postitem({postID,thumbnail,category,title,description,authorID}) {
  return <article className="post">
    <div className="post_thumbnail">
      <img src={thumbnail} alt={title} />
    </div>
    <div className="post_content">
      <Link to={`/posts/${postID}`}>
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <div className="posts_footer">
        <PostAuthor />
        <Link to={`posts/categories/${category}`}>{category}</Link>
      </div>
    </div>
  </article>;
}

export default postitem;                