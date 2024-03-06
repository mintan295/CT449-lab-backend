const express = require("express");
const contacts = require("../controllers/contact.controller");
const router = express.Router();

router.post("/", contacts.create);
router.get("/", contacts.findAll);
router.delete("/", contacts.deleteAll);
router.get('/favorite',contacts.findAllFavorite);
router.get("/:id", contacts.findOne);
router.put("/:id", contacts.update);
router.delete("/:id", contacts.delete);


module.exports = router;
