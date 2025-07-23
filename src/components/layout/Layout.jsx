import styles from "./layout.module.css";
import classNames from "classnames";
import { ProgressBar } from "../progressBar/ProgressBar";
import { ToggleThemeCheckbox } from "../toggleThemeCheckbox/toggleThemeCheckbox";
import { ThemeContext } from "../themeContext";
import { useContext } from "react";

export const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <>  
            <ProgressBar />
            <div className={classNames(styles.top, {
                [styles.dark]: theme === 'dark',
                [styles.light]: theme === 'light',
            })}>
                <ToggleThemeCheckbox />
            </div>
            <header className={classNames(styles.header, {
                [styles.dark]: theme === 'dark',
                [styles.light]: theme === 'light',
            })}>
                <h1>Restaurants</h1>
            </header>
            <div className={classNames(styles.body, {
                [styles.dark]: theme === 'dark',
                [styles.light]: theme === 'light',
            })}>{ children }</div>
            <footer className={classNames(styles.footer, {
                [styles.dark]: theme === 'dark',
                [styles.light]: theme === 'light',
            })}></footer>
        </>
    );
}