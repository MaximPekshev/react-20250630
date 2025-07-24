import { restaurants } from '../../materials/mock';
import { Layout } from '../layout/Layout';
import { RestaurantsPage } from '../restaurantsPage/RestaurantsPage';
import { ThemeContextProvider } from '../themeContext/ThemeContext';
import { UserContextProvider } from '../userContext/UserContext';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import './reset.css'

export const App = () => {
    return (
        <Provider store={store}>
            <UserContextProvider>
                <ThemeContextProvider>
                    <Layout>
                        <RestaurantsPage restaurants={restaurants} />
                    </Layout>
                </ThemeContextProvider>
            </UserContextProvider>
        </Provider>
    );
}