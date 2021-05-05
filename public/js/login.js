const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const username = document.querySelector('.login-username').value.trim();
  const password = document.querySelector('.login-password').value.trim();

  if (username && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
      console.log(response);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('.sign-up-username').value.trim();
  const email = document.querySelector('.sign-up-email').value.trim();
  const password = document.querySelector('.sign-up-password').value.trim();
  const passwordConfirm = document.querySelector('.sign-up-password-confirm').value.trim();

  if (username && email && password && password === passwordConfirm) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
    console.log(response);
  }
};

if (document.location.pathname.includes('/login')) {
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
} else if (document.location.pathname.includes('/signup'))
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
