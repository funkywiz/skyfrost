var express = require('express');
var router = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');

var maincontroller=require('../controllers/mainController.js');

//body parser middleware
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(bodyParser.json({type: 'application/vnd.api+json'}));

router.post('/login', function(req, res){
    maincontroller.loginController(req,res);
});

module.exports=router;