import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './Components/Restaurants/restaurantsSlicer';
import chefsReducer from './Components/Chef/chefsSlicer';
import counterSlicer from './Components/Restaurants/RestaurantsInfo/DishesType/DishInfo/counterSlicer';

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      chefs: chefsReducer,
      quantity: counterSlicer
  },

})

