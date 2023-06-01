import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5005/postDetail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [id]);

  const { postDetail, image, userName, userEmail, userPhoto } = post;
  return (
    <div>
      <section className="max-w-3xl mx-auto">
        <div className="card  bg-base-200 shadow-xl my-5">
          <div className="card-body">
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-[3rem] rounded-full">
                  <img src={userPhoto} alt="user_photo" />
                </div>
              </div>
              <h2 className="card-title ml-2">{userName}</h2>
            </div>
            <p>{postDetail}</p>
          </div>
          <figure>
            <img src={image} alt="post_image" />
          </figure>
          <div className="card-actions justify-between py-3 px-4">
            <button className="btn btn-link ">Like</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostDetail;
