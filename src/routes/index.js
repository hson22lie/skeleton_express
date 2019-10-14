import express from 'express';
import MenuController from '../controllers/MenuController'
// import Menu from '../models/Menu'

var router = express.Router();
var MenuCtlr = new MenuController()
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/testAPI', function(req, res, next) {
    res.json({ code: 200, message: "success juga bero", data: { id: 1, name: "henson" } });
})
router.post('/menu', function(req, res, next) {
    res.json(MenuCtlr.create(req.body))
})

module.exports = router;