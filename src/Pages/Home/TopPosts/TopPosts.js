import React, { useEffect, useState } from "react";
import SingleMedia from "../../Media/SingleMedia";
const TopPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/allPosts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <section>
      <h3 className="max-w-3xl mx-auto text-2xl my-3">Popular Posts</h3>
      <div className="max-w-3xl mx-auto my-5 ">
        {posts.map((post) => (
          <SingleMedia key={post._id} post={post}></SingleMedia>
        ))}
      </div>
    </section>
  );
};

export default TopPosts;
