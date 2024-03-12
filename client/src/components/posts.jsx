import React, { useState } from "react";
import PostItem from "./postitem";
import Thumbnail from "../images/Thumnail1.jpg";
import Thumbnail2 from "../images/Thumnail2.jpg";
import Thumbnail3 from "../images/Thumnail3.jpg";
import Thumbnail4 from "../images/Thumnail4.jpg";
import { DUMMY_POSTS } from "../data";

function Posts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
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
  );
}

export default Posts;
