const fs = require('fs');
const bioData = {
    name: 'Junaid',
    age: '23',
    job: 'programmer'
}
console.log(bioData);

// 1: Convert  to JSON
// 2: Add to second file.
// 3: readFile.
// 4 again convert json to obj
// 5: console.log

const jsData = JSON.stringify(bioData);
console.log(jsData);

fs.writeFile("jsonFile.json", jsData, (err) => {
    console.log("Done");
})

fs.readFile("jsonFile.json", "utf-8", (err, data) => {
    console.log(data);
    // again convert json to obj
    const orgData = JSON.parse(data);
    console.log(orgData);
})