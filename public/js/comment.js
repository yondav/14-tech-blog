const post = document.querySelector('.post');
const newComment = document.querySelector('.new-comment');
const commentBody = document.querySelector('.comment-body');

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

newComment.addEventListener('submit', commentFormHandler);
