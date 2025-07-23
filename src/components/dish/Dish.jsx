import { DishCounter } from "../dishCounter/DishCounter";
import styles from "./dish.module.css";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
    
export const Dish = ({ dish }) => {
    const { user } = useContext(UserContext);
    return (
        <ThemeWrapper>
            <div className={styles.dish}>
                {dish.name} - ${dish.price}
                {user && <span><DishCounter /></span>}
            </div>
        </ThemeWrapper>
    );
}