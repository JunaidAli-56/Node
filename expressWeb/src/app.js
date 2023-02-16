const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// public static path
const staticPath = (path.join(__dirname, "../public"));

app.use(express.static(staticPath));

const template_path = (path.join(__dirname, "../templates/views"));
const partials_path = (path.join(__dirname, "../templates/partials"));

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

// routing for static web
// app.get("/", (req, res) => {
//     res.send("Welcome to the Home Page");
// });
// app.get("/about.html", (req, res) => {
//     res.send("Welcome to the about Page");
// });
// app.get("/weather", (req, res) => {
//     res.send("Welcome to the weather page");
// });
// app.get("*", (req, res) => {
//     res.send("404: Page not Found");
// });

// routing for dynamic web
app.get("/", (req, res) => {
    res.render('index.hbs');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/weather", (req, res) => {
    res.render('weather');
});
app.get("*", (req, res) => {
    res.render('page404'), {
        errorMsg: 'Opps! Page Not Found'
    }
});

app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
});