import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import styles from "./restaurant.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";
export const Restaurant = ({ name, menu, reviews }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <h2 className={classNames(styles.h2, {
                [styles.dark]: theme === "dark",
                [styles.light]: theme === "light",
            })}>{ name }</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </>
    );
}