import { Counter } from "../counter/Counter";
import { Button } from "../button/Button";
import styles from "./reviewForm.module.css";
import { useForm } from "./useForm";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { useGetUserByIdQuery } from "../../redux/services/api";

export const ReviewForm = ( {userId, onSubmit, isLoading }) => {
    const { form, setReview, ratingIncrement, ratingDecrement, clearForm } = useForm();
    const { data: user } = useGetUserByIdQuery(userId);
    const { review, rating } = form;

    return (
        <ThemeWrapper>
            <form 
                className={styles.reviewForm}
                onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit(form);
                }}
            >
                <div className={styles.reviewFormData}>
                    <div>Name</div>
                    <input 
                        value={user?.name} 
                        placeholder="Your name"
                        readOnly
                    />
                    <div>Review</div>
                    <textarea 
                        value={review} 
                        placeholder="Write your review here..."
                        onChange={(event) => setReview(event.target.value)}
                    />
                    <div className={styles.rating}>
                        <span>Rating:</span>
                        <div>
                            <Counter
                                min={0} 
                                max={5}
                                value={rating} 
                                increment={(event) => {
                                    event.preventDefault();
                                    ratingIncrement(rating);
                                }} 
                                decrement={(event) => {
                                    event.preventDefault();
                                    ratingDecrement(rating);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.reviewFormButtons}>
                        <Button 
                            sizeViewVariant="s"
                            children={"Clear"}
                            isDisabled={false}
                            onClick={clearForm}
                        />
                        <Button 
                            isDisabled={isLoading}
                            children={"Submit"}
                        />
                    </div>
                </div>
                
            </form>
        </ThemeWrapper>
    );
}