import Home from "./pages/home/Home";
import Forecasts from "./pages/forecasts/Forecasts";
import ReactCardFlip from "react-card-flip";
import { useForecastContext } from "./components/Provider";

function App() {
  const { flip, handleClick } = useForecastContext();

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <Home></Home>
      <Forecasts></Forecasts>
    </ReactCardFlip>
  );
}

export default App;
