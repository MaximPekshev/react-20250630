import './RestaurantsTab.css'
export const RestaurantsTab = ({ id, title, isActive, onClick }) => {
    return (
        <button 
            disabled={isActive}
            className="menu-button" 
            onClick={() => onClick(id)}
        >
            {title}
        </button>
    );
}