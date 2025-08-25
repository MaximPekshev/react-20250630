import styles from "./dish.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { TabLink } from "../tabLink/TabLink";
    
export const DishLink = ({ dish }) => {
    if (!dish) {
        return;
    }
    return (
        <ThemeWrapper>
            <div className={styles.dish}>
                <TabLink to={`/dishes/${dish.id}`} children={`${dish.name} - ${dish.price}`} />
            </div>
        </ThemeWrapper>
    );
}