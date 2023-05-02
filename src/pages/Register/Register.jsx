import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { signUp,updateProfileInfo } = useContext(AuthContext);
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;
   
        signUp(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("your registration successfully done!");
                updateUserProfile(name,photoUrl);
                form.reset();
            })
            .catch((error) => toast.error(error.message))
    }
    const updateUserProfile = (name,photoUrl)=>{
        updateProfileInfo(name,photoUrl)
        .then(()=>{})
        .catch((error)=>toast.error(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" required name='photo' placeholder="enter your photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <span> already have an account?  <Link to="/login" className="label-text-alt text-base text-blue-600 link link-hover">Login</Link></span>
                        </label>
                       
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;