const post = document.querySelector('.post');
const newComment = document.querySelector('.new-comment');
const commentBody = document.querySelector('.comment-body');
const commentDelete = document.querySelectorAll('.comment-delete');
const commentEdit = document.querySelectorAll('.comment-edit');

const commentFormHandler = async (event) => {
  event.preventDefault();
  const userId = commentBody.dataset.user;
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

commentEdit.forEach((comment) => {
  commentEditHandler = () => {
    const userId = commentBody.dataset.user;
    const commentId = comment.dataset.comment;
    const editForm = document.querySelectorAll('.edit-comment');

    editForm.forEach((form) => {
      form.classList.remove('hide');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const commentContent = commentBody.value;

        const response = await fetch(`/api/comments/${commentId}`, {
          method: 'PUT',
          body: JSON.stringify({ user_id: userId, comment_content: commentContent }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to edit comment.');
        }
        console.log(response);
      });
    });
  };
  comment.addEventListener('click', commentEditHandler);
});
