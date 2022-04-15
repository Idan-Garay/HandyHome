import "./App.css";
// import Feedback from "./pages/Feedback";
import Request from "./pages/Request";
import { Grommet, Footer, Main, Header, Box, Anchor } from "grommet";
import { Tools } from "grommet-icons";
import theme from "./Theme";

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
          <Request />
          {/* <Feedback /> */}
        </Main>

        <Footer height="xsmall" border="top" justify="center">
          <b>Copyright © HandyWork 2022. All Rights Reserved.</b>
        </Footer>
      </div>
    </Grommet>
  );
}

export default App;
