import { MenuButton } from "../menuButton/MenuButton";
import { Fragment } from 'react';

export const MenuButtons = ({ onClick, restaurants }) => {
    return (
        <>
            {restaurants.map(restaurant => (
                <Fragment key={ restaurant.id }>
                    <MenuButton title={restaurant.name} onClick={onClick} />
                </Fragment>
            ))}
        </>
    );
}