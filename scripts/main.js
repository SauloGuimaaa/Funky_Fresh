const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

if (menuButton && navList) {
  menuButton.addEventListener('click', () => {
    const isOpen = navList.style.display === 'flex';
    navList.style.display = isOpen ? 'none' : 'flex';
    navList.style.flexDirection = 'column';
    navList.style.position = 'absolute';
    navList.style.top = '72px';
    navList.style.right = '1rem';
    navList.style.padding = '1rem';
    navList.style.background = '#fff';
    navList.style.border = '1px solid #e4e6eb';
    navList.style.borderRadius = '0.75rem';
  });
}
