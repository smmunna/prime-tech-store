import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home"
import Store from "../components/Store/Store"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import OneItemData from "../components/OneItemData/OneItemData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/products/swt')
      },
      {
        path: "/store",
        element: <Store />,
        loader: () => fetch('http://localhost:5000/products/swt')
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
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
        path:"/app/:id",
        element:<OneItemData/>,
        loader:({params})=>fetch(`http://localhost:5000/products/swt/app/${params.id}`)
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
