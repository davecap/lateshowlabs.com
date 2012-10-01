var express = require("express");
var app = express();

app.configure(function(){
    app.use(express.static(__dirname + '/dist'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    
    //Error Handling
    app.use(express.logger());
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
    
    //Setup the Route, you are almost done
    app.use(app.router);
});

app.get('/', function(req, res){
    //Apache-like static index.html (public/index.html)
    res.redirect("/index.html");
    //Or render from view
    //res.render("index.html")
});

//Heroku
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});