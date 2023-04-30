import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home"
import Store from "../components/Store/Store"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import OneItemData from "../components/OneItemData/OneItemData";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import User from "../components/User/User";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://prime-tech-server-nine.vercel.app/products/swt')
      },
      {
        path: "/store",
        element: <Store />,
        loader: () => fetch('https://prime-tech-server-nine.vercel.app/products/swt')
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/app/:id",
        element: <PrivateRoute><OneItemData /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://prime-tech-server-nine.vercel.app/products/swt/app/${params.id}`)
      },
    ]
  },
  {
    path: "*",
    element: <div>
      <div className="text-center mt-5 h1 text-danger">404 error Found !</div>
      <div className="text-center">Copyright 2023&copy; Minhazul Abedin Munna</div>
    </div>
  },
]);

export default router;
