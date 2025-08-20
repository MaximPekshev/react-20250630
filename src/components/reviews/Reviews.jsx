import styles from "./reviews.module.css";
import classNames from "classnames";
import { Review } from "../review/Review";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/getReviewsByRestaurantId";
import { selectReviewIds } from "../../redux/entities/reviews/slice";
import { useRequest } from "../../redux/hooks/useRequest";

export const Reviews = () => {
    const { restaurantId } = useParams();
    const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);
    const reviews = useSelector((state) => selectReviewIds(state, restaurantId));

    if (!requestStatus === "idle" || requestStatus === "pending") {
        return <div>Loading...</div>;
    }
    if (!reviews.length) {
        return <div>No reviews found for this restaurant</div>;
    }

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