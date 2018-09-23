const express = require('express');
const router = express.Router();

//Common Item Model
const CommonItems = require('../../models/CommonItems');

// @route   GET api/commonItems
// @desc    Get All Common Items
// @access  Public
router.get('/', (req, res) => {
    CommonItems.find()
        .sort({date: -1})
        .then(commonItems => res.json(commonItems));
});

module.exports = router;
