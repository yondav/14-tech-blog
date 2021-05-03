const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Get post by id, include author, comments and comment_authors
// For single post view
router.get('/:id', async (req, res) => {
  try {
    const newPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'post_author',
          attributes: ['username'],
        },
        {
          model: Comment,
          as: 'post_comments',
          include: {
            model: User,
            as: 'comment_author',
            attributes: ['username'],
          },
        },
      ],
    });
    const postData = postData.get({ plain: true });
    console.log(postData);
    res.status(200).json(newPostData);
  } catch (err) {
    res.status(400).json('Page not found!');
  }
});

module.exports = router;
