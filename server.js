const express = require('express');
const logger = require("./util/Logger.js").logger;
const server = express();

server.use(express.static("static"));

// Listen on port
let port = process.env.PORT;
if (port == undefined) port = 8080;

if (process.argv.length > 2 &&  process.argv[2] == '--dryrun') {
    exit(0);
}
logger.info("Starting server...");
server.listen(port);
logger.info("[Server] Listening on port " + port);