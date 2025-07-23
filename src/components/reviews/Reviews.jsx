import styles from "./reviews.module.css";
import classNames from "classnames";
import { Review } from "../review/Review";
import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const Reviews = ({ reviews }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={classNames(styles.reviews, {
            [styles.dark]: theme === 'dark',
            [styles.light]: theme === 'light',
        })}>
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