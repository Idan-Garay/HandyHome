import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Feedback from "./pages/Feedback";
import Request from "./pages/Request";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Request />
      <Footer />
    </div>
  );
}

export default App;
