import { DishLink } from "../dishLink/DishLink";
import styles from "./menu.module.css";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useParams } from "react-router";
import { DefaultSkeleton } from "../skeletons/DefaultSkeleton";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const Menu = () => {
    const { restaurantId } = useParams();
    const { data: menu, isLoading, isFetching } = useGetDishesByRestaurantIdQuery(restaurantId);

    if (isLoading || isFetching) {
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
                    {menu.map(dish => (
                        <li key={dish.id}>
                            <DishLink dish={dish} />
                        </li>
                    ))}
                </ul>
            </div> 
        </ThemeWrapper>
    );
}