const models = require("../models");

const getAdminByNameWithPasswordAndPassToNext = (req, res, next) => {
  models.admin
    .findByNameWithHashedPassword(req.body.username)
    .then(([rows]) => {
      const userInDatabase = rows[0];

      if (userInDatabase == null) {
        res.sendStatus(422);
      } else {
        req.admin = userInDatabase;

        next();
      }
    });
};
module.exports = {
  getAdminByNameWithPasswordAndPassToNext,
};
