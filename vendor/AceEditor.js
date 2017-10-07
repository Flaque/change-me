if (global && global.window) {
  require("brace");
  require("brace/mode/javascript");
  require("brace/mode/json");
  require("brace/theme/github");
  module.exports = require("react-ace");
} else {
  module.exports = () => <div> Hold on a moment... </div>;
}
