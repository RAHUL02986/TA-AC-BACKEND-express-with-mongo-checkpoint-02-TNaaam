var express = require('express');
const Event = require('../models/Event');
const Remark = require('../models/Remark');
var router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    var id = req.params.id;
    var remarks = await Remark.find({});
    res.render('remarkForm', { remark: remarks });
  } catch (error) {}
});
// router.post('')

module.exports = router;
