import { Counter } from "../counter/Counter";
import { Button } from "../button/Button";
import styles from "./reviewForm.module.css";
import { useForm } from "./useForm";

export const ReviewForm = () => {
    const { form, setName, setReview, ratingIncrement, ratingDecrement, clearForm } = useForm();
    const { name, review, rating } = form;

    return (
        <form 
            className={styles.reviewForm}
            onSubmit={(event) => event.preventDefault()}
        >
            <div className={styles.reviewFormData}>
                <div>Name</div>
                <input 
                    value={name} 
                    placeholder="Your name"
                    onChange={(event) => setName(event.target.value)}
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
                        isDisabled
                        children={"Submit"}
                    />
                    <Button 
                        sizeViewVariant="s"
                        children={"Clear"}
                        isDisabled={false}
                        onClick={clearForm}
                    />
                </div>
            </div>
            
        </form>
    );
}