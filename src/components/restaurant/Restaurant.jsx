import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import styles from "./restaurant.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const Restaurant = ({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    const { name, menu, reviews } = restaurant || {};
    return (
        <>
            <ThemeWrapper>
                <h2 className={styles.h2}>{ name }</h2>
            </ThemeWrapper>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </>
    );
}