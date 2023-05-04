import React from 'react';
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import TopRecipe from './TopRecipe';
import Contact from './Contact';
const Home = () => {
    const chefs = useLoaderData();
    
    return (
        <div className='mx-4 md:mx-12'>
            {/* Banner section */}
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className=' p-5 '>
                    <h1 className='md:text-5xl text-3xl font-medium'> Easy Cooking & Tasty Eating</h1>
                    <p className='mt-2'>Discover, Cook, and Enjoy the Best Recipes from Around the World - Your Ultimate Recipe Guide</p>
                </div>
                <div className="carousel w-full ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slide1} className="w-full rounded-xl" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slide2} className="w-full rounded-xl" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slide3} className="w-full rounded-xl" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chef Section */}
            <h1 className='text-5xl text-center font-medium mt-16'>Chefs</h1>
            <div className='grid md:grid-cols-3 gap-5 mb-5'>
                {
                    chefs.map(chef => <Chef key={chef.chef_id} chef={chef}></Chef>)
                }
            </div>
            <TopRecipe></TopRecipe>
            <Contact></Contact>
        </div>
    );
};

export default Home;