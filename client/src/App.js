import React, { useEffect, useReducer } from "react";
import "./App.css";
// import Feedback from "./pages/Feedback";
// import Request from "./pages/Request";
import { Grommet, Footer, Main, Header, Box, Nav } from "grommet";
import theme from "./Theme";
import NavBar from "./components/NavBar";
import IndexRoutes from "./pages/Index";
import { useNavigate } from "react-router-dom";

const initialState = {
  accountType: 0,
  username: "",
  email: "",
  profileId: 0,
  isAuthorized: false,
  verified: false,
  picture: "",
};

const accountReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "LOGIN_ACCOUNT":
      if (action.payload.verified) {
        newState = { ...action.payload, isAuthorized: true };
        localStorage.setItem("user", JSON.stringify(newState));
      }
      break;
    case "LOGOUT_ACCOUNT":
      newState = {
        accountType: 0,
        username: "",
        email: "",
        profileId: 0,
        isAuthorized: false,
      };
      localStorage.removeItem("user");
    case "INIT_ACCOUNTSTATE":
      newState = { ...initialState };
      break;
    default:
      throw new Error(`action type: ${action.type} not found`);
  }
  return newState;
};

export const AccountContext = React.createContext();

function App() {
  const navigate = useNavigate();
  const [accountState, dispatch] = useReducer(
    accountReducer,
    initialState,
    (initial) => {
      const user = localStorage.getItem("user");
      if (user !== "undefined") return JSON.parse(user);
      return initial;
    }
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(accountState));
    if (!accountState) {
      dispatch({ type: "INIT_ACCOUNTSTATE" });
      navigate("/login");
    }
  }, [accountState]);

  return (
    <AccountContext.Provider value={{ accountState, dispatch }}>
      <Grommet theme={theme}>
        <div className="App">
          <Header justify="between" height="5em" pad="small-top">
            <NavBar {...accountState} />
          </Header>

          <Main justify="center" height="full">
            <IndexRoutes
              accountType={!accountState ? 0 : accountState.accountType}
            />
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
