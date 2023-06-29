const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword } = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.post(
  "/login",
  authControllers.getUserByNameWithPasswordAndPassToNext,
  verifyPassword
);

module.exports = router;
