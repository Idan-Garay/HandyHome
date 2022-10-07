import { useState } from "react";
// import { Menu } from "@headlessui/react";

import "./App.css";
import LoginPage from "./pages/login_page/view/LoginPage";
import {Route, Routes} from "react-router"

const RouteByName = ({name}) => {
  return <div>{name}</div>
}

function App() {

  return (
    <div className="App h-screen w-screen">
      {/* <Routes>
        <Route path="/" element={<RouteByName name="index"/>}/>
      </Routes> */}

      <LoginPage/>
    </div>
  );
}

export default App;
