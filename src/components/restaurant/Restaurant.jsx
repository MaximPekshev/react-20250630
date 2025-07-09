import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
export const Restaurant = ({ restaurant }) => {
    return (
        <>
            <h2>{ restaurant.name }</h2>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </>
    );
}