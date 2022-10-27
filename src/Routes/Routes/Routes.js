import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login";
import Courses from "../../Pages/Courses/Courses";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LeftSide from "../../Pages/LeftSide/LeftSide";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Category from "../../Pages/Category/Category";
import CardSummery from "../../Pages/shared/CardSummuery/CardSummery";
import CategoriesDetails from "../../Pages/CategoriesDetails/CategoriesDetails";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://digital-edu-server.vercel.app/courses`)

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://digital-edu-server.vercel.app/category/${params.id}`)

            },
            {
                path: '/leftSide/:id',
                element: <LeftSide></LeftSide>,
                loader: ({ params }) => fetch(`https://digital-edu-server.vercel.app/courses/${params.id}`)
            },
           
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/courses/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`https://digital-edu-server.vercel.app/courses/${params.id}`)

            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>

            },
            {
                path: '/singleCategory/:id',
                element: <CategoriesDetails></CategoriesDetails>,
                loader: ({ params }) => fetch(`https://digital-edu-server.vercel.app/category/${params.id}`)

            },
            {
                path: '*', element: <ErrorPage></ErrorPage>

            }

        ]
    }

])