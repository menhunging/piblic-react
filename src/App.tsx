import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { useAppSelector } from "./redux/store";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import MainPage from "./pages/main/MainPage";
import Login from "./pages/auth/Login/Login";
import SignUp from "./pages/auth/Signup/Signup";
import ChangePassword from "./pages/auth/ChangePassword/ChangePassword";

import "./assets/scss/styles.scss";

const App = () => {
  const { isLoggedIn } = useAppSelector((state) => state.authReducers);
  // const dispatch = useAppDispatch();

  const publicRoutes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ];

  const privateRoutes = [
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "posts",
          element: <MainPage />,
          children: [
            {
              path: ":id",
              element: <MainPage />,
            },
          ],
        },
        {
          path: "profile",
          element: <MainPage />,
        },
        {
          path: "help",
          element: <MainPage />,
        },
        {
          path: "notifications",
          element: <MainPage />,
        },
        {
          path: "addinfo",
          element: <MainPage />,
        },
        {
          path: "checkout",
          element: <MainPage />,
        },
      ],
    },

    {
      path: "signin",
      element: <Navigate to="/" />,
    },
    {
      path: "signup",
      element: <Navigate to="/" />,
    },
  ];

  const router = createBrowserRouter([
    {
      // path: !isLoggedIn ? "/" : "*",
      path: "/",
      element: !isLoggedIn ? <AuthLayout /> : <MainLayout />,
      children: !isLoggedIn ? publicRoutes : privateRoutes,
    },
    {
      path: "/pass",
      element: <AuthLayout />,
      children: [
        {
          path: "/pass",
          element: <ChangePassword />,
        },
      ],
    },
    {
      path: "*",
      element: !isLoggedIn ? <Navigate to="/" /> : <>Sorry 404</>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
