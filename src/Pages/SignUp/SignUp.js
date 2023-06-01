import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, ContinueWithGoogle, updateUser } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setSignUpError("");
    console.log(errors);
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("User Created Successfully!");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserToDatabase(data.name, data.email, "POST");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Something went wrong. Try again later.");
          });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    ContinueWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        saveUserToDatabase(user.displayName, user.email, "PUT");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
        toast.error("Something went wrong. Try again later.");
      });
  };
  const saveUserToDatabase = (name, email, method) => {
    const user = { name, email };
    fetch("http://localhost:5005/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        console.log(data);
      });
  };

  return (
    <div className="h-[600px] flex justify-center items-center ">
      <div className="w-96 p-7 card  shadow-xl">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          {/* name */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          {/* email  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs mb-3"
            />

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-info w-full "
            value="Sign Up"
            type="submit"
          />
          <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div>
        </form>
        <p className="text-base my-2 text-center">
          Already Signed In?
          <Link className="text-info" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline hover:btn-info w-full"
        >
          <FcGoogle className="mr-5 text-2xl"></FcGoogle> CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
