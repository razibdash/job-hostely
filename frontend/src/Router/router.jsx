import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import PostJob from "../pages/PostJob";
import MyJobs from "../pages/MyJobs";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";

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
        element: <PostJob />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
    ],
  },
]);

export default router;
