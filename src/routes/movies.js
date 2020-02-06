const { Router } = require("express");
const router = Router();

const jotason = require("../sample.json");
//console.log(jotason);

router.get("/", (req, res) => {
  //res.send('this movies lol');
  res.json(jotason);
});

// POST METHOD AND VALIDATION

router.post("/", (req, res) => {
  const { title, direction, rated, year } = req.body;
  if (title && direction && rated && year) {
    const id = jotason.length + 1;
    const newMovie = { ...req.body,id };
    jotason.push(newMovie);
    res.json(jotason);
    res.send("everything a-okay y'all lol");
  } else {
    res.status(500).json({"error":"there's an error lol y'all :'("});
  }
});

module.exports = router;
