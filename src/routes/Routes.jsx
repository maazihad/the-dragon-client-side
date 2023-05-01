import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsConditions from "../pages/Shared/TermsConditions/TermsConditions";

const router = createBrowserRouter([
   {
      path: '/',
      element: <LoginLayout></LoginLayout>,
      children: [
         {
            path: '/',
            element: <Navigate to="/category/0"></Navigate>,
         },
         {
            path: 'login',
            element: <Login></Login>,
         },
         {
            path: 'register',
            element: <Register></Register>,
         },
         {
            path: 'termsCondition',
            element: <TermsConditions></TermsConditions>
         }
      ]
   },
   {
      path: 'category',
      element: <Main></Main>,
      children: [
         {
            path: ':categoryId',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.categoryId}`)
         }
      ]
   },
   {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children: [
         {
            path: ":newsId",
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/news/${params.newsId}`)
         }
      ]
   }
]);



export default router; 