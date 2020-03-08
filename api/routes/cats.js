const express = require('express');
const router = express.Router();
const Cat = require('../models/Cat');

// all cats
router.get('/cats', async (req, res) => {
    const cats = await Cat.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(cats));
})

// new cat
router.post('/newcat', (req, res) => {
    const cat = new Cat({
        name: req.body.name,
        breed: req.body.breed || " ",
        color: req.body.color || " ",
        gender: req.body.gender,
        age: req.body.age,
        description: req.body.description || " ",
        pictures: req.body.pictures || " "
    })
    res.header("Access-Control-Allow-Origin", "*");
    cat.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err));
});

// get specific cat
router.get('/getcat/:catId', async(req, res) => {
   const cat = await Cat.findById(req.params.catId);
   res.header("Access-Control-Allow-Origin", "*");
   res.json(cat);
})

// delete cat
router.delete('/deletecat/:catId', async (req, res) => {
    const removedCat = await Cat.deleteOne({ _id: req.params.catId }, err => {
        if (!err) {
            console.log("Deleted successfully")
        } else {
            console.log(`Error while deleting: ${err}`);
        }})
    res.header("Access-Control-Allow-Origin", "*");
    res.json(removedCat);
})

// update specific cat
router.patch('/editcat/:catId', async (req, res) => {
    await Cat.updateOne(
        { _id: req.params.catId },
        { $set: { ...req.body }}
    )
    const updatedCat = await Cat.findById(req.params.catId)
    res.header("Access-Control-Allow-Origin", "*");
    res.json(updatedCat);
})

module.exports = router;