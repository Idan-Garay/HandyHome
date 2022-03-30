import "./App.css";
import OrderDetails from "./components/OrderDetails";
import Rating from "./components/Rating";

function App() {
  return (
    <div className="App">
      <Rating ratingLabel="Communication with Seller" />
      <br />
      <OrderDetails />
    </div>
  );
}

export default App;
