import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErropPage';
import ChefRecipes from '../pages/ViewRecipe/ViewRecipe';
import ViewRecipe from '../pages/ViewRecipe/ViewRecipe';

const  router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/chefs')
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
                element:<ViewRecipe></ViewRecipe>,
                loader:()=>fetch(`http://localhost:5000/chefs`)
            }
        ]
    }
]);
export default router;