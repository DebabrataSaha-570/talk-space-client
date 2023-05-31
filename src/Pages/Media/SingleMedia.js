import React from "react";

const SingleMedia = (props) => {
  const { postDetail, image, userName, userPhoto } = props.post;
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
    </div>
  );
};

export default SingleMedia;
