import { Button } from "../button/Button";
export const RestaurantsTab = ({ id, title, isActive, onClick }) => {
    return (
        <Button 
            disabled={isActive}
            children={title}
            sizeViewVariant="l"
            isDisabled={isActive}
            onClick={() => onClick(id)}
        />
    );
}