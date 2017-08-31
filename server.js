let express = require("express");
let app = express();

app.get("/", function(req, res) {
    res.sendFile("views/index.html", {root: __dirname})
    console.log("it worked");
});

app.use(express.static('public'));

var db = require('./models');

var controllers = require('./controllers');

app.get('/api', controllers.api.index);

app.get('/api/albums', controllers.albums.index);

app.listen(3000, function() {
});