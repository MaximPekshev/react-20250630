import styles from "./reviews.module.css";
import classNames from "classnames";
import { Review } from "../review/Review";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const Reviews = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    if (!restaurant) {
        return;
    }
    const { reviews } = restaurant || {};
    return (
        <ThemeWrapper>
            <div className={styles.reviews}>
                <ul className={classNames(
                    styles.reviewsList, 
                    styles.link
                )}>
                {reviews.map(reviewId => (
                    <li key={ reviewId }>
                        <Review id={ reviewId } />
                    </li>
                ))}
                </ul>
            </div>
        </ThemeWrapper>
    );
}