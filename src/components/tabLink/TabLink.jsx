import styles from "./tablink.module.css";
import classNames from "classnames";
import { NavLink } from "react-router";

export const TabLink = ({ children, to }) => {
    return (
        <NavLink 
            className={({ isActive }) => 
                classNames(styles.tabLink, {
                    [styles.active]: isActive
                })
            }
            to={to}
        >
            {children}
        </NavLink>
    );
}