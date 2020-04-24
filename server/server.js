const express = require('express');
const bodyParser = ('body-parser');

const app = express();

const port = process.env.Port || 5000;

app.listen(port, () => console.log('Server now running on port ' + port + '!'));