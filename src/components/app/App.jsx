import { Layout } from '../layout/Layout';
import { RestaurantsPage } from '../../pages/restaurantsPage';
import { RestaurantPage } from '../../pages/restaurantPage';
import { ThemeContextProvider } from '../themeContext/ThemeContext';
import { UserContextProvider } from '../userContext/UserContext';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { HomePage } from '../../pages/homePage';
import { Menu } from '../menu/Menu';
import { Reviews } from '../reviews/Reviews';
import { DishPage } from '../../pages/dishPage';
import { CartPage } from '../../pages/cartPage';

import './reset.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <UserContextProvider>
                    <ThemeContextProvider>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<HomePage />} />
                                <Route path="/restaurants" element={<RestaurantsPage />}>
                                    <Route path=":restaurantId" element={<RestaurantPage />}>
                                        <Route index element={<Navigate to="reviews" replace />} />
                                        <Route path="menu" element={<Menu />} />
                                        <Route path="reviews" element={<Reviews />} />
                                    </Route>
                                </Route>
                                <Route path="/dishes/:dishId" element={<DishPage />}/>
                                <Route path="/cart" element={<CartPage />}/>
                            </Route>
                        </Routes>
                    </ThemeContextProvider>
                </UserContextProvider>
            </Provider>
        </BrowserRouter>
    );
}