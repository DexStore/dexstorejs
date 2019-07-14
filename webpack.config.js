var path = require("path");

module.exports = {
    entry: "./dist/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "dexstorejs.cjs",
        library: "",
        libraryTarget: "commonjs"
    }
};
