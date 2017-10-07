import { MutationsProvider } from "@react-mutate/core";
import Frame from "./Frame.js";
import EditorContainer from "./EditorContainer.js";
import { injectGlobal } from "styled-components";

injectGlobal`
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

const App = () => (
  <MutationsProvider mutations={{}}>
    <Frame>
      <EditorContainer />
    </Frame>
  </MutationsProvider>
);

export default App;
