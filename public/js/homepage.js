const commentsExpand = document.querySelectorAll('.comments-expand');
const comments = document.querySelectorAll('.comments');

comments.forEach((comment) => {
  commentsExpand.forEach((expand) => {
    expand.addEventListener('click', () => {
      comment.classList.toggle('hide');
    });
  });
});
