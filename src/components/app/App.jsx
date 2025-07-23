import { restaurants } from '../../materials/mock';
import { Layout } from '../layout/Layout';
import { RestaurantsPage } from '../restaurantsPage/RestaurantsPage';
import { ThemeContextProvider } from '../themeContext/ThemeContext';
import { UserContextProvider } from '../userContext/UserContext';

import './reset.css'

export const App = () => {
    return (
        <UserContextProvider>
            <ThemeContextProvider>
                <Layout>
                    <RestaurantsPage restaurants={restaurants} />
                </Layout>
            </ThemeContextProvider>
        </UserContextProvider>
    );
}