import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Bills from "../pages/Bills";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ErrorPage from "../components/ErrorPage";
import BillsDetails from "../pages/BillsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/bills",
        loader: () => fetch("/bills.json"),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <Bills />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/bills/:id",
    element: <BillsDetails></BillsDetails>,
    loader: () => fetch("/bills.json"),
  },
  { path: "/*", 
    element: <ErrorPage></ErrorPage> ,
  },
]);
