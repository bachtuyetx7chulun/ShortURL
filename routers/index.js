const { Router } = require("express");
const { getError } = require("../utils/error.util");
const {
  createShortUrl,
  getShortUrl,
  getShortUrls,
} = require("../controllres/url.controller");

const router = Router();

router.get("/short", getShortUrls);
router.get("/short/:slug", getShortUrl);
router.post("/short", createShortUrl);
router.get("/error", getError);

module.exports = router;
