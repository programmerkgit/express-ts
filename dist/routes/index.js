"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express = require('express');
const indexRouter = express.Router();
exports.indexRouter = indexRouter;
/* GET home page. */
indexRouter.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
//# sourceMappingURL=index.js.map