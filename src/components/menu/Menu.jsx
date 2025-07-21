import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";
import classNames from "classnames";
export const Menu = ({ menu }) => {
    return (
        <div className={classNames(styles.menu)}>
            <h3>Menu</h3>
            <ul className="menu-list">
                {menu.map(dish => (
                    <li key={dish.id}>
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
        </div>
    );
}