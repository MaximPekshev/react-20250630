import styles from './header.module.css';
import { ToggleThemeCheckbox } from "../toggleThemeCheckbox/ToggleThemeCheckbox";
import { AuthButton } from "../authButton/authButton";
import { ThemeWrapper } from "../themeWrapper/ThemeWrapper";
import { TabLink } from '../tabLink/TabLink';
import { useContext } from 'react';
import { UserContext } from '../userContext';

export const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <ThemeWrapper>
            <header className={styles.header}>
                <div className={styles.top}>    
                    <ToggleThemeCheckbox />
                    <AuthButton />
                </div>
                <div className={styles.middle}>
                    <TabLink to="/" children={"Home"} />
                    <TabLink to="/restaurants" children={"Restaurants"} />
                    {user && <TabLink to="/cart" children={"Cart"} />}
                </div>
            </header>
        </ThemeWrapper>
    );
};