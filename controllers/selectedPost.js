const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get post by id, include author, comments and comment_authors
// For single post view
router.get('/:id', withAuth, async (req, res) => {
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
    const post = newPostData.get({ plain: true });
    res.render('single-post', post);
    console.log('console.log', post);
    // res.status(200).json(newPostData);
  } catch (err) {
    res.status(400).json('Page not found!');
  }
});

module.exports = router;
