const express = require("express");

const router = express.Router();

const phoneControllers = require("./controllers/phoneControllers");

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/phones", phoneControllers.browse);
router.get("/phones/:id", phoneControllers.read);
router.put("/phones/:id", phoneControllers.edit);
router.post("/phones", phoneControllers.add);
router.delete("/phones/:id", phoneControllers.destroy);

module.exports = router;
