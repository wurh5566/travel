var express = require('express');
var app = express();
var config = require('./config');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

"aaa,bbb,ccc,eee,default".replace(/\w+/g, function(method) {
    app.get("/" + method + "", function(req, res) {
        if (req.xhr) {
            res.sendfile(__dirname+"/"+config.tpl.path+method + '.html');
        } else {
            res.sendfile('index.html');
        }
    });
})


app.get("/ddd/:ddd?", function(req, res) {
    if (req.xhr) {
        res.sendfile(__dirname+"/"+config.tpl.path+"ddd.html");
    } else {
        res.sendfile('index.html');
    }
});


app.listen(config.server.port);
console.log("please open http://localhost:"+config.server.port+"/");