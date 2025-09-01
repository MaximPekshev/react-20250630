import styles from "./reviews.module.css";
import classNames from "classnames";
import { Review } from "../review/Review";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useParams } from "react-router";
import { DefaultSkeleton } from "../skeletons/DefaultSkeleton";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";

export const Reviews = () => {
    const { restaurantId } = useParams();
    const { data: reviews, isLoading: isLoadingReviews, isFetching: isFetchingReviews } = useGetReviewsByRestaurantIdQuery(restaurantId);
    
    if (isLoadingReviews || isFetchingReviews) {
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
                    {reviews.map(review => (
                        <li key={ review.id }>
                            <Review review={ review } />
                        </li>
                    ))}
                </ul>
            </div>
        </ThemeWrapper>
    );
}