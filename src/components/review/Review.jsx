
export const Review = ({ review }) => {
    return (
        <>
            <strong>User:</strong> {review.user} <br />
            <strong>Rating:</strong> {review.rating} ⭐️<br />
            <strong>Comment:</strong> {review.text}
        </>
    );
}
