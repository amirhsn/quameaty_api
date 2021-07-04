//import all required packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//automatically for app to use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app listen to port
var port = 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

//ROUTES
//import routes
const getUser = require('./routes/getUserRoutes');
const postUser = require('./routes/postUserRoutes');
//get users
app.use('/api/users/get',getUser);
//post users
app.use('/api/users/post',postUser);