var express = require("express");
var router = express.Router();

const {
  create,
  readID,
  update,
  deleteConcurse,
  getAll,
  getTopThree,
} = require("../controllers/concurseController");

router.post("/", create);
router.get("/top", getTopThree)
router.get("/:id", readID);
router.get("/", getAll);
router.patch("/:id", update);
router.delete("/:id", deleteConcurse);

module.exports = router;
