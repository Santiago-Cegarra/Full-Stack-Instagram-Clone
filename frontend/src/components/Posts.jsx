import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const { posts } = useSelector(store => store.post);

  return (
    <div>
      {posts.map(post => (
        // Ahora solo pasamos postId en lugar de post completo
        <Post key={post._id} postId={post._id} />
      ))}
    </div>
  );
};

export default Posts;
