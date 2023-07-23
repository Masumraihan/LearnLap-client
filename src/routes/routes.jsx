import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
import Shop from "../pages/Home/Home/Shop/Shop";
import AllToys from "../pages/AllToys/AllToys";
import AddToys from "../pages/AddToys/AddToys";
import ErrorPage from "../layouts/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import Blogs from "../shared/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        loader: () => fetch('https://learlab-server-assignement.vercel.app/totalToys'),
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />
      }
    ],
  },
]);

export default router;
