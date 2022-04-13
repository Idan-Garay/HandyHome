import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Feedback from "./pages/Feedback";
import Request from "./pages/Request";
import { Grommet } from "grommet";

function App() {
  return (
    <Grommet>
      <div className="App">
        <NavBar />
        <Request />
        <Footer />
      </div>
    </Grommet>
  );
}

export default App;
