"use strict";

var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var fs = require("fs");
var http = require("http");
var path = require("path");
var express = require("express");

var defaultRoute = require("./app/routes/default.route.js");

console.log('It Works !');

// init server
var app = express();
var server = http.createServer(app);
server.listen(CONFIG.port, function() {
    var host = this.address().address;
    var port = this.address().port;
    console.log('example app listening at http://%s:%s', host, port);
});


app.use(defaultRoute);

app.use("/index", express.static(path.join(__dirname, "public/")));


//Q_13.1
app.get("/loadPres", function(request, response) {

    var jsonData = {};

    fs.readdir(CONFIG.presentationDirectory, function(err, files) {

        if (err) {
            console.error(err.message);
            return response.status(500).end(err.message);
        }

        var filteredFiles;
        files.filter(function(file) {
            filteredFiles = files.filter(extension);
        });

        filteredFiles.forEach(function(file) {

            fs.readFile(path.join(CONFIG.presentationDirectory, file), 'utf8', function(err, data) {
                if (err) {
                    console.error(err.message);
                    return response.status(500).end(err.message);
                }
                var obj = JSON.parse(data);
                var Id = obj.id;

                jsonData[Id] = obj;


                if (Object.keys(jsonData).length == filteredFiles.length) {

                    console.dir(jsonData);
                    response.end(JSON.stringify(jsonData));
                }
            });
        });
    });

});


function extension(element) {
    var extName = path.extname(element);
    return extName === '.json';
};



app.post("/savePres", function(request, response) {
    var Id = "";
    var response_data = "";
    request.accepts('application/json');
    request.on("data", function(data) {
        if (data) {
            response_data += data
        }
    });
    request.on("end", function() {
        console.log(response_data.toString().length);
        console.log(response_data);
        var obj = JSON.parse(response_data);
        Id = obj.id;
        fs.writeFile(path.join(CONFIG.presentationDirectory, Id + ".pres.json"), response_data, function(err) {
            if (err) {
                console.error(err.message);
                return response.status(500).end(err.message);
            }
            response.end();
        });
    });
});