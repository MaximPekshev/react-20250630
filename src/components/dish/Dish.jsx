import { DishCounter } from "../dishCounter/DishCounter";
import styles from "./dish.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const Dish = ({ dish }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={classNames(styles.dish, {
            [styles.dark]: theme === 'dark',
            [styles.light]: theme === 'light',
        })}>
            {dish.name} - ${dish.price}
            <span><DishCounter /></span>
        </div>
    );
}