import React, { useReducer } from "react";
import "./App.css";
// import Feedback from "./pages/Feedback";
// import Request from "./pages/Request";
import Discovery from "./pages/Discovery";
import { Grommet, Footer, Main, Header, Box } from "grommet";
import theme from "./Theme";
import { Routes, Route } from "react-router-dom";
import RequestByEmployer from "./components/Order/RequestByEmployer";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import RegisterPrompt from "./components/Prompts/RegisterPrompt";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
// import nodemailer from "nodemailer";

const initialState = {
  accountType: 0,
  username: "",
  email: "",
  profileId: 0,
};

const accountReducer = (state, action) => {
  let newState;

  // action: {type, payload} type & payload are conventions
  // type -> describes the action to be done
  // payload -> data accompanied by the action

  switch (action.type) {
    case "LOGIN_ACCOUNT":
      if (action.payload) newState = { ...action.payload };
      break;
    case "LOGOUT_ACCOUNT":
      newState = {
        accountType: 0,
        username: "",
        email: "",
        profileId: 0,
      };

      break;
    default:
      throw new Error(`action type: ${action.type} not found`);
  }
  return newState;
};

const AccountContext = React.createContext();

function App() {
  const [accountState, dispatch] = useReducer(accountReducer, initialState);

  return (
    <AccountContext.Provider value={accountState}>
      <Grommet theme={theme}>
        <div className="App">
          <Header justify="between" height="3.5em" pad="small-top">
            <NavBar />
          </Header>

          <Main fill="horizontal" justify="center">
            {/* <Request /> */}
            {/* <Feedback /> */}
            <Routes>
              <Route path="/" element={<Discovery />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register/success" element={<RegisterPrompt />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route
                path="/profile/:id/request"
                element={<RequestByEmployer />}
              />
            </Routes>
          </Main>

          <Footer height="xsmall" border="top" justify="center">
            <b>Copyright © HandyWork 2022. All Rights Reserved.</b>
          </Footer>
        </div>
      </Grommet>
    </AccountContext.Provider>
  );
}

export default App;
