const yup = require("yup");

let create = yup.object().shape({
  url: yup.string().url().required(),
  createAt: yup.date().default(function () {
    return new Date();
  }),
});

let urlSchema = {
  create,
};

module.exports = urlSchema;
