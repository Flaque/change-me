import { MutationsProvider } from "@react-mutate/core";
import Frame from "./Frame.js";
import EditorContainer from "./EditorContainer.js";
import { injectGlobal } from "styled-components";
import Title from "./Title.js";

injectGlobal`
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

const App = () => (
  <MutationsProvider mutations={{}}>
    <Frame>
      <Title> Change this website. </Title>
      <hr />
      <EditorContainer />
    </Frame>
  </MutationsProvider>
);

export default App;
