import { Dish } from "../components/dish/Dish";
import { useParams } from "react-router";
export const DishPage = () => {
    const { dishId } = useParams();
    return (
        <>
            <Dish id={dishId} />
        </>
    );
}