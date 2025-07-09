import './MenuButton.css'
export const MenuButton = ({ onClick, title }) => {
    return (
        <button className="menu-button" onClick={() => onClick(title)}>{title}</button>
    );
}