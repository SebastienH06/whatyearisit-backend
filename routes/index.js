var express = require('express');
var router = express.Router();

/* GET year. */
router.get('/year', function(req, res, next) {
  const myYear = new Date().getFullYear();
  res.json({ year: myYear.toString() });
});

module.exports = router;
