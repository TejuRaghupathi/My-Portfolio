var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set("view engine","ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('index');
});

app.get('/project1', function(req, res){
  res.render('project1');
})

app.get('/project2', function(req, res){
  res.render('project2');
})

app.listen(app.get('port'), function() {
    console.log('Application started at port: ' + app.get('port'));
});