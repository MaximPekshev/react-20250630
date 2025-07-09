import { Review } from "../review/Review";
import './Reviews.css';
export const Reviews = ({ reviews }) => {
    return (
        <>
            <h3>Reviews</h3>
            <ul className="reviews-list">
            {reviews.map(review => (
                <li key={ review.id }>
                    <Review review={ review } />
                </li>
            ))}
            </ul>
        </>
    );
}