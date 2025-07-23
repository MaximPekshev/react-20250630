import { useCallback, useState } from 'react';
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    }, []);

    return (
        <ThemeContext value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext>
    );
};