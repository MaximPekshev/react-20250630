import { useState } from 'react';
import { Counter } from '../counter/Counter';

const MIN = 0;
const MAX = 5;
export const DishCounter = () => {

    const [value, setValue] = useState(0);

    const increment = () => {
        if (value >= MAX) {
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
            min={MIN} 
            max={MAX}
            value={value} 
            increment={increment} 
            decrement={decrement} 
        />
    );
}