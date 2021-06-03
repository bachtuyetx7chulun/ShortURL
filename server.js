const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { PORT } = require("./configs/variable.config.js");
const listEndpoints = require("express-list-endpoints");
const logger = require("morgan");
const router = require("./routers");
const { getError } = require("./utils/error.util");

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(router);
app.use(getError);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(listEndpoints(app));
});
