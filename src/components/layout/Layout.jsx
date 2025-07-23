import styles from "./layout.module.css";
import { ProgressBar } from "../progressBar/ProgressBar";
import { ToggleThemeCheckbox } from "../toggleThemeCheckbox/ToggleThemeCheckbox";
import { AuthButton } from "../authButton/authButton";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";

export const Layout = ({ children }) => {
    return (
        <>  
            <ProgressBar />
            <ThemeWrapper>
                <div className={styles.top}>
                    <ToggleThemeCheckbox />
                    <AuthButton />
                </div>
                <header className={styles.header}>
                    <h1>Restaurants</h1>
                </header>
                <div className={styles.body}>{ children }</div>
                <footer className={styles.footer}></footer>
            </ThemeWrapper>
        </>
    );
}