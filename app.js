const { app } = require("../config/app");

app.use('/api', require('./routes/api'))

app.use('/', require('./routes/web'))