const express = require('express');
const router = express.Router();
const Logs = require('../models/ny-logs.js');

//index
router.get('/', (req, res)=>{
  Logs.find({}, (err, foundLogs)=>{
    res.json(foundLogs);
  });
});


//create
router.post('/', (req, res)=>{
    Logs.create(req.body, (err, createdLog)=>{
        res.json(createdLog);
    });
});

//edit
router.put('/:id', (req, res)=>{
    Logs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog)=>{
        res.json(updatedLog);
    });
});

//delete
router.delete('/:id', (req, res)=>{
    Logs.findByIdAndRemove(req.params.id, (err, deletedLog)=>{
        res.json(deletedLog);
    });
});


//Export
module.exports = router;