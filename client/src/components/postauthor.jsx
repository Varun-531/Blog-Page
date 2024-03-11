import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/Avatar2.jpg";

function postauthor() {
  return (
    <Link to={`/posts/users/shsh`} className="post_author">
      <div className="post_author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post_author-details">
        <h5>By: Varun</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
}

export default postauthor;
