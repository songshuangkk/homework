'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

require('babel-polyfill');

var _log4js = require('./middleware/log4js/log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

"use strict";

var app = (0, _koa2.default)();

var log = _log4js2.default.getLogger("app");

app.listen(3000);