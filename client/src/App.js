import "./App.css";
// import Feedback from "./pages/Feedback";
// import Request from "./pages/Request";
import Discovery from "./pages/Discovery";
import { Grommet, Footer, Main, Header, Box, Anchor } from "grommet";
import { Tools } from "grommet-icons";
import theme from "./Theme";
import { Routes, Route } from "react-router-dom";
import RequestByEmployer from "./components/Order/RequestByEmployer";
import Profile from "./pages/Profile";

function App() {
  return (
    <Grommet theme={theme}>
      <div className="App">
        <Header justify="between" height="3.5em" pad="small-top">
          <Box pad="xxsmall">
            <Anchor icon={<Tools color="accent-4" size="large" />} />
          </Box>
          <Box justify="evenly" direction="row" width="medium">
            <Box>
              <Anchor href="##" weight="normal">
                Discover
              </Anchor>
            </Box>
            <Box>
              <Anchor href="##" weight="normal">
                List
              </Anchor>
            </Box>
            <Box>
              <Anchor href="##" weight="normal">
                Register
              </Anchor>
            </Box>
          </Box>
        </Header>

        <Main fill="horizontal" justify="center">
          {/* <Request /> */}
          {/* <Feedback /> */}
          <Routes>
            {/* <Route path="/" element={<Discovery />} /> */}
            <Route path="/" element={<Profile />} />
          </Routes>
          <Routes>
            <Route path="/request" element={<RequestByEmployer />} />
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
