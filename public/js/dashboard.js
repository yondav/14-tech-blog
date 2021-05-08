const newPostBtn = document.querySelector('.new-post-btn');
const newPostCont = document.querySelector('.new-post-cont');

const postBody = document.querySelector('.post-body');
const postDelete = document.querySelectorAll('.post-delete');
const postEdit = document.querySelectorAll('.post-edit');

newPostFormHandler = () => {
  newPostCont.classList.toggle('hide');

  const newCommentForm = document.querySelector('.new-comment');
  const userId = document.querySelector('.dash-title').dataset.id;
  const postTitle = document.getElementById('new-post-title');
  const blogContent = document.querySelector('.new-post-body');

  newCommentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        post_title: postTitle.value.trim(),
        blog_content: blogContent.value.trim(),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('this is the response', response);
      document.location.reload();
    } else {
      alert('Failed to create comment.');
    }
  });
};

postDelete.forEach((post) => {
  postDeleteHandler = async (event) => {
    event.preventDefault;
    const postId = post.dataset.comment;

    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/dashboard/${userId}`);
    } else {
      alert('Failed to delete post.');
    }
  };

  post.addEventListener('click', postDeleteHandler);
});

postEdit.forEach((post) => {
  postEditHandler = () => {
    const postId = document.querySelector('.post').dataset.id;
    const editForm = document.querySelector('.edit-post');

    editForm.classList.remove('hide');
    editForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const postTitle = document.querySelector('.edit-title').value.trim();
      const postBody = document.querySelector('.edit-post-body').value.trim();

      const response = await fetch(`api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ user_id: userId, post_title: postTitle, blog_content: postBody }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace(`/dashboard/${userId}`);
      } else {
        alert('Failed to edit post.');
      }
    });
  };
  post.addEventListener('click', postEditHandler);
});

newPostBtn.addEventListener('click', newPostFormHandler);
