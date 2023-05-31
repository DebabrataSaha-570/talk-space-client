import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const menuItems = (
    <>
      <li>
        <Link to="/media"> Media </Link>
      </li>
      <li>
        <Link to="/message"> Message </Link>
      </li>
      <li>
        <Link to="/profile"> Profile </Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <a href="#">{user?.displayName}</a>
          </li>
          <li>
            <button onClick={handleLogOut}> Sign Out </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login"> Login </Link>
        </li>
      )}
    </>
  );
  return (
    <nav className="bg-base-300  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="navbar flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost text-info normal-case text-xl"
            >
              Talk Space
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
