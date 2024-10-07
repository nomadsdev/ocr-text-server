const express = require('express');
const cors = require('cors');
const router = require('./routes/main');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.listen(port, () => {
    console.log(`OCR server running at http://localhost:${port}`);
});