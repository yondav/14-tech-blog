const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Get all posts, iclude author and comments
router.get('/', async (req, res) => {
  console.log(req.session.loggedIn);
  try {
    const postsData = await Post.findAll({
      include: [
        {
          model: User,
          as: 'post_author',
          attributes: ['username'],
        },
        {
          model: Comment,
          as: 'post_comments',
          attributes: ['comment_content', 'createdAt'],
          include: [
            {
              model: User,
              as: 'comment_author',
              attributes: ['username'],
            },
          ],
        },
      ],
    });
    const posts = postsData.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      // logged_in: req.session.logged_in, // logged in status from the session object
      // userId: req.session.user_id, // user id from the session object
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// come back to it ***
router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    } else {
      res.status(200).render('login', { layout: 'login.handlebars' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// come back to it ***
router.get('/signup', async (req, res) => {
  try {
    res.status(200).render('signup', { layout: 'login.handlebars' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// come back to it ***
router.get('/logout', async (req, res) => {
  try {
    res.status(200).json('Logged out!');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
