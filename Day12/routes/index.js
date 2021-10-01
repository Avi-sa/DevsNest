var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middleware/middleware');
const register = require('../controller/register');

/* GET home page. */
router.get('/', function (req, res, next) {
  const sess = req.session;
  sess.username = 'Avi';
  res.render('index', { title: 'Express' });
});

router.post('/register', registerInitialCheck, register);

module.exports = router;
