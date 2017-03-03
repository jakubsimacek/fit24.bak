var epress = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

var ctrlTerms = require('../controllers/terms');
var ctrlForums = require('../controllers/forums');
var ctrlAuth = require('../controllers/authentication');

// terms pages
router.get('/terms', ctrlTerms.getTerms);
router.post('/terms/new', ctrlTerms.postNewTerm);
router.get('/terms/:term', ctrlTerms.getTerm);
router.put('/terms/:term', ctrlTerms.putTerm);
router.delete('/terms/:term', ctrlTerms.deleteTerm);

// forum pages
router.get('/forums', ctrlForums.getForums);
router.post('/forums/new', ctrlForums.postNewForum);
router.delete('/forums/:forumId', ctrlForums.deleteForum);
router.get('/forums/:forumId', ctrlForums.getPosts);
router.post('/forums/:forumId', ctrlForums.postPost);
router.put('/forums/:forumId/posts/:post', ctrlForums.putPost);
router.delete('/forums/:forumId/posts/:post', controllers.deletePost);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

