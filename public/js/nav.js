const navExpand = document.querySelector('.nav-expand');
const navList = document.querySelector('.nav');

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

navExpand.addEventListener('click', () => {
  navList.classList.toggle('hide');
});

navCollapse();
window.addEventListener('resize', navCollapse);
