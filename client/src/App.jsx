import { useState } from "react";
import { Menu } from "@headlessui/react";
import "./App.css";
import LoginPage from "./pages/login_page/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
