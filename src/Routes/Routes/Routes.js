import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login";
import Courses from "../../Pages/Courses/Courses";
import Register from "../../Pages/Register/Register";
import RightSide from "../../Pages/RighSide/RightSide";


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
                path:'/courses/:id',
                element:<Courses></Courses>,
                loader: ()=>fetch (`http://localhost:5000/courses}`)
              
            },
            {
                path:'/blog',
                element:<Blog></Blog>
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