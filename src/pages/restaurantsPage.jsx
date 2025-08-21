import { RestaurantsTabs } from "../components/restaurantsTabs/RestaurantsTabs";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants";
import { useRequest } from "../redux/hooks/useRequest";
import { TabsSkeleton } from "../components/skeletons/TabsSkeleton";
import { REQUEST_STATUS } from "../redux/constants";

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);
    const requestStatus = useRequest(getRestaurants);

    if ( requestStatus === REQUEST_STATUS.PENDING) {
        return (
            <>  
                <TabsSkeleton />
                <Outlet />
            </>
        );
    }

    if ( !restaurantIds.length ) {
        return (
            <>
                <div>No restaurants found</div>
                <Outlet />
            </>
        );
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