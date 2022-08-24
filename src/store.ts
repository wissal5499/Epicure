import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './Components/Restaurants/restaurantsSlicer';

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
  },

})

