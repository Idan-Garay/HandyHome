import "./App.css";
import NavBar from "./components/NavBar";
// import Feedback from "./pages/Feedback";
import Request from "./pages/Request";
import { Grommet, Footer, Main, Header, Box, Anchor } from "grommet";
import { Tools } from "grommet-icons";
import styled from "styled-components";

const LogoSection = styled.div`
  max-width: 25%;
  width: 20%;
  border: 1px solid black;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

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
          <Request />
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
