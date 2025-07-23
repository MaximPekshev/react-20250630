import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const Menu = ({ menu }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={classNames(styles.menu, {
            [styles.dark]: theme === 'dark',
            [styles.light]: theme === 'light',
        })}>
            <h3 className={classNames(styles.h3, {
                [styles.dark]: theme === "dark",
                [styles.light]: theme === "light",
            })}>Menu</h3>
            <ul>
                {menu.map(dish => (
                    <li key={dish.id}>
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
        </div>
    );
}