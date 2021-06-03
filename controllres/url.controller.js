const { urls } = require("../configs/monk.config");
const urlSchema = require("../validations/url.validation");
const { nanoid } = require("nanoid");

module.exports = {
  getShortUrls: async (req, res, next) => {
    try {
      const urlList = await urls.find();
      res.json({
        urls: urlList,
      });
    } catch (error) {
      throw error;
    }
  },

  createShortUrl: async (req, res, next) => {
    try {
      const { body } = req;
      const valid = urlSchema.create.isValidSync(body);

      if (!valid) {
        const message = `Invalid URL`;
        return res.status(400).json({
          error: {
            name: "error",
            message,
            status: 400,
          },
        });
      }

      const { url } = body;
      const slug = nanoid();

      const existSlug = await urls.findOne({ slug });
      if (existSlug) {
        return res.status(500).json({
          error: {
            name: "error",
            message: "Internal server error",
            status: 500,
          },
        });
      }

      const shortUrl = await urls.insert({
        slug,
        url,
        createAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
      });

      return res.json(shortUrl);
    } catch (error) {
      throw error;
    }
  },

  getShortUrl: async (req, res, next) => {
    try {
      const { slug } = req.params;
      const _url = await urls.findOne({ slug });
      if (!_url) {
        return res.redirect("/error");
      }
      return res.redirect(_url.url);
    } catch (error) {
      throw error;
    }
  },
};
