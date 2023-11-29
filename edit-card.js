const fs = require('fs');
const fileName = './test.json';
const file = require(fileName);


    index = 0;
    file.users[index].first_name = "new value";
        
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
      if (err) return console.log(err);
      console.log(JSON.stringify(file));
      console.log('writing to ' + fileName);
    });
