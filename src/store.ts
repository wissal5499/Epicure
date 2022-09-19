import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './Components/Restaurants/restaurantsSlicer';
import chefsReducer from './Components/Chef/chefsSlicer';
import dishesReducer from './Components/Dishes/dishesSlicer'
import mealReducer from './Components/Restaurants/RestaurantsInfo/DishesType/mealsSlicer'
import counterSlicer from './Components/Restaurants/RestaurantsInfo/DishesType/DishInfo/counterSlicer';
import headerSlicer from './Components/Header/HeaderMobile/headerSlicer';

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      chefs: chefsReducer,
      dishes: dishesReducer,
      meals: mealReducer,
      quantity: counterSlicer,
      setMenueList: headerSlicer,
  },

})

