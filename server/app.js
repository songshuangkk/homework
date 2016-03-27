import koa from 'koa';
import "babel-polyfill";

import logger from './middleware/log4js/log4js'

"use strict";

var app = koa();

let log = logger.getLogger("app");


app.listen(3000);
