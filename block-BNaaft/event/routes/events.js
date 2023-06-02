var express = require('express');
var router = express.Router();
var Event = require('../models/Event');
var Remark = require('../models/Remark');

//fetch the event

router.get('/', async (req, res) => {
  try {
    var events = await Event.find({});
    // res.json(events);
    res.render('events', { events: events });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    var events = await Event.create(req.body);
    res.redirect('/event');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// fetch only one event

// router.get('/:id/detail', async (req, res) => {
//   try {
//     var { id } = req.params;
//     var events = await Event.findById(id, req.body);
//     console.log(events);
//     res.render('eventDetail', { event: events });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

router.get('/:id', async (req, res) => {
  try {
    var { id } = req.params;
    var events = await Event.findById(id);
    res.render('eventDetail', { event: events });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    var { id } = req.params;
    var events = await Event.findById(id);
    res.render('eventEdit', { event: events });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.post('/:id', async (req, res) => {
  try {
    var id = req.params.id;
    console.log(req.body);
    var event = await Event.findByIdAndUpdate(id, req.body);
    res.redirect('/event/' + id);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/:id/delete', async (req, res) => {
  try {
    var { id } = req.params;
    console.log(req.params);
    var events = await Event.findByIdAndDelete(id, req.body);
    res.redirect('/event');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.get('/:id/remark', async (req, res) => {
  try {
    var events = await Event.find({});
    res.render('remarkForm', { event: events });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post('/:id/remark', async (req, res) => {
  try {
    var id = req.params.id;
    req.body.eventId = id;
    var remarks = await Remark.create(req.body);
    Event.findByIdAndUpdate(id);
    
    } catch (error) {
    res.send(error);
  }
});

module.exports = router;
