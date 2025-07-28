import { RestaurantsTab } from "../restaurantsTab/RestaurantsTab";
import { Fragment } from 'react';
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";

export const RestaurantsTabs = ({ onClick, restaurantIds, activeRestaurantId }) => {
    return (
        <ThemeWrapper>
            {restaurantIds.map(id => (
                <Fragment key={ id }>
                    <RestaurantsTab 
                        id={id} 
                        title={id} 
                        onClick={onClick}
                        isActive={id === activeRestaurantId}
                    />
                </Fragment>
            ))}
        </ThemeWrapper>
    );
}