import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';


import ViewRecipe from '../pages/ViewRecipe/ViewRecipe';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
import Blog from '../pages/Blog/Blog';

const  router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://recipe-server-tanvir3232.vercel.app/chefs')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/chef/:id',
                element:<PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
                loader:()=>fetch(`https://recipe-server-tanvir3232.vercel.app/chefs`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
]);
export default router;