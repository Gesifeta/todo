import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import UserRegister from "../components/user/UserRegister.jsx";
import UserLogin from "../components/user/UserLogin.jsx";
import ErrorPage from "../components/error/PageNotFound.jsx";
import LandingPage from "../components/landing/LandingPage.jsx";
import Home from "../components/home/Home.jsx";

// All of the application routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/user/new",
        element: <UserRegister />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/user/login",
        element: <UserLogin />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
