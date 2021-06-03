module.exports = {
  getError: (req, res, next) => {
    res.sendFile(
      __dirname.substring(0, __dirname.length - 5) + "/public/error.html"
    );
  },
};
