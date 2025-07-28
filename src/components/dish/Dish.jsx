import { DishCounter } from "../dishCounter/DishCounter";
import styles from "./dish.module.css";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
    
export const Dish = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));
    if (!dish) {
        return;
    }
    const { user } = useContext(UserContext);
    return (
        <ThemeWrapper>
            <div className={styles.dish}>
                {dish.name} - ${dish.price}
                {user && <span><DishCounter id={dish.id} /></span>}
            </div>
        </ThemeWrapper>
    );
}