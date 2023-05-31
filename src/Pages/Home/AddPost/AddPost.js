import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const imageHostKey = process.env.REACT_APP_imgbb_key;

const AddPost = () => {
  const [postDetail, setPostDetail] = useState("");
  const [image, setImage] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!image) {
      return alert("Please add an image!");
    }
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const data = {
            postDetail,
            image: imgData.data.url,
            userName: user?.displayName,
            userEmail: user?.email,
            userPhoto: user?.photoURL,
          };
          console.log("data", data);

          fetch("http://localhost:5005/addPost", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Post added successfully");
                e.target.reset();
                navigate("/media");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          toast.error("Image couldn't upload");
        }
      });
  };
  return (
    <section className="max-w-3xl mx-auto my-5 p-5 bg-base-300">
      <form onSubmit={handleAddPost}>
        <textarea
          placeholder="What's on your mind?"
          onBlur={(e) => setPostDetail(e.target.value)}
          className="textarea textarea-bordered textarea-lg w-full "
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="file-input file-input-bordered w-full "
        />
        <div className="flex flex-row-reverse">
          <input type="submit" value="Submit" className="btn   my-2 " />
        </div>
      </form>
    </section>
  );
};

export default AddPost;
