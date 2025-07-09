import { Restaurant } from "../restaurant/Restaurant";
import { MenuButtons } from "../menuButtons/MenuButtons";
import { useState, useEffect } from 'react';
export const RestaurantsPage = ({ restaurants }) => {
    const [activeRestaurant, setActiveRestaurant] = useState("Dishoom");
    const [activeRestaurantData, setActiveRestaurantData] = useState(restaurants[0]);

    useEffect(() => {
        const found = restaurants?.find(restaurant => restaurant.name === activeRestaurant)
        setActiveRestaurantData(found)
    }, [activeRestaurant]);
    
    const handleClick = (title) => {
        setActiveRestaurant(title)
    };
    return (
        <>
            <MenuButtons restaurants={restaurants} onClick={handleClick} />
            {activeRestaurantData && 
                <Restaurant restaurant={activeRestaurantData} />
            }
        </>
    );
}