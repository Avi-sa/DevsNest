var express = require('express');
var path = require('path');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/:file/:name', function (req, res) {
  const { file, name } = req.params;
  console.log(name);
  const loc = path.join(__dirname, `../public/${file}/${name}`);
  res.sendFile(loc);
  res.send("Hii");
});


module.exports = router;
