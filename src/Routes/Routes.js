import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            <Home></Home>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/media",
        element: (
          <PrivateRoute>
            <Media></Media>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/message",
        element: <Message></Message>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
