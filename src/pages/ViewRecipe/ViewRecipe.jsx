import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from './ChefDetails';

const ViewRecipe = () => {
    const {id }= useParams();
    const chefs = useLoaderData();

    const chefData = chefs.find(data=>data.chef_id == id);
    return (
        <div className='mx-12 my-5 py-3'>
            <ChefDetails chefData={chefData}></ChefDetails>
        </div>
    );
};

export default ViewRecipe;