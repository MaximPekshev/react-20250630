import { DishCounter } from "../dishCounter/DishCounter";
import './Dish.css';
export const Dish = ({ dish }) => {
    return (
        <div className="dish">  
            {dish.name} - ${dish.price}
            <span><DishCounter /></span>
        </div>
    );
}