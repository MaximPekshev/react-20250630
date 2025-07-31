import { DishLink } from "../dishLink/DishLink";
import styles from "./menu.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const Menu = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    if (!restaurant) {
        return;
    }
    const { menu } = restaurant || {};

    return (
        <ThemeWrapper>
            <div className={styles.menu}>
                <ul>
                    {menu.map(dishId => (
                        <li key={dishId}>
                            <DishLink id={dishId} />
                        </li>
                    ))}
                </ul>
            </div>
        </ThemeWrapper>
    );
}