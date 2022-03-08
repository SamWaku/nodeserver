const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

//comment model
const Comment = require('../../models/Comments');

//@route GET api/items
//@desc Get All comments
//@access public
router.get('/', (req, res) => {
    Comment.find()
        .sort({ date: -1 })
        .then(comments => res.json(comments))
});  

//@route POST api/items
//@desc  Create A post
//@access public
router.post('/', (req, res) => {
  const newComment = new Comment({
      comment: req.body.comment
  });

  newComment.save().then(comment => res.json(comment));
});  

//@route DELETE api/items/:id 
//@desc  Delete a comment 
//@access public
router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
    .then(comment => comment.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
  });
  

module.exports = router;