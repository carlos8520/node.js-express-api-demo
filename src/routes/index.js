const { Router } = require("express");
const router = Router();

// ROUTES RESTFUL API LOL
router.get("/", (req, res) => {
  res.json({
    Title: "howdy",
    Desc: "Y'all"
  });
});

router.get("/lol", (req, res) => {
  res.send("howdy y'all, what in tarnation :D");
});

router.get("/json", (req, res) => {
  const data = {
    name: "jhon",
    lastname: "doe",
    id: "1234"
  };
  res.json(data);
});

module.exports = router;
