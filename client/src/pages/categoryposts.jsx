import React from 'react'
import { useState } from "react";
import PostItem from "../components/postitem";
import { DUMMY_POSTS } from '../data';

function Categoryposts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section>
    {posts.length > 0 ? (
      <div className="container posts_container">
        {posts.map(
          ({ id, thumbnail, category, title, description, authorId }) => (
            <PostItem
              key={id}
              postId={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorID={authorId}
            />
          )
        )}
      </div>
    ) : (
      <h1 className="center">No Posts Found</h1>
    )}
  </section>
  )
}

export default Categoryposts
