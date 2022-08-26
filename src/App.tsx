import "./App.css";
import SetWindowSize from "./Components/helper/setWindowSize";
import Layout from "./Components/Layout/Mobile/Layout";
import LayoutDesktop from "./Components/Layout/Desktop/Layout";

function App() {
  const windowSize = SetWindowSize();
  return (
    <div className="App">
      {windowSize < 600 ? <Layout /> : <LayoutDesktop />}
    </div>
  );
}

export default App;
