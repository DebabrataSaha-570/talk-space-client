import React from "react";
import { Link } from "react-router-dom";

const SingleMedia = (props) => {
  const { postDetail, image, userName, userPhoto, _id } = props.post;
  return (
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
        <Link to={`/postDetail/${_id}`} className="btn btn-link">
          See Detail
        </Link>
      </div>
    </div>
  );
};

export default SingleMedia;
