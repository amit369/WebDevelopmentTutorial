const fs = require('fs');

fs.readFile('file1.txt','utf-8', (err,data) => {
        if(err)
        {
        console.error('Error reading file.txt',err);
        }

    fs.readFile('file2.txt', 'utf-8', (err,data) => {
        if(err)
        {
            console.error('Error reading file2.txt', err);
        }
    })    
})