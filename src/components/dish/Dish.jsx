import { DishCounter } from "../dishCounter/DishCounter";
import styles from "./dish.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { UserContext } from "../userContext";
    
export const Dish = ({ dish }) => {
    const { theme } = useContext(ThemeContext);
    const { user } = useContext(UserContext);
    return (
        <div className={classNames(styles.dish, {
            [styles.dark]: theme === 'dark',
            [styles.light]: theme === 'light',
        })}>
            {dish.name} - ${dish.price}
            {user && <span><DishCounter /></span>}
        </div>
    );
}