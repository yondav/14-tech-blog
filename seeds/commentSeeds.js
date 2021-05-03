const sequelize = require('../config/connection.js');
const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 2,
    comment_content: 'Great insight!!',
  },
  {
    user_id: 2,
    post_id: 1,
    comment_content: 'I never thought of it that way.',
  },
  {
    user_id: 1,
    post_id: 1,
    comment_content: "I dont't know if I agree with that...",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
