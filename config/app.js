const express = require('express');
const app = express();
//global middleware
app.use((req, resp, next) => {
    console.log(`ruta global de express`);
    return next();
})

module.exports = {
    appName: 'PruebasApiRest',
    app,
    express
}