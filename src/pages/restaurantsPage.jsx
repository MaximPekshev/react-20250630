import { RestaurantsTabs } from "../components/restaurantsTabs/RestaurantsTabs";
import { Outlet } from "react-router";
import { TabsSkeleton } from "../components/skeletons/TabsSkeleton";
import { useGetRestaurantsQuery } from "../redux/services/api";

export const RestaurantsPage = () => {
    const { data: restaurants, isLoading } = useGetRestaurantsQuery({});

    if (isLoading) {
        return (
            <>  
                <TabsSkeleton />
                <Outlet />
            </>
        ); 
    }

    if ( !restaurants.length ) {
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
                restaurants={restaurants} 
            />
            <Outlet />
        </>
    );
}