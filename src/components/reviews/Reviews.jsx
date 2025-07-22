import classNames from "classnames";
import { Review } from "../review/Review";
import styles from "./reviews.module.css";
export const Reviews = ({ reviews }) => {
    return (
        <div className={styles.reviews}>
            <h3>Reviews</h3>
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
    );
}