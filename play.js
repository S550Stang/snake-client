const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let returnObj = connect();
setupInput(returnObj);
