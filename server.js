const { writeJSON } = require('./app.js');
      express = require('express'); 
      app = express(); 
      bodyParser = require('body-parser');
const fs = require('fs')
const url = require('url');

let selectedUser = undefined;

const multer = require('multer');
const upload = multer({ dest: 'img/' });

const data = fs.readFileSync(`test.json`, 'utf8')
let file = JSON.parse(data);

// Create application/x-www-form-urlencoded parser  

app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true })); 
app.use(express.static(__dirname));  
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})
app.get('/create', function (req, res) {  
    res.sendFile( __dirname + "/html/" + "create.html" );  
})  


app.post('/createUser', upload.single('image'), (req, res) => {  
//    // Prepare output in JSON format
   const image = req.file ? req.file.filename : '';
   response = {
      first_name:req.body.firstname,
      last_name:req.body.lastname,
      username:req.body.username,
      birthday:req.body.birthday,
      work:req.body.profession,
      img:image,
   };
   console.log(response);
   writeJSON();
   res.sendFile( __dirname + "/html/" + "create.html" );  
})

app.get('/view', function (req, res) {  
   res.sendFile( __dirname + "/html/" + "view.html" );  
})
app.get('/edit', function (req, res) {  
   res.sendFile( __dirname + "/html/" + "edit.html" );  
})
app.get('/card:id', (req, res) => {
   res.sendFile(__dirname + '/html/card.html');
 
   const query = url.parse(req.url, true).query;
   selectedUser = file[query.user];
   console.log(selectedUser);
});
app.get('/jsonfile', function (req, res) {  
   res.json(file);  
})
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})