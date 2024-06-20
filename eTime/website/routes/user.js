const express = require('express')
const router = express.Router()

let series = [
    {"start": "12:42", "end": "14:07", "total": "85 min"},
    {"start": "15:00", "end": "17:20", "total": "140 min"}
]

router.get('/', async(req, res) => {
    let today = new Date().toISOString().split('T')[0]
    res.render('user/default', {today: today, series: series })
})

router.get('/update', async(req, res) => {
    let today = new Date().toISOString().split('T')[0]
    if (req.query.start != "" && req.query.end != "" ) {
        var diff = Math.abs(new Date(today + " " +req.query.start) - new Date(today + " " + req.query.end));
        var minutes = Math.floor((diff/1000)/60);
        let times = {"start": req.query.start, "end": req.query.end, "total": minutes + " min"}
        series.push(times);
        console.log(series)
    }
    res.redirect('/user');
    //res.render('user/default', {today: today, series: series })
})

module.exports = router