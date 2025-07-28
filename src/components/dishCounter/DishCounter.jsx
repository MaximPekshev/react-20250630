import { useCallback } from 'react';
import { Counter } from '../counter/Counter';
import { useSelector, useDispatch } from 'react-redux';
import {
    addToCart,
    removeFromCart,
    selectAmountByItemId
} from '../../redux/entities/cart/slice';

export const DishCounter = ({ id }) => {
    
    const dispatch = useDispatch();
    
    const amount = useSelector((state) => selectAmountByItemId(state, id)) || 0;

    const increment = useCallback(
        () => dispatch(addToCart(id)),
        [id, dispatch]
    );

    const decrement = useCallback(
        () => dispatch(removeFromCart(id)),
        [id, dispatch]
    );

    return (
        <Counter 
            value={amount} 
            max={100}
            increment={increment} 
            decrement={decrement} 
        />
    );
}