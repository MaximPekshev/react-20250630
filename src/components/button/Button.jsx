import styles from './button.module.css';
import classNames from 'classnames';
import { ThemeContext } from '../themeContext';
import { useContext } from 'react';

export const Button = ({ 
    children, 
    onClick, 
    isDisabled,
    sizeViewVariant = 's'
}) => {
    const { theme } = useContext(ThemeContext);
    return (
        <button 
            className={classNames(styles.primaryButton, { 
                [styles.isDisabled]: isDisabled,
                [styles.xs]: sizeViewVariant === 'xs',
                [styles.s]: sizeViewVariant === 's',
                [styles.l]: sizeViewVariant === 'l',
                [styles.dark]: theme === 'dark',
                [styles.light]: theme === 'light',
            })} 
            onClick={onClick} 
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}