import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import PostJob from "../pages/PostJob";
import MyJobs from "../pages/MyJobs";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";
import Salary from "../pages/Salary";
import UpdateJob from "../pages/UpdateJob";
import ProtectedRoute from "../context/ProtectedRoute";
import ViewJob from "../components/ViewJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },

      {
        path: "/my-job",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },

      {
        path: "view-job/:id",
        element: <ViewJob />,
      },

      {
        path: "/salary",
        element: <Salary />,
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/edit-job/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
