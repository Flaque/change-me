import dynamic from "next/dynamic";
const AceEditor = dynamic(import("../vendor/AceEditor.js"));

const Editor = props => (
  <AceEditor
    mode={props.mode}
    theme="github"
    onChange={props.onChange}
    name={`editor-${props.name}`}
    value={props.value}
  />
);

const JSEditor = ({ onChange, name, value }) => (
  <Editor mode="javascript" onChange={onChange} name={name} value={value} />
);

const JSONEditor = ({ onChange, name, value }) => (
  <Editor mode="json" onChange={onChange} name={name} value={value} />
);

export { JSEditor, JSONEditor };
