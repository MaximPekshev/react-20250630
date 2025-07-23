import { restaurants } from '../../materials/mock';
import { Layout } from '../layout/Layout';
import { RestaurantsPage } from '../restaurantsPage/RestaurantsPage';
import { ThemeContextProvider } from '../themeContext/themeContext';

import './reset.css'

export const App = () => {
    return (
        <ThemeContextProvider>
            <Layout>
                <RestaurantsPage restaurants={restaurants} />
            </Layout>
        </ThemeContextProvider>
    );
}