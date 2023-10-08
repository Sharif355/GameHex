import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/Home/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";
import Booking from "../Pages/Home/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/public/Data.json"),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/public/Data.json"),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/booking",
        element: (
          <PrivateRoutes>
            <Booking></Booking>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
