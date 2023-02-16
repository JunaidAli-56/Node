const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello jarviz this is home page");
});
app.get("/about", (req, res) => {
    res.status(200).send("Hello jarviz this is about page");
});
app.get("/contact", (req, res) => {
    // write for some little html...
    res.write("<h1>Hello jarviz this is contact page</h1>");
    res.write("<h3>Hello jarviz again this is contact page</h3>");
    res.send();
});
app.get("/temp", (req, res) => {
    // send JSON data with help of this...auto convert into string.
    res.send([
        {
            id: 1234,
            name: "Jarviz",
        },
        {
            id: 7869,
            name: "N_Exitence",
            age: 00000
        },
        {
            id: 08349,
            name: "ali",
            age: 23
        }
    ]);

    // the method are identical when an object or array is passed,but res.json() will also convert non objects, such as null and undefined,which are not valid JSON
    // res.json([
    //     {
    //         id: 45,
    //         name: "Jar",
    //         age: undefined
    //     },
    //     {
    //         id: 7869,
    //         name: "Exitence",
    //         age: 00000
    //     },
    //     {
    //         id: 08349,
    //         name: "ali",
    //         age: 23
    //     }
    // ]);
});


app.listen(port, () => {
    console.log(`listening on port no ${port}`);

});