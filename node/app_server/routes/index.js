var express = require('express');
var router = express.Router();
var ctrlTerms = require('../controllers/terms');
var ctrlOthers = require('../controllers/others');

// terms pages
router.get('/terms', ctrlTerms.getTerms);
router.get('/terms/new', ctrlTerms.addNewTerm);
router.post('/terms/new', ctrlTerms.postNewTerm);
router.get('/terms/:term', ctrlTerms.getTerm);
router.put('/terms/:term', ctrlTerms.putTerm);

router.get('/about', ctrlOthers.about);

module.exports = router;

