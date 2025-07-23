import { Dish } from "../dish/Dish";
import styles from "./menu.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";

export const Menu = ({ menu }) => {
    return (
        <ThemeWrapper>
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
        </ThemeWrapper>
    );
}