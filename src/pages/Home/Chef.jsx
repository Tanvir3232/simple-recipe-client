import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chef_id, picture, experience, likes, name, total_recipes } = chef;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p><strong>Recipes: </strong>{total_recipes}</p>
                <p><strong>Experience: </strong>{experience}</p>
                <p><strong>Likes: </strong>{likes}</p>
                <div className="card-actions">
                   <Link to={`/chef/${chef_id}`}> <button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;