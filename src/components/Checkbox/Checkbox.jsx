import styles from "./checkbox.module.css";

export const Checkbox = ({
    children, 
    isChecked,
    onChange,
}) => {
    return (
        <label className={styles.checkboxLabel}>
            <input 
                type="checkbox" 
                className={styles.checkbox}
                checked={isChecked} 
                onChange={onChange} 
            />
            {children}
        </label>
    );
}