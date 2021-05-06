const post = document.querySelector('.post');
const newComment = document.querySelector('.new-comment');
const commentBody = document.querySelector('.comment-body');
const commentDelete = document.querySelectorAll('.comment-delete');

const commentFormHandler = async (event) => {
  const userId = commentBody.dataset.user;
  event.preventDefault();
  const postId = post.dataset.id;
  const commentContent = commentBody.value;

  const response = await fetch(`/api/comments/`, {
    method: 'POST',
    body: JSON.stringify({ user_id: userId, post_id: postId, comment_content: commentContent }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to create comment.');
  }
  console.log(response);
};

if (newComment) {
  newComment.addEventListener('submit', commentFormHandler);
}

commentDelete.forEach((comment) => {
  commentDeleteHandler = async (event) => {
    event.preventDefault;
    const commentId = comment.dataset.comment;

    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete comment.');
    }
  };

  comment.addEventListener('click', commentDeleteHandler);
});
// commentDelete.addEventListener('click', commentDeleteHandler);
