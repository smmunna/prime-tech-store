import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home"
import Store from "../components/Store/Store"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/store",
          element:<Store/>,
          loader:()=>fetch('http://localhost:5000/products/swt')
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
      ]
    },
  ]);

  export default router;
