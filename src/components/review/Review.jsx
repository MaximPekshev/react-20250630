import { ReviewUser } from "../reviewUser/ReviewUser";
import { useGetUserByIdQuery } from "../../redux/services/api";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from "./review.module.css"; 

export const Review = ({ review }) => {
    const { user: authUser } = useContext(UserContext);
    if (!review) {
        return null;
    }
    const { data: user } = useGetUserByIdQuery(review.userId);

    return (
        <>
            <div className={styles.reviewContent}>
                <div className={styles.reviewInfo}>
                    <strong>User:</strong> <ReviewUser user={user} /> <br />
                    <strong>Rating:</strong> {review.rating} ⭐️<br />
                    <strong>Comment:</strong> {review.text}
                </div>
                <div className={styles.reviewActions}>
                    {(authUser?.id  === review.userId) && (
                        <Button
                            children={<FontAwesomeIcon icon={faPencil} />}
                            sizeViewVariant="xs"
                        />
                    )}
                    {/* {(authUser?.id  === review.userId) && (
                        <Button
                            children={<FontAwesomeIcon icon={faTrash} />}
                            sizeViewVariant="xs"
                        />
                    )}  */}
                </div>
            </div> 
        </>
    );
}
