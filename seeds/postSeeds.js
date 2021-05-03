const sequelize = require('../config/connection.js');
const { Post } = require('../models');

const postData = [
  {
    user_id: 1,
    blog_content: `I mean, it's one banana, Michael. What could it cost, ten dollars? Can't a guy call his mother pretty without it seeming strange? Amen. And how about that little piece of tail on her? Cute! I've used one adjective to describe myself. What is it?

        Sister's my new mother, Mother. And is it just me or is she looking hotter? If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. What's gotten into you? Have you been eating cheese?`,
  },
  {
    user_id: 2,
    blog_content: `I'll have a vodka rocks. (Mom, it's breakfast time.) And a piece of toast. I run a pretty tight ship around here. With a pool table. It's a gaming ship. Oh by the way, Doctor said no kissing her on the face for one week. I was like make it two weeks, see if I care! It's as Ann as the nose on plain's face. Please refrain from Mayoneggs during this salmonella scare. I hear the jury's still out on science. I made a huge tiny mistake.

    Maybe it was the other George Michael. You know, the singer-songwriter. I see you've wasted no time in filling my seat hole.`,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
