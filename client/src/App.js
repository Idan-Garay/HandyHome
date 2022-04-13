import "./App.css";
import Feedback from "./pages/Feedback";
// import Request from "./pages/Request";
import { Grommet, Footer, Main, Header, Box, Anchor } from "grommet";
import { Tools } from "grommet-icons";

function App() {
  return (
    <Grommet>
      <div className="App">
        <Header
          background="light-1"
          justify="between"
          height="3.5em"
          pad="small-top"
        >
          <Box pad="xxsmall">
            <Anchor icon={<Tools color="accent-4" size="large" />} />
          </Box>
          <Box justify="evenly" direction="row" width="medium">
            <Box>
              <Anchor href="##">Discover</Anchor>
            </Box>
            <Box>
              <Anchor href="##">List</Anchor>
            </Box>
            <Box>
              <Anchor href="##">Register</Anchor>
            </Box>
          </Box>
        </Header>

        <Main>
          {/* <Request /> */}
          <Feedback />
        </Main>

        <Footer
          height="xsmall"
          border={{ top: "1px solid black" }}
          justify="center"
        >
          <b>Copyright © HandyWork 2022. All Rights Reserved.</b>
        </Footer>
      </div>
    </Grommet>
  );
}

export default App;
