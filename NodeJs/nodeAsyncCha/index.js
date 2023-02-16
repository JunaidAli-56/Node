const fs = require('fs');

fs.mkdir('Junaid', (error) => {
    //console.log("folder created");

});

fs.writeFile('./Junaid/bio.txt', 'my name is jarviz in infinity universe...', (err) => {
    //console.log('files created');
});

fs.appendFile('Junaid/bio.txt', 'You did not find me..', (err) => {
    //console.log('data is appended'); 
});

fs.readFile('Junaid/bio.txt', 'utf-8', (err, data) => {
    //console.log(data);
})

fs.rename('Junaid/bio.txt', 'Junaid/junaid.txt', (err) => {
    console.log('rename Successfully');
});

// fs.unlink('Junaid/junaid.txt', () => {
//      console.log('file deleted');

// })

// fs.rmdir('./Junaid',()=>{
//     console.log('folder delete');
// });