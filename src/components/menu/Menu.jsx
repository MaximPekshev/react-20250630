import { DishLink } from "../dishLink/DishLink";
import styles from "./menu.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectDishesIds } from "../../redux/entities/dishes/slice";
import { getDishesByRestaurantId } from "../../redux/entities/dishes/getDishesByRestaurantId";
import { useRequest } from "../../redux/hooks/useRequest";
import { DefaultSkeleton } from "../skeletons/DefaultSkeleton";
import { IDLE, PENDING } from "../../redux/constants"

export const Menu = () => {
    const { restaurantId } = useParams();
    const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);
    const menu = useSelector((state) => selectDishesIds(state, restaurantId));

    return (
        <ThemeWrapper>
            <div className={styles.menu}>
                {requestStatus === IDLE || requestStatus === PENDING ? (
                    <DefaultSkeleton />
                ) : (
                    !menu.length ? (
                        <div>No dishes found for this restaurant</div>
                    ) : (
                        <ul>
                            {menu.map(dishId => (
                                <li key={dishId}>
                                    <DishLink id={dishId} />
                            </li>
                        ))}
                    </ul>
                    )
                )}
            </div>
        </ThemeWrapper>
    );
}