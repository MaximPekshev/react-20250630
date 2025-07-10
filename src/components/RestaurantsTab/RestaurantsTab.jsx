import './RestaurantsTab.css'
export const RestaurantsTab = ({ id, title, onClick }) => {
    return (
        <button 
            className="menu-button" 
            onClick={() => onClick(id)}
        >
            {title}
        </button>
    );
}