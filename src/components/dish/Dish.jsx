import styles from "./dish.module.css";
import image from "../../materials/image.png";
import { DishCounter } from "../dishCounter/DishCounter";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { TabLink } from "../tabLink/TabLink";
import { DishPageSkeleton } from "../skeletons/DishPageSkeleton";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const Dish = ({ id }) => {
    const { data: dish, isLoading: isLoadingDish, isFetching } = useGetDishByIdQuery(id);
    const { user } = useContext(UserContext);

    if (isLoadingDish || isFetching) {
        return (
            <>
                <div className={styles.dish}>
                    <DishPageSkeleton />
                </div>
                <TabLink to={`/restaurants`} children="Back to restaurants" />
            </>
        );
    }

    if (!dish) {
        return (
            <>
                <div className={styles.dish}>
                    <div>Dish not found</div>
                </div>
                <TabLink to={`/restaurants`} children="Back to restaurants" />
            </>
        );
    }

    return (
        <>  
            <div className={styles.dish}>
                <div className={styles.dishImage}>
                    <img src={image} alt={dish.name} className={styles.image} />
                </div>
                <div className={styles.dishInfo}>
                    <h2>{dish.name}</h2>
                    <div className={styles.dishDetails}>
                        <p><strong>Price:</strong> ${dish.price}</p>
                        {user && 
                        <div className={styles.dishCounter}>
                            <span><strong>qty:</strong></span>
                            <div>
                                <DishCounter id={dish.id} />
                            </div>
                        </div>
                        }
                        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem perspiciatis dolore, excepturi provident voluptas illo facilis illum aperiam quod a quisquam aspernatur vel! Libero itaque pariatur labore eaque asperiores.</p>
                    </div>
                </div>
            </div>
            <TabLink to={`/restaurants`} children="Back to restaurants" />
        </>
    );
}