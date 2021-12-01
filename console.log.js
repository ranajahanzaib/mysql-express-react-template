/**
 * Copyright (c) 2021-present, Rana Jahanzaib
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require("dotenv").config({ path: __dirname + "/.env" });

const HOST = "localhost";
const EXPRESS_PORT = process.env.EXPRESS_EXTERNAL_PORT;
const REACT_PORT = process.env.REACT_EXTERNAL_PORT;
const MYSQL_PORT = process.env.MYSQL_EXTERNAL_PORT;
const PHPMYADMIN_PORT = process.env.PHPMYADMIN_EXTERNAL_PORT;

console.log(`
  | Your configuration is:
  | 
  |   Express:          http://${HOST}:${EXPRESS_PORT}
  |   React:            http://${HOST}:${REACT_PORT}
  |   MySQL:            http://${HOST}:${MYSQL_PORT}
  |   phpMyAdmin:       http://${HOST}:${PHPMYADMIN_PORT}
  | 
`);
