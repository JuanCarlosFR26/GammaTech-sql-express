const express = require('express');
const PORT = process.env.PORT || 8000
const app = express();
const router = require('./routes/routes');
require('dotenv').config();

app.use(express.json());

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})