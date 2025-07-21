import { useReducer } from "react";

const MAX_RATING = 5;
const MIN_RATING = 0;

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

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_STATE);
    const { name, review, rating } = form;

    const setName = (name) => {
        dispatch({ type: SET_NAME_ACTION, payload: name });
    };

    const setReview = (review) => {
        dispatch({ type: SET_REVIEW_ACTION, payload: review });
    };

    const ratingIncrement = (rating) => {
        if (rating >= MAX_RATING) {
            return;
        };
        dispatch({ type: RATING_INCREMENT_ACTION });
    };

    const ratingDecrement = (rating) => {
        if (rating <= MIN_RATING) {
            return;
        };
        dispatch({ type: RATING_DECREMENT_ACTION });
    };

    const clearForm = () => {
        dispatch({ type: CLEAR_ACTION });
    };

    return {
        form,
        setName,
        setReview,
        ratingIncrement,
        ratingDecrement,
        clearForm
    };
};