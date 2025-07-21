import styles from './button.module.css';
import classNames from 'classnames';

export const Button = ({ 
    children, 
    onClick, 
    isDisabled,
    sizeViewVariant = 's'
}) => {
    return (
        <button 
            className={classNames({ 
                [styles.isDisabled]: isDisabled,
                [styles.xs]: sizeViewVariant === 'xs',
                [styles.s]: sizeViewVariant === 's',
                [styles.l]: sizeViewVariant === 'l',
            })} 
            onClick={onClick} 
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}