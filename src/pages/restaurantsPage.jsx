import { RestaurantsTabs } from "../components/restaurantsTabs/RestaurantsTabs";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";

export const RestaurantsPage = () => {
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