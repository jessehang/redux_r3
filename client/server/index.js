const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(3000, () => console.log(`Connected to port 3000`));
