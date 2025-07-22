import { DishCounter } from "../dishCounter/DishCounter";
import styles from "./dish.module.css";

export const Dish = ({ dish }) => {
    return (
        <div className={styles.dish}>  
            {dish.name} - ${dish.price}
            <span><DishCounter /></span>
        </div>
    );
}