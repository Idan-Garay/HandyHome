import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
