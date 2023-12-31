import React from 'react';
import LazyLoad from 'react-lazy-load';
const ChefDetails = ({ chefData }) => {

    const { name, experience, likes, picture, total_recipes, bio } = chefData;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='md:w-1/2'>
                <LazyLoad threshold={0.95}>
                    <img src={picture} alt="Album" />
                </LazyLoad>
            </figure>

            <div className=" md:w-1/2 card-body">
                <h2 className="card-title">{name}</h2>
                <p className='py-1 my-1'>{bio}</p>
                <p className='py-1 my-1'><strong>Recipes: </strong>{total_recipes}</p>
                <p className='py-1 my-1'><strong>Experience: </strong>{experience} years</p>
                <p className='py-1 my-1'><strong>Likes: </strong>{likes}</p>


            </div>
        </div>
    );
};

export default ChefDetails;