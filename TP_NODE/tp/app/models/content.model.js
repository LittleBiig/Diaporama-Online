"use strict";


var fs = require("fs");
var path = require("path");
var CONFIG = require("../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);


var contentModel = function(cmodel) {

    cmodel = check_attr(cmodel);
    this.type = cmodel.type;
    this.id = cmodel.id;
    this.title = cmodel.title;
    this.fileName = cmodel.fileName;
    this.src = cmodel.src;

    var data = cmodel.data;

    this.getData = function() {
        return data;
    }

    this.setData = function(data2) {
        if (data2 === "undefined") { return -1; }
        data = data2;
    }

    function check_attr(cmodel) {
        if (typeof cmodel === "undefined") {
            cmodel = { type: null, id: null, title: null, fileName: null, src: null, data: null };
        }
        return cmodel;
    }

}


contentModel.create = function(content, callback) {

    if (!content.id) {
        return callback(new Error("L'id est nul ou n'est pas défini"));
    }
    if (!content.type) {
        return callback(new Error("Le type est nul ou n'est pas défini"));
    }
    if (!content.title) {
        return callback(new Error("Le title est nul ou n'est pas défini"));
    }
    
    console.log('--------------create  new file');
    fs.writeFile(path.join(CONFIG.contentDirectory, content.fileName), content.getData(), function(err) {
        if (err) {
            console.log(err.message);
            return callback(err);
        }
        fs.writeFile(path.join(CONFIG.contentDirectory, content.id + ".meta.json"), JSON.stringify(content), function(err) {
            if (err) {
                console.log(err.message);
                return callback(err);
            }
            console.log('CREATED ' + content.id);
            console.log('file created successfully');
            callback();
        });
    });

};

contentModel.read = function(id, callback) {

    if (!id) {
        return callback(new Error("L'id est nul ou n'est pas défini"));
    }


    console.log("id en parametre :", id);
    fs.readFile(path.join(CONFIG.contentDirectory, id + ".meta.json"), 'utf8', function(err, data) {
        if (err) {
            console.log(err.message);
            return callback(err);
        }

        var obj = JSON.parse(data);
        var content = new contentModel(obj);
        callback(null, content);

    });

};

contentModel.update = function(content, callback) {



    if (content.getData() && content.getData().length > 0) {
        if (!content.id) {
        return callback(new Error("L'id est nul ou n'est pas défini"));
    }
    if (!content.type) {
        return callback(new Error("Le type est nul ou n'est pas défini"));
    }
    if (!content.title) {
        return callback(new Error("Le title est nul ou n'est pas défini"));
    }
        fs.writeFile(path.join(CONFIG.contentDirectory, content.fileName), content.getData(), function(err) {

            if (err) {
                console.log(err.message);
                return callback(err);
            }

            fs.writeFile(path.join(CONFIG.contentDirectory, content.id + ".meta.json"), JSON.stringify(content), function(err) {
                if (err) {
                    console.log(err.message);
                    return callback(err);
                }
                console.log('UPDATED ' + content.id);
                console.log('file updated successfully');
                callback();
            });
        });
    }
};


contentModel.delete = function(id, callback) {


    fs.readFile(path.join(CONFIG.contentDirectory, id + ".meta.json"), 'utf8', function(err, data) {
        if (err) {
            console.log(err.message);
            return callback(err);
        }
        var obj = JSON.parse(data);
        console.log(obj);
        var filename = obj["fileName"];
        fs.unlink(path.join(CONFIG.contentDirectory, filename), function(err) {
            if (err) {
                console.log(err.message);
                return callback(err);
            }
            fs.unlink(path.join(CONFIG.contentDirectory, id + ".meta.json"), function(err) {
                if (err) {
                    console.log(err.message);
                    return callback(err);
                }
                console.log('file deleted successfully');
                callback();
            });
        });

    });

};

module.exports = contentModel;