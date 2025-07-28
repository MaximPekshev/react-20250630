import styles from "./reviews.module.css";
import classNames from "classnames";
import { Review } from "../review/Review";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";

export const Reviews = ({ reviews }) => {
    return (
        <ThemeWrapper>
            <div className={styles.reviews}>
                <h3>Reviews</h3>
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