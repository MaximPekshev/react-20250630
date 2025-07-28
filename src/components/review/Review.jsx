import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { ReviewUser } from "../reviewUser/ReviewUser";

export const Review = ({ id }) => {
    const review = useSelector((state) => selectReviewById(state, id));
    if (!review) {
        return null;
    }
    const { rating, text, userId } = review;
    return (
        <>
            <strong>User:</strong> <ReviewUser userId={userId} /> <br />
            <strong>Rating:</strong> {rating} ⭐️<br />
            <strong>Comment:</strong> {text}
        </>
    );
}
