const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const path = require('path');
const public = path.join(__dirname,'public');
app.use(express.static(public));
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
    })
    
app.get('/home', function(req, res) {
res.sendFile(path.join(public, 'index.html'));
})

app.use(function(req, res) {
res.status(404);
res.send('Oops! We didn\'t find what you are looking for.');
})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });