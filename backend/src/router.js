const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword } = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const adminControllers = require("./controllers/adminControllers");

router.get("/admins", adminControllers.browse);
router.get("/admins/:id", adminControllers.read);
router.put("/admins/:id", hashPassword, adminControllers.edit);
router.post("/admins", hashPassword, adminControllers.add);
router.delete("/admins/:id", adminControllers.destroy);

router.post(
  "/login",
  authControllers.getAdminByNameWithPasswordAndPassToNext,
  verifyPassword
);

module.exports = router;
