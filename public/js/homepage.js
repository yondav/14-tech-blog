const commentsExpand = document.querySelector('.comments-expand');
const comments = document.querySelector('.comments');

commentsExpand.addEventListener('click', () => {
  comments.classList.toggle('hide');
});
