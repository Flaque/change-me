import { JSEditor, JSONEditor } from "./Editor.js";
import Title from "./Title.js";
import styled from "styled-components";

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const EditorsView = props => (
  <RowContainer>
    <div>
      <Title>index.js</Title>
      <JSEditor
        onChange={props.onJSCodeChange}
        name="js"
        value={props.javascriptCode}
      />
    </div>

    <div>
      <Title>package.json</Title>
      <JSONEditor
        onChange={props.onJSONCodeChange}
        name="json"
        value={props.jsonCode}
      />
    </div>
  </RowContainer>
);

export default EditorsView;
