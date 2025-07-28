import { Button } from "../button/Button";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const RestaurantsTab = ({ id, isActive, onClick }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return;
    };

    return (
        <Button 
            children={restaurant.name}
            sizeViewVariant="l"
            isDisabled={isActive}
            onClick={() => onClick(id)}
        />
    );
}