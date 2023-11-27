express = require('express'); 
app = express(); 
const users = require('./users');

app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "test.html" );
    res.write("<h1>View user information</h1>")
    res.write("<div class='d-flex flex-row bd-highlight mb-3'>")
    for(var i=0; i < users.users.length; i++){
        res.write(`<span class="p-2 bd-highlight">`);
        res.write(`<p>${users.users[i].name}</p>`);
        res.write(`<p>${users.users[i].age}</p>`);
        res.write(`<p>${users.users[i].occupation}</p>`);
        res.write(`<p>${users.users[i].married}</p>`);
        res.write(`<p>${users.users[i].children}</p>`);
        res.write(`<p>${users.users[i].name}</p>`);
        res.write(`<p>${users.users[i].name}</p>`);
        res.write(`</span>`);
    }
    res.write("</div>")
    res.end("");
})

app.get('/js/bootstrap.min.js', function (req, res) {  
    res.sendFile( __dirname + "/js/" + "bootstrap.min.js" );  
})

app.get('/css/bootstrap.min.css', function (req, res) {  
    res.sendFile( __dirname + "/css/" + "bootstrap.min.css" );  
})


var server = app.listen(1337, function () { 
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
})  