const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

// middleware bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// routes calling
routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});