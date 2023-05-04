import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const RecipeDetails = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe;
    const [favorite,setFavorite] = useState(false);
    const handleFavorite =() =>{
        setFavorite(true);
        toast.success("added to favorite");
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p> <strong> Ingredients:</strong> </p>
                <ul className='grid grid-cols-3 ml-5'>
                   
                    {
                        ingredients.map((ing,index) =><li key={index} className='list-decimal'>{ing}</li>)
                    }
                </ul>
                <p> <strong>Cooking_medhod: </strong>  {cooking_method}</p>
                <p><strong>Rating: </strong></p>
                <span className='flex items-center gap-5'>  <Rating style={{ maxWidth: 250 }} value={rating} readOnly /> {rating}</span>
                <button onClick={handleFavorite} disabled={favorite} className='btn btn-outline w-3/4 mt-6 mx-auto btn-success'>Favorite</button>
            </div>
        </div>
    );
};

export default RecipeDetails;