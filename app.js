const express = require('express')
const port = 3000;
const path = require('path');
const cors = require('cors');
const corsConfig = require('./cors.config');

const bookRouter = require('./routes/book');

const app = express();

app.use('', cors(corsConfig.api));

app.use('/book', bookRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})