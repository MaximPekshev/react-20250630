import styles from "./layout.module.css";
import classNames from "classnames";
import { ProgressBar } from "../progressBar/ProgressBar";

export const Layout = ({ children }) => {
    return (
        <>  
            <ProgressBar />
            <header className={classNames(styles.header)}><h1>Restaurants</h1></header>
            <div className={classNames(styles.body)}>{ children }</div>
            <footer className={classNames(styles.footer)}></footer>
        </>
    );
}