import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './Components/Restaurants/restaurantsSlicer';
import chefsReducer from './Components/Chef/chefsSlicer';

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      chefs: chefsReducer,
  },

})

