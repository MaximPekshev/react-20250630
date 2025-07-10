import { RestaurantsTab } from "../RestaurantsTab/RestaurantsTab";
import { Fragment } from 'react';

export const RestaurantsTabs = ({ onClick, restaurants }) => {
    return (
        <>
            {restaurants.map(restaurant => (
                <Fragment key={ restaurant.id }>
                    <RestaurantsTab 
                        id={restaurant.id} 
                        title={restaurant.name} 
                        onClick={onClick}
                    />
                </Fragment>
            ))}
        </>
    );
}