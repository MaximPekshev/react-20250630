import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import classNames from "classnames";
import styles from "./themeWrapper.module.css";

export const ThemeWrapper = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={classNames({
                [styles.dark]: theme === "dark",
                [styles.light]: theme === "light",
            })}
        >
            {children}
        </div>
    );
};