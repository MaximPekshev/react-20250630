import { createRoot } from 'react-dom/client'
import { restaurants } from './materials/mock'

createRoot(document.getElementById('root')).render(
  <div>
    {restaurants.map(restaurant => (
      <div key={ restaurant.id }>
        <h2>{ restaurant.name }</h2>
        <h3>Menu</h3>
        <ul>
          {restaurant.menu.map(menuItem => (
            <li key={ menuItem.id }>
              {menuItem.name} - ${menuItem.price}
            </li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul>
          {restaurant.reviews.map(reviewItem => (
            <li key={ reviewItem.id }>
              <strong>User:</strong> {reviewItem.user} <br />
              <strong>Rating:</strong> {reviewItem.rating} ⭐️<br />
              <strong>Comment:</strong> {reviewItem.text}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)
