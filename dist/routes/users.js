"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express = require('express');
const usersRouter = express.Router();
exports.usersRouter = usersRouter;
/* GET users listing. */
usersRouter.get('/', (req, res, next) => {
    res.send('respond with a resource');
});
//# sourceMappingURL=users.js.map