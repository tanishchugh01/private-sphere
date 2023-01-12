const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/JSX/components",
    "@pages": "src/JSX/pages",
    "@api": "src/client/api"
  })(config);
  return config;
};
