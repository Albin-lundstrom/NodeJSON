const express = require('express'),
      fs = require('fs')

// process.argv[2]

const writeJSON = () => {
    if(fs.existsSync(`test.json`) == true){
    fs.readFile(`test.json`, 'utf8', (err, data) => {
        if (err) throw err;
        // console.log(data);
        let file = JSON.parse(data);
        // console.log(file)
        //Object.assign(file, users);
        file.users.push(response);
        file = JSON.stringify(file, null, 2)
        fs.writeFile(`test.json`, file,(err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
    }else{
        fs.writeFile(`test.json`, '{"users":[]}',(err) => {
            if (err) throw err;
            console.log('The file has been created!');
        });
        writeJSON();
    }
}

module.exports = {writeJSON};
