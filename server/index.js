const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(3000, () => console.log(`Connected to port 3000`));
