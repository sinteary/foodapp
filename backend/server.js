const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');

// TODO: Require route files
const apiRoutes = require('./routes/api-routes');

// load env vars
dotenv.config({ path : './config/config.env' });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// TODO: Mount routers
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

// Route to frontend homepage
app.get("/", (req, res) => res.end("Welcome to foodapp!"));

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
