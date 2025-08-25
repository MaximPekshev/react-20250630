import styles from "./cartItem.module.css";
import { DishCounter } from "../dishCounter/DishCounter";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const CartItem = ({ id }) => {
    const { data: dish } = useGetDishByIdQuery(id);

    if (!dish) {
        return;
    };

    return (
        <div className={styles.cartItem}>
            {dish.name} <span><DishCounter id={dish.id} /></span>
        </div>
    );
}
