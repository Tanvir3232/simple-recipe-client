import React from 'react';
import recipe1 from '../../assets/top1.jpg';
import recipe2 from '../../assets/top2.jpg';
import recipe3 from '../../assets/top3.jpg';
const TopRecipe = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-5xl my-12 font-medium text-center'>Top Recipes of the Day</h1>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full grid md:grid-cols-2 gap-6">
                    <img src={recipe1} className='h-72 rounded-xl' />
                    <div>
                         <h1 className='text-2xl font-medium'>Goat Cheese and Chorizo Rolls</h1>
                         <p className='my-2'><strong>Average Rating:</strong> 4.3</p>
                         <p><strong>Description:</strong> You know how bacon is all the rage these days? Bacon dipped in chocolate, bacon topped donuts, bacon beurre blanc and so and so. For me, it’s all about chorizo. I’m constantly looking for ways to incorporate it into my cooking and seldom pass up an opportunity to eat a dish in which it is a key component (see Arroz .</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full grid md:grid-cols-2 gap-6">
                    <img src={recipe2} className='h-72 rounded-xl' />
                    <div>
                         <h1 className='text-2xl font-medium'>Grilled Five Spice Chicken</h1>
                         <p className='my-2'><strong>Average Rating:</strong> 4.3</p>
                         <p><strong>Description:</strong> It may not be in my best interest to admit this, but here goes nothing: grilling chicken scares me. It’s just too easy to get wrong. Black, cremated skin on the outside with an interior so pink that just looking at it might give you salmonella. Or worse, well-cooked flesh with skin so flabby that it can be removed in</p>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full grid md:grid-cols-2 gap-6">
                    <img src={recipe3} className='h-72 rounded-xl' />
                    <div>
                         <h1 className='text-2xl font-medium'>Moshur Daler Bora Recipe</h1>
                         <p className='my-2'><strong>Average Rating:</strong> 4.3</p>
                         <p><strong>Description:</strong>1Soak lentils in water for an hour. Wash lentils with clean water thoroughly and drain well. 2Now blend the lentil in a blender till it turns into smooth paste as much as possible. Do not use any water while blending. Now add ginger-garlic pastes, chopped onions, green chilies, cumin powder, turmeric powder and …</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                
            </div>
        </div>
    );
};

export default TopRecipe;