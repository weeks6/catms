const express = require('express');
const router = express.Router();
const Cat = require('../models/Cat');

// all cats
router.get('/cats', async (req, res) => {
    const cats = await Cat.find();
    res.json(cats);
})

// new cat
router.post('/newcat', (req, res) => {
    const cat = new Cat({
        name: req.body.name,
        breed: req.body.breed
    })

    cat.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err));
});

// get specific cat
router.get('/getcat/:catId', async(req, res) => {
   const cat = await Cat.findById(req.params.catId);
   res.json(cat);
})

// delete cat
router.delete('/deletecat/:catId', async (req, res) => {
    const removedCat = await Cat.deleteOne({ _id: req.params.catId }, err => console.log(err));
    res.json(removedCat);
})

// update specific cat
router.patch('/editcat/:catId', async (req, res) => {
    const updatedPost = await Cat.updateOne(
        { _id: req.params.catId },
        { $set: { ...req.body }}
    )
    res.json(updatedPost);
})

module.exports = router;