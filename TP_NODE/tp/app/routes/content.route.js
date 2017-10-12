"use strict";

var express = require("express");
var multer = require("multer");
var router = express.Router();

module.exports = router;

var contentController = require('./../controllers/content.controller');

router.route('/contents')
    .get(contentController.list(function(err, contentlist) {
        if (err) {
            console.error(response.statut(500).end);
            return response.statut(500).end;
        } else {
            response.json(contentlist);
        }
    }));

    .post("/contents", multerMiddleware.single("file"), function(request, response) {
    console.log(request.file.path); // The full path to the uploaded file
    console.log(request.file.originalname); // Name of the file on the user's computer
    console.log(request.file.mimetype); // Mime type of the file
    });


router.route('/contents/:contentId')
    .get(contentController.read)


router.param('contentId', function(req, res, next, id) {
    req.contentId = id;
    next();
});


var multerMiddleware = multer({ "dest": "/tmp/" });

