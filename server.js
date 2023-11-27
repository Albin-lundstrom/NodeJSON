const { writeJSON } = require('./app.js');
      express = require('express'); 
      app = express(); 
      bodyParser = require('body-parser');  

// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})
app.get('/html/create.html', function (req, res) {  
    res.sendFile( __dirname + "/html/" + "create.html" );  
 })  
app.post('/create', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      username:req.body.username,
      birthday:req.body.birthday,
      work:req.body.work,
      img:req.body.img,
   };
   console.log(response);
   writeJSON();
   res.sendFile( __dirname + "/html/" + "create.html" );  
})
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/html/" + "view.html" );  
})
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  