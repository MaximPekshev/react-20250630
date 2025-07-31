import styles from "./layout.module.css";
import { ProgressBar } from "../progressBar/ProgressBar";
import { Header } from "../header/Header";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { Outlet } from "react-router";

export const Layout = () => {
    return (
        <>  
            <ProgressBar />
            <ThemeWrapper>
                <Header />
                <div className={styles.body}><Outlet /></div>
                <footer className={styles.footer}></footer>
            </ThemeWrapper>
        </>
    );
}