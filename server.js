//Including required packages and middleware
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
//Creating App object by calling express function
const app = express();
//Adding middleware
app.use(cors());
app.use(express.json());
//Including body parser middleware
app.use(bodyParser.json());
//Using Helmet to secure the backend of the app
app.use(helmet());
//Using the routes directory with the '/' endpoint
app.use('/', routes);
//Setting port variable and listening on port 5150
const port = 5150;
app.listen(port, () => console.log(
    `Now listening at http://localhost:${port}`
));
