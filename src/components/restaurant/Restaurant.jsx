import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import styles from "./restaurant.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";

export const Restaurant = ({ name, menu, reviews }) => {
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