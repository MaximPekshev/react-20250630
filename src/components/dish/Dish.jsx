import { Counter } from "../counter/Counter";
import './Dish.css';
export const Dish = ({ dish }) => {
    return (
        <div className="dish">  
            {dish.name} - ${dish.price}
            <span><Counter /></span>
        </div>
    );
}