const navExpand = document.querySelector('.nav-expand');
const navList = document.querySelector('.nav');
const logout = document.querySelector('.signout');

const navCollapse = () => {
  if (screen.width <= 515 || window.innerWidth <= 515) {
    if (!navList.classList.contains('hide')) {
      navList.classList.toggle('hide');
    }
    if (navExpand.classList.contains('hide')) {
      navExpand.classList.toggle('hide');
    }
  } else {
    if (navList.classList.contains('hide')) {
      navList.classList.toggle('hide');
    }
    if (!navExpand.classList.contains('hide')) {
      navExpand.classList.toggle('hide');
    }
  }
};

const logoutHandler = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

navExpand.addEventListener('click', () => {
  navList.classList.toggle('hide');
});

navCollapse();
window.addEventListener('resize', navCollapse);

logout.addEventListener('click', logoutHandler);
