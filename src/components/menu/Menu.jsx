import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";
export const Menu = ({ menu }) => {
    return (
        <div className={styles.menu}>
            <h3 className={styles.h3}>Menu</h3>
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