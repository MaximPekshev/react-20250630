import { DishCounter } from "../dishCounter/DishCounter";
import classNames from "classnames";
import styles from "./dish.module.css";

export const Dish = ({ dish }) => {
    return (
        <div className={classNames(styles.dish)}>  
            {dish.name} - ${dish.price}
            <span><DishCounter /></span>
        </div>
    );
}