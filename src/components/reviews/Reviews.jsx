import styles from "./reviews.module.css";
import classNames from "classnames";
import { Review } from "../review/Review";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/getReviewsByRestaurantId";
import { selectReviewIds } from "../../redux/entities/reviews/slice";
import { useRequest } from "../../redux/hooks/useRequest";
import { DefaultSkeleton } from "../skeletons/DefaultSkeleton";
import { REQUEST_STATUS } from "../../redux/constants"
import { getUsers } from "../../redux/entities/users/getUsers";


export const Reviews = () => {
    const { restaurantId } = useParams();
    const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);
    const reviews = useSelector((state) => selectReviewIds(state, restaurantId));
    const usersRequestStatus = useRequest(getUsers);

    if ( requestStatus === REQUEST_STATUS.IDLE || requestStatus === REQUEST_STATUS.PENDING) {
        return (
            <ThemeWrapper>
                <div className={styles.reviews}>
                    <DefaultSkeleton />
                    <DefaultSkeleton />
                </div>
            </ThemeWrapper>
        );
    }

    if ( !reviews.length ) {
        return (
            <ThemeWrapper>
                <div className={styles.reviews}>
                    <div>No reviews found for this restaurant</div>
                </div>
            </ThemeWrapper>
        );
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