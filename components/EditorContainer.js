import { JSEditor, JSONEditor } from "./Editor.js";
import Title from "./Title.js";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

class EditorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      javascriptCode: "",
      jsonCode: ""
    };

    this.onJSCodeChange = this.onJSCodeChange.bind(this);
    this.onJSONCodeChange = this.onJSONCodeChange.bind(this);
  }

  onJSCodeChange(code) {
    this.setState({ javascriptCode: code });
  }

  onJSONCodeChange(code) {
    this.setState({ jsonCode: code });
  }

  render() {
    return (
      <FlexContainer>
        <div>
          <Title>index.js</Title>
          <JSEditor
            onChange={this.onJSCodeChange}
            name="js"
            value={this.state.javascriptCode}
          />
        </div>

        <div>
          <Title>package.json</Title>
          <JSONEditor
            onChange={this.onJSONCodeChange}
            name="json"
            value={this.state.jsonCode}
          />
        </div>
      </FlexContainer>
    );
  }
}

export default EditorContainer;
