import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch((error)=>toast.error(error.message))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                       <FaBars className='w-5 h-5'></FaBars>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to='/'>Home</Link></li>
                        <li> <Link to='/blog'>Blog</Link></li>
                        <li> <Link to='/about'>About</Link></li>
                        <li> <Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <Link><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/blog'>Blog</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                    <li> <Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<> <img title={user.displayName} className='w-10 h-10 rounded-full mr-2' src={user.photoURL} alt="no found" />  <button className='btn btn-error' onClick={handleLogOut}>Sign Out</button></>:<><Link to='/login' className='btn'>Login</Link>
                    <Link to='/register'className='btn ml-1'>Register</Link></>
                }
            </div>
        </div>
    );
};

export default Header;