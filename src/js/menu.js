const menuDetails = document.querySelector('.mainMenu details');

if (menuDetails) {
  menuDetails.addEventListener('click', (event) => {
    const menuLink = event.target.closest('a');
    if (menuLink) {
      menuDetails.removeAttribute('open');
    }
  });

  document.addEventListener('click', (event) => {
    if (!menuDetails.contains(event.target)) {
      menuDetails.removeAttribute('open');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuDetails.removeAttribute('open');
    }
  });
}
