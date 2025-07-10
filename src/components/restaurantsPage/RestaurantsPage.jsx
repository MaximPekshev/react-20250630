import { Restaurant } from "../restaurant/Restaurant";
import { RestaurantsTabs } from "../RestaurantsTabs/RestaurantsTabs";
import { useState, useEffect } from 'react';
export const RestaurantsPage = ({ restaurants }) => {
    const [activeRestaurant, setActiveRestaurant] = useState("a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2");
    const activeRestaurantData = restaurants?.find(restaurant => restaurant.id === activeRestaurant)
    
    return (
        <>
            <RestaurantsTabs restaurants={restaurants} onClick={setActiveRestaurant} />
            {activeRestaurantData && 
                <Restaurant restaurant={activeRestaurantData} />
            }
        </>
    );
}