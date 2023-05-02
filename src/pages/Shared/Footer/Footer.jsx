import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-900 text-gray-400 py-8'>
            <div className='flex '>
                
                <FaFacebook className='w-10 text-gray-300 h-6'></FaFacebook>
                <FaTwitter className='w-10 text-gray-300 h-6'></FaTwitter>
                <FaInstagram className='w-10 text-gray-300 h-6'></FaInstagram>
                <FaYoutube className='w-10 text-gray-300 h-6'></FaYoutube>
            </div>
            <ul className='flex  gap-4 my-3'>
             
                <li><Link> Advertising</Link></li>
                <li><Link> Terms & Conditions</Link></li>
                <li><Link> Privacy Policy</Link></li>
                <li><Link> About us</Link></li>
            </ul>
            <h1>© Copyright 2023 recipe Bangladesh all right reserved</h1>
        </div>
    );
};

export default Footer;