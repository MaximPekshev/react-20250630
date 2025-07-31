import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { TabLink } from "../tabLink/TabLink";

export const RestaurantsTab = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return;
    };

    return (
        <TabLink children={restaurant.name} to={`/restaurants/${restaurant.id}`} />
    );
}