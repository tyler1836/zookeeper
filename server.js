const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
//parse incoming string data or array data
app.use(express.urlencoded({ extended: true }))
//parse incoming JSON data
app.use(express.json())
// if / is endpoint html will be used if /api apiroutes will be used
app.use('./api', apiRoutes);
app.use('/', htmlRoutes);
//send css and js
app.use(express.static('public'))


app.listen(PORT, () => {
    console.log(`api server now on port ${PORT}!`)
})



