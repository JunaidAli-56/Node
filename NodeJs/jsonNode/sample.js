const bioData = {
    name: 'Junaid',
    age: '23',
    job: 'programmer'
}
console.log(bioData);
// console.log(bioData.name);

// Converting Object into JSON
const jsonData = JSON.stringify(bioData);  //stringify convert object to JSON
console.log(jsonData);

// Converting JSON into Object

const objData = JSON.parse(jsonData);  // parse convert JSON to Object
console.log(objData);
// console.log(objData.age);
