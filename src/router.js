import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import SignUp from "./Components/SignUp/SignUp";

const router = createBrowserRouter([
   {
      path:'/',
      element:<Home></Home>,
      children:[
           {
            path: 'signup',
            element:<SignUp></SignUp>
           },
           {
            path: 'login',
            element:<Login></Login>
           }
      ]
   }
  ]);
  export default router;