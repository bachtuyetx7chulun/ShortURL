const { DB_URL } = require("./variable.config.js");
const monk = require("monk");
const db = monk(DB_URL);

let urls = db.get("Url");
let users = db.get("User");

urls.createIndex({ slug: 1 }, { unique: true });
module.exports = {
  db,
  urls,
  users,
};
