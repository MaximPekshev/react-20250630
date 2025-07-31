import { useSelector } from 'react-redux';
import { selectCartItemIds } from '../../redux/entities/cart/slice';
import { CartItem } from '../cartItem/CartItem';
import styles from './cart.module.css';
import { TabLink } from '../tabLink/TabLink';

export const Cart = () => {
    const cartItems = useSelector(selectCartItemIds);

    return (
        <>
            <div className={styles.cart}>
                <h3 className={styles.h3}>Cart</h3>
                { cartItems.length === 0 && <p>Your cart is empty</p> }
                <ul>
                    {cartItems.map(itemId => (
                        <li key={itemId}>
                        <CartItem id={itemId} />
                        </li>
                    ))}
                </ul>
            </div>
            <TabLink to={`/restaurants`} children="Back to restaurants" />
        </>
    );
}