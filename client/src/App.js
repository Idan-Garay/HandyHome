import React, { useReducer } from "react";
import "./App.css";
// import Feedback from "./pages/Feedback";
// import Request from "./pages/Request";
import { Grommet, Footer, Main, Header, Box } from "grommet";
import theme from "./Theme";
import NavBar from "./components/NavBar";
import IndexRoutes from "./pages/Index";
// import nodemailer from "nodemailer";

const initialState = {
  accountType: 0,
  username: "",
  email: "",
  profileId: 0,
  isAuthorized: false,
};

const accountReducer = (state, action) => {
  let newState;

  /* action: {type, payload} type & payload are conventions
     type -> describes the action to be done
     payload -> data accompanied by the action
  */

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

export const AccountContext = React.createContext();

function App() {
  const [accountState, dispatch] = useReducer(accountReducer, initialState);

  return (
    <AccountContext.Provider value={{ accountState, dispatch }}>
      <Grommet theme={theme}>
        <div className="App">
          <Header justify="between" height="3.5em" pad="small-top">
            <NavBar />
          </Header>

          <Main fill="horizontal" justify="center">
            <IndexRoutes />
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
