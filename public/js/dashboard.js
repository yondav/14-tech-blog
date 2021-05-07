const newPostBtn = document.querySelector('.new-post-btn');
const newPostCont = document.querySelector('.new-post-cont');

newPostFormHandler = (event) => {
  event.preventDefault();
  newPostCont.classList.toggle('hide');

  const newCommentForm = document.querySelector('.new-comment');
  const userId = document.querySelector('.dash-title').dataset.id;
  const postTitle = document.getElementById('new-post-title');
  const blogContent = document.querySelector('new-post-body');

  newCommentForm.addEventListener('submit', async () => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        post_title: postTitle.value.trim(),
        blog_content: blogContent.value.trim(),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment.');
    }
  });
};

newPostBtn.addEventListener('click', newPostFormHandler);