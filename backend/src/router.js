const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword } = require("./services/auth");

const phoneControllers = require("./controllers/phoneControllers");
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

router.get("/phones", phoneControllers.browse);
router.get("/phones/:id", phoneControllers.read);
router.put("/phones/:id", phoneControllers.edit);
router.post("/phones", phoneControllers.add);
router.delete("/phones/:id", phoneControllers.destroy);

module.exports = router;
