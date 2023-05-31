import React, { useEffect, useState } from "react";
import SingleMedia from "./SingleMedia";

const Media = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/allPosts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="max-w-2xl mx-auto my-5 ">
      {posts.map((post) => (
        <SingleMedia key={post._id} post={post}></SingleMedia>
      ))}
    </div>
  );
};

export default Media;
