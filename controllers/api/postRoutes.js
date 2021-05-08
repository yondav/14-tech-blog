const { User, Comment, Post } = require('../../models');
const router = require('express').Router();

// Get all posts for dashboard view
router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll({
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
    const postsData = allPosts.map((post) => post.get({ plain: true }));
    res.status(200).json(postsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new post
// Corresponds with user_id (will need it in req.body)
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newPost = await Post.create({
      user_id: req.body.user_id,
      post_title: req.body.post_title,
      blog_content: req.body.blog_content,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a post by id
// Corresponds with post_id of the post user is updating
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        post_title: req.body.post_title,
        blog_content: req.body.blog_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a post by id
// Corresponds with post_id of post user is deleting
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
