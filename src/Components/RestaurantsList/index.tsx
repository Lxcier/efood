import { RestaurantsContainer, RestaurantsList as List } from './styles'

import Restaurant from '../Restaurant'
import RestaurantModel from '../../models/Restaurant'

export type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <RestaurantsContainer>
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            title={restaurant.title}
            image={restaurant.image}
            rate={restaurant.rate}
            page={restaurant.page}
            description={restaurant.description}
          />
        ))}
      </List>
    </RestaurantsContainer>
  )
}

export default RestaurantsList
