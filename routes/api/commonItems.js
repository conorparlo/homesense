const express = require('express');
const router = express.Router();

//Common Item Model
const CommonItem = require('../../models/CommonItem');

// @route   GET api/commonItems
// @desc    Get All Common Items
// @access  Public
router.get('/', (req, res) => {
    CommonItem.find()
        .sort({date: -1})
        .then(commonItems => res.json(commonItems));
});

// @route   POST api/commonItems
// @desc    Create A Common Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new commonItem({
        name: req.body.name
    });

    newItem.save().then(commonItem => res.json(commonItem));
});

module.exports = router;
