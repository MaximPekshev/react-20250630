import { Dish } from "../dish/Dish";
export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Menu</h3>
            <ul className="menu-list">
                {menu.map(dish => (
                    <li key={dish.id}>
                        <Dish dish={dish} />
                    </li>
                ))}
            </ul>
        </>
    );
}