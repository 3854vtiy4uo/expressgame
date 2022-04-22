const express = require('express');
const path = require('path');
const public = path.join(__dirname, "public");
const app = express();
app.use(express.static(public));
app.get('/', (request, response) => {response.sendFile(path.join(public, 'index.html'))});
app.listen(3010, () => {console.log('> Server running on port 3010')})