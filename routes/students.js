const express = require('express');
const router  = express.Router();
const Student = require('../models/Student');

/* GET students page */
router.get('/martha', (req, res, next) => {
  res.render('martha');
});

router.get('/horacio', (req, res, next) => {
  res.render('horacio');
});

router.post('./newStudent', (req, res, next) => {
  let {name, age} = req.body;

})

module.exports = router;
