import React, { useRef } from "react";
import { toast } from "react-hot-toast";

const ProfileModal = (props) => {
  const { email, name, university, address } = props.TSuser;

  const userNameRef = useRef();
  const userEmailRef = useRef();
  const universityRef = useRef();
  const addressRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userNameValue = userNameRef.current.value;
    const userEmailValue = userEmailRef.current.value;
    const universityValue = universityRef.current.value;
    const addressValue = addressRef.current.value;

    const userNewData = {
      name: userNameValue,
      email: userEmailValue,
      university: universityValue,
      address: addressValue,
    };
    console.log("userNewData", userNewData);

    fetch("http://localhost:5005/users", {
      method: "PUT",
      body: JSON.stringify(userNewData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.upsertedCount || data.modifiedCount) {
          toast.success("User Info Edited Successfully");
          e.target.reset();
          window.location.reload();
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="profileModalBtn" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="profileModalBtn"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleFormSubmit} className="p-3 space-y-2">
            <input
              required
              ref={userNameRef}
              type="text"
              placeholder="Your Name"
              defaultValue={name || ""}
              className="input input-bordered w-full "
            />
            <input
              required
              ref={userEmailRef}
              type="email"
              placeholder="Your Email"
              defaultValue={email || ""}
              className="input input-bordered w-full "
            />
            <input
              required
              ref={universityRef}
              type="text"
              placeholder="Your University"
              defaultValue={university || ""}
              className="input input-bordered w-full "
            />

            <input
              required
              ref={addressRef}
              type="text"
              placeholder="Your Address"
              defaultValue={address || ""}
              className="input input-bordered w-full "
            />
            <input type="submit" value="Submit" className="btn  btn-block " />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
