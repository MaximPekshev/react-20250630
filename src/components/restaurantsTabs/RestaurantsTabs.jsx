import { RestaurantsTab } from "../restaurantsTab/RestaurantsTab";
import { Fragment } from 'react';
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";

export const RestaurantsTabs = ({ onClick, restaurants, activeRestaurantId }) => {
    return (
        <ThemeWrapper>
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
        </ThemeWrapper>
    );
}