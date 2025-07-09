import { restaurants } from '../../materials/mock';
import { Layout } from '../layout/Layout';
import { RestaurantsPage } from '../restaurantsPage/RestaurantsPage';
export const App = () => {
    return (
        <Layout>
           <RestaurantsPage restaurants={restaurants} />
        </Layout>
    );
}