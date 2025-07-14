import { useState } from 'react';
import { Counter } from '../counter/Counter';

const LIMIT = 5;
export const DishCounter = () => {

    const [value, setValue] = useState(0);

    const increment = () => {
        if (value >= LIMIT) {
            return;
        }
        setValue(value + 1);
    };

    const decrement = () => {
        if (value <= 0) {
            return;
        }
        setValue(value - 1);
    };

    return (
        <Counter 
            value={value} 
            increment={increment} 
            decrement={decrement} 
        />
    );
}