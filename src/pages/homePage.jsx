import styles from '../components/home/homePage.module.css';
export const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <h1>Restaurants of our Town</h1>
            <p>Discover the best places to eat in our town.</p>
        </div>
    );
}