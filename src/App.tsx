import "./App.css";
import SetWindowSize from "./Components/helper/setWindowSize";
import Layout from "./Components/Layout/Mobile/Layout";
import LayoutDesktop from "./Components/Layout/Desktop/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurants } from "./Components/Restaurants/restaurantsSlicer";
import { setChefs } from "./Components/Chef/chefsSlicer";
import { setDishes } from "./Components/Dishes/dishesSlicer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchFunction() {
      const restaurantsURL =
        "http://localhost:3001/api/restaurants/getRestaurants";
      const chefsURL = "http://localhost:3001/api/chefs/getChefs";
      const dishesURL = "http://localhost:3001/api/dishes/getDishes";

      const restaurants = await (await fetch(restaurantsURL)).json();
      const dishes = await (await fetch(dishesURL)).json();
      const chefs = await (await fetch(chefsURL)).json();

      dispatch(setRestaurants(restaurants));
      dispatch(setDishes(dishes));
      dispatch(setChefs(chefs));
    }
    fetchFunction();
  }, []);

  const windowSize = SetWindowSize();
  return (
    <div className="App">
      {windowSize < 600 ? <Layout /> : <LayoutDesktop />}
    </div>
  );
}

export default App;
