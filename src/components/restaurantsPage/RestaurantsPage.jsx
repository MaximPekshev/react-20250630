import { Restaurant } from "../restaurant/Restaurant";
import { RestaurantsTabs } from "../restaurantsTabs/RestaurantsTabs";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useState, useContext, act } from 'react';
import { UserContext } from "../userContext";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { Cart } from "../cart/Cart";

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);

    const [activeRestaurantId, setActiveRestaurant] = useState(restaurantIds?.[0]);

    const handleSetActiveRestaurant = (id) => {
        if ( activeRestaurantId === id ) {
            return;
        }
        setActiveRestaurant(id);
    };

    const { user } = useContext(UserContext);
    return (
        <>  
            <RestaurantsTabs 
                restaurantIds={restaurantIds} 
                onClick={handleSetActiveRestaurant} 
                activeRestaurantId={activeRestaurantId}
            />
            <Restaurant 
                id={activeRestaurantId}
            />
            { user && <ReviewForm /> }
            { user && <Cart /> }
        </>
    );
}