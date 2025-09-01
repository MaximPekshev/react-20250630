import { RestaurantsTab } from "../restaurantsTab/RestaurantsTab";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";

export const RestaurantsTabs = ({ onClick, restaurants, activeRestaurantId }) => {
    return (
        <ThemeWrapper>
            {restaurants.map(restaurant => (
                <RestaurantsTab 
                    key={restaurant.id}
                    restaurant={restaurant} 
                    onClick={onClick}
                    isActive={restaurant.id === activeRestaurantId}
                />
            ))}
        </ThemeWrapper>
    );
}