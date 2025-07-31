import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import styles from "./dish.module.css";
import image from "../../materials/image.png";
import { DishCounter } from "../dishCounter/DishCounter";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { TabLink } from "../tabLink/TabLink";

export const Dish = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));
    const { user } = useContext(UserContext);
    if (!dish) {
        return;
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