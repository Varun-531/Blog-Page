import React from "react";
import { useState } from "react";
import { DUMMY_POSTS } from "../data";
import { Link } from "react-router-dom";

function Dashboard() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard_container">
          {
            posts.map(post =>{
              return <article key={post.id} className="dashboard_post">
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${post.id}`} className="btn sm">View</Link>
                  <Link to={`/posts/${post.id}/edit`} className="btn primary">Edit</Link>
                  <Link to={`/posts/${post.id}/delete`} className="btn danger">Delete</Link>
                </div>
              </article>
            })
          }
        </div>
      ) : (
        <h2 className="center">you have no posts yet </h2>
      )}
    </section>
  );
}

export default Dashboard;
