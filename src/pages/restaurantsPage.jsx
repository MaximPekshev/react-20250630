import { RestaurantsTabs } from "../components/restaurantsTabs/RestaurantsTabs";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants";
import { useRequest } from "../redux/hooks/useRequest";
import { TabsSkeleton } from "../components/skeletons/TabsSkeleton";

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);
    const requestStatus = useRequest(getRestaurants)

    return (
        <>  
            { requestStatus === 'pending' ? ( 
                <TabsSkeleton />
            ) : (
                !restaurantIds.length ? (
                    <div>No restaurants found</div>
                ) : (
                    <RestaurantsTabs 
                        restaurantIds={restaurantIds} 
                    />
                )
            )}
            <Outlet />
        </>
    );
}