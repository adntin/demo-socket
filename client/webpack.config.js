module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: require("path").join(__dirname, "./dist"),
    filename: "app.js"
  }
};
