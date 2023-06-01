import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [TSuser, setTSuser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5005/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTSuser(data);
      });
  }, [user?.email]);

  return (
    <>
      <section className="max-w-2xl mx-auto my-10">
        {/* user profile  */}
        <section>
          <div className="card  bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{TSuser?.name}</h2>
              <p>Email : {TSuser?.email}</p>
              <p>University : {TSuser?.university || ""}</p>
              <p>Address : {TSuser?.address || ""}</p>
              <div className="my-2">
                {/* The button to open modal */}
                <label htmlFor="profileModalBtn" className="btn btn-block ">
                  Edit
                </label>

                <ProfileModal TSuser={TSuser}></ProfileModal>
              </div>
            </div>
          </div>
        </section>

        {/* modal */}
      </section>
    </>
  );
};

export default Profile;
