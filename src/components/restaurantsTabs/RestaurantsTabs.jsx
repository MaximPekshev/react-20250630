import { RestaurantsTab } from "../restaurantsTab/RestaurantsTab";
import { Fragment } from 'react';

export const RestaurantsTabs = ({ onClick, restaurants, activeRestaurantId }) => {
    return (
        <>
            {restaurants.map(restaurant => (
                <Fragment key={ restaurant.id }>
                    <RestaurantsTab 
                        id={restaurant.id} 
                        title={restaurant.name} 
                        onClick={onClick}
                        isActive={restaurant.id === activeRestaurantId}
                    />
                </Fragment>
            ))}
        </>
    );
}