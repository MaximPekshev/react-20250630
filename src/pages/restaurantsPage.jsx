import { RestaurantsTabs } from "../components/restaurantsTabs/RestaurantsTabs";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants";
import { useRequest } from "../redux/hooks/useRequest";

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);
    const requestStatus = useRequest(getRestaurants)

    if (requestStatus === 'idle' || requestStatus === 'pending') {
        return <div>Loading...</div>;
    }

    if (!restaurantIds.length) {
        return <div>No restaurants found</div>;
    }

    return (
        <>
            <RestaurantsTabs 
                restaurantIds={restaurantIds} 
            />
            <Outlet />
        </>
    );
}