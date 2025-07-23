import { useContext } from 'react';
import { ThemeContext } from '../themeContext';
import { Checkbox } from '../Checkbox/Checkbox';

export const ToggleThemeCheckbox = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Checkbox 
            onChange={toggleTheme} 
            isChecked={theme === 'dark'}
            children={
                'Use Dark Mode'
            }
        />
    );
}