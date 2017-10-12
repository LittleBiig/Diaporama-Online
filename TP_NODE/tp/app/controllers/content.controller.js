var contentModel = require("./../models/content.model.js");
var CONFIG = require("./../../config.json");
process.env.CONFIG = JSON.stringify(CONFIG);
var path = require("path");
var fs = require("fs");





// ########################### LIST #################################
var list = function(request, response) {
    var dirpath = CONFIG.contentDirectory;
    fs.readdir(CONFIG.contentDirectory, function(err, files) {
        if (err) {
            console.error(response.statut(500).end);
            return response.statut(500).end;
        }
        var filteredFiles;
        files.filter(function(file) {
            filteredFiles = files.filter(extension);
        });

        var content_list = {};
        var i = 0;
        filteredFiles.forEach(function(file) {

            var cfile = require(path.join(dirpath, file));

            contentModel.read(cfile.id, function(err, content) {
                if (err) {

                    console.error(err.message);
                    return response.status(500).end(err.message);
                } else {

                    var contents = new contentModel(content);
                    console.dir(content.getData());
                    contents.src = path.join(CONFIG.contentDirectory, contents.fileName);

                    content_list[contents.id] = contents;
                    if (i == filteredFiles.length - 1) {
                        return response.json(contentlist);;
                    }
                    i++;
                }
            });

        });
    });

}

function extension(element) {
    var extName = path.extname(element);
    return extName === '.json';
};

// ########################### CREATE #################################
var create = function(request, response) {

    var origfilename = request.file.originalname;
    var title = origfilename.substr(0, origfilename.lastIndexOf('.'));
    var type = path.extname(origfilename).substr(1);
    var tmp_path = request.file.path;
    // set where the file should actually exists 
    var target_path = path.join(CONFIG.contentDirectory, origfilename);
    // move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
        fs.unlink(tmp_path, function() {
            if (err) {
                throw err;
            }
        });

        fs.readFile(target_path, 'utf8', function(err, data) {
            if (err) {
                console.error(response.status(500).end);
                return response.status(500).end;
            }

            var json_file = {};
            json_file["id"] = uiid.generateUUID();
            json_file["type"] = type;
            json_file["title"] = title;
            json_file["fileName"] = json_file["id"] + '.' + type;
            json_file["data"] = data;

            contentModel.create(json_file, err);
            fs.rename(target_path, path.join(CONFIG.contentDirectory, json_file["fileName"]));

        });
        response.send(request.files);

    });
}

// ########################### READ #################################
var read = function(request, response) {

    var params = request.url.split("/");
    var id = params[2];
    var json = '';
    if (params[3]) json = params[3];
    else {
        if (json == "json=true") {
            response.send(JSON.stringify(content));
        } else {

            var filename = content.fileName;
            fs.readFile(path.join(CONFIG.contentDirectory, filename), 'utf8', function(err, data) {

                if (err) {
                    response.status(500).send(err);
                }
                if (!data) {

                } else {
                    response.send(data);
                }

            });
        }
    }

}