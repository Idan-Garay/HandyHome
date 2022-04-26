import "./App.css";
// import Feedback from "./pages/Feedback";
// import Request from "./pages/Request";
// import Discovery from "./pages/Discovery";
import { Grommet, Footer, Main, Header, Box } from "grommet";
import { Tools } from "grommet-icons";
import theme from "./Theme";
import { Routes, Route, NavLink } from "react-router-dom";
import RequestByEmployer from "./components/Order/RequestByEmployer";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import styled from "styled-components";
import RegisterPrompt from "./components/Prompts/RegisterPrompt";
import JobHistory from "./components/Job/JobHistory";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #00c9aa;
`;

function App() {
  return (
    <Grommet theme={theme}>
      <div className="App">
        <Header justify="between" height="3.5em" pad="small-top">
          <Box pad="xxsmall">
            <StyledNavLink
              to="/"
              icon={<Tools color="accent-4" size="large" />}
            />
          </Box>
          <Box justify="evenly" direction="row" width="medium">
            <Box>
              <StyledNavLink to="/discover">Discover</StyledNavLink>
            </Box>
            <Box>
              <StyledNavLink to="/list" weight="normal">
                List
              </StyledNavLink>
            </Box>
            <Box>
              <StyledNavLink to="/register" weight="normal">
                Register
              </StyledNavLink>
            </Box>
          </Box>
        </Header>

        <Main fill="horizontal" justify="center">
          <Routes>
            <Route path="/" element={<Register />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile/:id" element={<Profile />} />
            <Route
              path="/profile/:id/request"
              element={<RequestByEmployer />}
            />
            <Route path="/registerPrompt" element={<RegisterPrompt />} />
            <Route path="/jobhistory" element={<JobHistory />} /> 
            {/* added */}
          </Routes>
        </Main>

        <Footer height="xsmall" border="top" justify="center">
          <b>Copyright © HandyWork 2022. All Rights Reserved.</b>
        </Footer>
      </div>
    </Grommet>
  );
}

export default App;
