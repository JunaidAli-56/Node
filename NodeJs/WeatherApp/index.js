const fs = require("fs");
const http = require("http");
const requests = require("requests");

const indexFile = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("api.openweathermap.org/data/2.5/weather?q=Lahore&appid=de9ea8ed90ad9715e327cdd4f00d92ff").on("data", (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData]
            console.log(arrData);

        })
            .on("end", (err) => {
                if (err) return console.log("conection close due to error", err);
                console.log(end);

            })
    }
})
server.listen(7000, "127.0.0.1");   