import { DishLink } from "../dishLink/DishLink";
import styles from "./menu.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectDishesIds } from "../../redux/entities/dishes/slice";
import { getDishesByRestaurantId } from "../../redux/entities/dishes/getDishesByRestaurantId";
import { useRequest } from "../../redux/hooks/useRequest";
import { DefaultSkeleton } from "../skeletons/DefaultSkeleton";
import { REQUEST_STATUS } from "../../redux/constants"

export const Menu = () => {
    const { restaurantId } = useParams();
    const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);
    const menu = useSelector((state) => selectDishesIds(state, restaurantId));

    if (requestStatus === REQUEST_STATUS.IDLE || requestStatus === REQUEST_STATUS.PENDING) {
        return (
            <ThemeWrapper>
                <div className={styles.menu}>
                    <DefaultSkeleton />
                </div>
            </ThemeWrapper>
        );
    }

    if (!menu.length) {
        return (
            <ThemeWrapper>
                <div className={styles.menu}>
                    <div>No dishes found for this restaurant</div>
                </div>
            </ThemeWrapper>
        );
    }

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