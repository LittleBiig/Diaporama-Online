"use strict";

var express = require("express");
var multer = require("multer");
var router = express.Router();
var multerMiddleware = multer({ "dest": "/tmp/" });
module.exports = router;

var contentController = require('./../controllers/content.controller');

router.route('/contents')
    .get(contentController.list)
    .post(multerMiddleware.single("file"), contentController.create);

router.route("/contents/:contentId")
    .get(req.contentId,contentController.read);

router.param('contentId', function(req, res, next, id) {
    req.contentId = id;
    next();
});