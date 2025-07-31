import { useParams } from "react-router"
import { Restaurant } from "../components/restaurant/Restaurant";
export const RestaurantPage = () => {
    const { restaurantId } = useParams();
    return (
        <Restaurant id={restaurantId} />
    );
}