import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import styles from "./cartItem.module.css";
import { DishCounter } from "../dishCounter/DishCounter";

export const CartItem = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));

    if (!dish) {
        return;
    };

    return (
        <div className={styles.cartItem}>
            {dish.name} <span><DishCounter id={dish.id} /></span>
        </div>
    );
}
