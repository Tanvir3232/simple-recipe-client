import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-137px)]'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;