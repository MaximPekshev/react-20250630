import { useReducer } from "react";
import { Counter } from "../counter/Counter";
import './ReviewForm.css';

const MAX_RATING = 5;
const MIX_RATING = 0;

const DEFAULT_STATE = {
    name: '',
    review: '',
    rating: 0
};
const SET_NAME_ACTION = "setName";
const SET_REVIEW_ACTION = "setReview";
const RATING_INCREMENT_ACTION = "ratingIncrement";
const RATING_DECREMENT_ACTION = "ratingDecrement"
const CLEAR_ACTION = "clear";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NAME_ACTION:
            return { ...state, name: action.payload };
        case SET_REVIEW_ACTION:
            return { ...state, review: action.payload };
        case RATING_INCREMENT_ACTION:
            return { ...state, rating: state.rating + 1 };
        case RATING_DECREMENT_ACTION:
            return { ...state, rating: state.rating - 1 };
        case CLEAR_ACTION:
            return DEFAULT_STATE;
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_STATE);
    const { name, review, rating } = form;

    const ratingIncrement = (rating) => {
        if (rating >= MAX_RATING) {
            return;
        };
        dispatch({ type: RATING_INCREMENT_ACTION });
    };

    const ratingDecrement = (rating) => {
        if (rating <= MIX_RATING) {
            return;
        };
        dispatch({ type: RATING_DECREMENT_ACTION });
    };

    return (
        <form 
            className="review-form"
            onSubmit={(event) => event.preventDefault()}
        >
            <div className="review-form-data">
                <div>Name</div>
                <input 
                    value={name} 
                    placeholder="Your name"
                    onChange={(event) => {
                        dispatch({ type: SET_NAME_ACTION, payload: event.target.value });
                    }}
                />
                <div>Review</div>
                <textarea 
                    value={review} 
                    placeholder="Write your review here..."
                    onChange={(event) => {
                        dispatch({ type: SET_REVIEW_ACTION, payload: event.target.value });
                    }}
                />
                <div className="rating">
                    <span>Rating:</span>
                    <div>
                        <Counter
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
                <div className="review-form-buttons">
                    <button 
                        type="button"
                        disabled
                    >
                        Submit
                    </button>
                    <button 
                        type="button" 
                        onClick={() => {
                            dispatch({ type: CLEAR_ACTION });
                        }}
                    >Clear</button>
                </div>
            </div>
            
        </form>
    );
}