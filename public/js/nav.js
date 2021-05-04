const navExpand = document.querySelector('.nav-expand');
const navList = document.querySelector('.nav');

const navCollapse = () => {
  if (screen.width <= 515) {
    if (!navList.classList.contains('hide')) {
      navList.classList.add('hide');
    }
    if (navExpand.classList.contains('hide')) {
      navExpand.classList.remove('hide');
    }
  } else {
    if (navList.classList.contains('hide')) {
      navList.classList.remove('hide');
    }
    if (!navExpand.classList.contains('hide')) {
      navExpand.classList.add('hide');
    }
  }
};

navExpand.addEventListener('click', () => {
  navList.classList.toggle('hide');
});

navCollapse();
window.addEventListener('resize', navCollapse);
