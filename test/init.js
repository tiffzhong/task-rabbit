const massive = require("massive");
require("dotenv").config();

let dbPromise;

module.exports = {
  initDb() {
    dbPromise = dbPromise || massive(process.env.CONNECTION_STRING);
    return dbPromise;
  }
};
