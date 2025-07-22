import styles from "./layout.module.css";
import { ProgressBar } from "../progressBar/ProgressBar";

export const Layout = ({ children }) => {
    return (
        <>  
            <ProgressBar />
            <header className={styles.header}><h1>Restaurants</h1></header>
            <div className={styles.body}>{ children }</div>
            <footer className={styles.footer}></footer>
        </>
    );
}