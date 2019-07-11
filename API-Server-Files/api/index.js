/*
 * Primary router for API.
 */

const router = require('express').Router();

router.use('/forms', require('./forms'));

module.exports = router;
