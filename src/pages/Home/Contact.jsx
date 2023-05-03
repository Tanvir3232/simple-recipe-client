import React from 'react';

const Contact = () => {
    return (
        <div className='mt-16 mb-5 text-center'>
            <h1 className='text-5xl font-medium text-center'>Contact Us</h1>
            <form className='w-1/3 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" required name='name' placeholder="Enter your name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" required name='email' placeholder="Enter your email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea required className="textarea textarea-info" rows={5} placeholder="Write message"></textarea>
                    <button className='btn btn-info my-3'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;