import { Button } from "../button/Button";

export const RestaurantsTab = ({ id, title, isActive, onClick }) => {
    return (
        <Button 
            children={title}
            sizeViewVariant="l"
            isDisabled={isActive}
            onClick={() => onClick(id)}
        />
    );
}