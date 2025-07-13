import { Restaurant } from "../restaurant/Restaurant";
import { RestaurantsTabs } from "../restaurantsTabs/RestaurantsTabs";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useState } from 'react';
export const RestaurantsPage = ({ restaurants }) => {
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);
    const activeRestaurant = restaurants?.find(restaurant => restaurant.id === activeRestaurantId)
    
    return (
        <>  
            <RestaurantsTabs 
                restaurants={restaurants} 
                onClick={setActiveRestaurant} 
                activeRestaurantId={activeRestaurantId}
            />
            <Restaurant 
                name={activeRestaurant.name}
                menu={activeRestaurant.menu}
                reviews={activeRestaurant.reviews}
            />
            <ReviewForm />
        </>
    );
}