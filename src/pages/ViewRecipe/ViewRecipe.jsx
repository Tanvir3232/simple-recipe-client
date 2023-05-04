import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from './ChefDetails';
import RecipeDetails from './RecipeDetails';

const ViewRecipe = () => {
    const { id } = useParams();
    const chefs = useLoaderData();

    const chefData = chefs.find(data => data.chef_id == id);
    return (
        <div className='mx-12 my-5 py-3'>
            <ChefDetails chefData={chefData}></ChefDetails>
            <h1 className='text-4xl mt-12 text-orange-500 font-medium text-center'>All Recipes </h1>
           
            <div className='grid md:grid-cols-2 my-5 gap-6'>
                {
                    chefData.recipes.map((recipe, index) => <RecipeDetails
                        key={index}
                        recipe={recipe}
                    ></RecipeDetails>)
                }
            </div>

        </div>
    );
};

export default ViewRecipe;