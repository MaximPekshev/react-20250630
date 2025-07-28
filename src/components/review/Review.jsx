import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { selectUserById } from "../../redux/entities/users/slice";

export const Review = ({ id }) => {
    const review = useSelector((state) => selectReviewById(state, id));
    if (!review) {
        return null;
    }
    const { rating, text, userId } = review;
    const user = useSelector((state) => selectUserById(state, userId));
    return (
        <>
            <strong>User:</strong> {user?.name} <br />
            <strong>Rating:</strong> {rating} ⭐️<br />
            <strong>Comment:</strong> {text}
        </>
    );
}
