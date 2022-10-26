import { createBrowserRouter } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import Courses from "./Components/Courses/Courses";
import Dtails from "./Components/Dtails/Dtails";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import Privet from "./Components/Privet/Privet";
import SignUp from "./Components/SignUp/SignUp";

const router = createBrowserRouter([
   {
      path:'/',
      element:<Home></Home>,
      children:[
           {
            path: '/',
            element:<Main></Main>
           },
           {
            path: 'courses',
            loader: async () => {
               return fetch(
                 "https://assignment-10-server-rifat7432.vercel.app/courses"
               );
             },
            
            element:<Courses></Courses>
           }, {
               path: "courses/:id",
               loader: async ({ params }) => {
                 return fetch(
                   `https://assignment-10-server-rifat7432.vercel.app/courses/${params.id}`
                 );
               },
               element: <Dtails></Dtails>,
             },
           {
            path: 'signup',
            element:<SignUp></SignUp>
           },
           {
            path: 'login',
            element:<Login></Login>
           },
           {
            path: 'checkout',
            element:<Privet><CheckOut></CheckOut></Privet>
           },
      ]
   }
  ]);
  export default router;