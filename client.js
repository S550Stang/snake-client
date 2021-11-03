const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    // this is an object
    host: "165.227.47.243", // IP address here,
    port: "50541", // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // conn.write("Name: PRA");
    conn.write("Say: I'll Hack Your Mac");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
