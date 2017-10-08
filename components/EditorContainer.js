import EditorsView from "./EditorsView.js";
import styled from "styled-components";
import Button from "./Button.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
    this.onSubmitCode = this.onSubmitCode.bind(this);
  }

  onJSCodeChange(code) {
    this.setState({ javascriptCode: code });
  }

  onJSONCodeChange(code) {
    this.setState({ jsonCode: code });
  }

  onSubmitCode() {
    fetch("/upload", {
      method: "POST",
      body: { javascript: this.state.javascriptCode, json: this.state.json }
    });
  }

  render() {
    return (
      <ColumnContainer>
        <EditorsView />

        <div>
          <Button onClick={() => console.log("clicked")}> Upload </Button>
        </div>
      </ColumnContainer>
    );
  }
}

export default EditorContainer;
