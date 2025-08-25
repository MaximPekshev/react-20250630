import { TabLink } from "../tabLink/TabLink";

export const RestaurantsTab = ({ restaurant }) => {
    if (!restaurant) {
        return;
    };

    return (
        <TabLink children={restaurant.name} to={`/restaurants/${restaurant.id}`} />
    );
}