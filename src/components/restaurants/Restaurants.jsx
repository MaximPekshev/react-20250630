import { RestaurantsTabs } from "../restaurantsTabs/RestaurantsTabs";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { Outlet } from "react-router";

export const Restaurants = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);
    return (
        <>  
            <RestaurantsTabs 
                restaurantIds={restaurantIds} 
            />
            <Outlet />
        </>
    );
}