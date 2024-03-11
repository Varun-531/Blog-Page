import React, { useState } from "react";
import PostItem from "../components/postitem";
import Thumbnail from "../images/Thumnail1.jpg";
import Thumbnail2 from "../images/Thumnail2.jpg";
import Thumbnail3 from "../images/Thumnail3.jpg";
import Thumbnail4 from "../images/Thumnail4.jpg";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail,
    category: "Education",
    title: "How to learn web development",
    description: "Learn web development from scratch and become a pro web developer",
    authorId: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "Technology",
    title: "How to learn web development",
    description: "Learn web development from scratch and become a pro web developer",
    authorId: 3,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "Education",
    title: "How to learn web development",
    description: "Learn web development from scratch and become a pro web developer",
    authorId: 3,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "Education",
    title: "How to learn web development",
    description: "Learn web development from scratch and become a pro web developer",
    authorId: 3,
  },
];
function Posts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      {posts.map(({id,thumbnail,category,title,description,authorId}) => (
        <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID = {authorId} />
      ))}
    </section>
  );
}

export default Posts;
