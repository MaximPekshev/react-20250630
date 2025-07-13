import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <>
            <h2>{ name }</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </>
    );
}