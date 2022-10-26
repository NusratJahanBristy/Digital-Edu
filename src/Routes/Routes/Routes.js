import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login";
import Courses from "../../Pages/Courses/Courses";
import Register from "../../Pages/Register/Register";
import RightSide from "../../Pages/RighSide/RightSide";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>(`http://localhost:5000/courses`)
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                // loader: ({params})=>fetch (`http://localhost:5000/category/${params.id}`)
              
            },
            {
                path:'/rightside',
                element:<RightSide></RightSide>,
                loader: ({params})=>fetch (`http://localhost:5000/category/${params.id}`)
              
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/rightside',
                element:<RightSide></RightSide>
             
                
            }
        ]
    }

])