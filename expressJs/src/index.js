const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();


const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// to set the view engine
app.set('view engine', 'hbs');

// Customize the view directory
app.set('views', templatePath);

hbs.registerPartials(partialsPath);

// template engine route
app.get("/", (req, res) => {
    // res.render('index.hbs'); 

    res.render('index.hbs', {
        computerName: "Jarviz",
    });

});
app.get("/about", (req, res) => {

    res.render("about.hbs")
});

app.get('/about/*', (req, res) => {
    res.render('404', {
        errorcomment: '404: about Page not found'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        errorcomment: '404: Page not found'
    });
});

// buitin middleware
app.use(express.static(staticPath));

//dummy data
// app.get(routing,callback).....
// "/" represent a home page.
app.get("/", (req, res) => {
    res.send("Hello jarviz wake up.");

});

app.get("/about", (req, res) => {
    res.send("Hello Jarviz on about page");
});

app.listen(8000, () => {
    console.log("port is listening on 8000");

});