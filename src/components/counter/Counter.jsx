import { useState } from 'react';
import './Counter.css';
export const Counter = () => {
    const [value, setValue] = useState(0);
    const LIMIT = 5;
    const increment = () => {
        if (value >= LIMIT) {
            return;
        }
        setValue(value + 1);
    }
    const decrement = () => {
        if (value <= 0) {
            return;
        }
        setValue(value - 1);
    }
    return (
        <>
            <button className='counter-button' onClick={decrement}>-</button>
            <span>{value}</span>
            <button className='counter-button' onClick={increment}>+</button>
        </>
    );
}