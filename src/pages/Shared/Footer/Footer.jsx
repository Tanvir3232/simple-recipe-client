import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Footer = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex px-5 flex-col md:justify-center md:items-center bg-slate-900 text-gray-400 py-8'>
            <div className='flex '>

                <FaFacebook className='w-10 text-gray-300 h-6'></FaFacebook>
                <FaTwitter className='w-10 text-gray-300 h-6'></FaTwitter>
                <FaInstagram className='w-10 text-gray-300 h-6'></FaInstagram>
                <FaYoutube className='w-10 text-gray-300 h-6'></FaYoutube>
            </div>
            <ul className='flex flex-col md:flex-row  gap-4 my-3'>

                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='/blog'>Blog</Link></li>
                <li> <Link to='/login'>Login</Link></li>
                <li> <Link to='/register'>Register</Link></li>

            </ul>
            <h1 className='text-center'>&copy; Copyright 2023 recipe Bangladesh all right reserved</h1>
        </div>
    );
};

export default Footer;