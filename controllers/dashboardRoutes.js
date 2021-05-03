const router = require('express').Router();
const { User, Post } = require('../models');
const checkAuthorization = require('../utils/authorization');

// Get all posts made by user for dashboard display
// Corresponds to user_id
router.get('/:id', checkAuthorization, async (req, res) => {
  try {
    const userPosts = await User.findByPk(req.params.id, {
      include: { model: Post, as: 'post_author' },
    });
    const usersPosts = userPosts.get({ plain: true });
    console.log(usersPosts);
    res.status(200).json(usersPosts);
  } catch (err) {
    res.status(400).json('Page not found!');
  }
});

module.exports = router;
