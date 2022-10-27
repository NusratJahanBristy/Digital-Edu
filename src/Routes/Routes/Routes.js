import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login";
import Courses from "../../Pages/Courses/Courses";
import Register from "../../Pages/Register/Register";
import RightSide from "../../Pages/RighSide/RightSide";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LeftSide from "../../Pages/LeftSide/LeftSide";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";


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
                loader: ()=>fetch (`http://localhost:5000/courses`)
              
            },
            {
                path:'/leftSide/:id',
                element:<LeftSide></LeftSide>,
                loader: ({params})=>fetch (`http://localhost:5000/category/${params.id}`)
              
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<PrivateRoute><FAQ></FAQ></PrivateRoute>
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
              
            },
            {
                path:'/coursesetails',
                element:<CoursesDetails></CoursesDetails>
              
            },
            {
                path: '*', element:<ErrorPage></ErrorPage>
               
              
            }
            
        ]
    }

])