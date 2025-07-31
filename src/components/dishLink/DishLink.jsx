import styles from "./dish.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { TabLink } from "../tabLink/TabLink";
    
export const DishLink = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));
    if (!dish) {
        return;
    }
    return (
        <ThemeWrapper>
            <div className={styles.dish}>
                <TabLink to={`/dishes/${id}`} children={`${dish.name} - $${dish.price}`} />
            </div>
        </ThemeWrapper>
    );
}