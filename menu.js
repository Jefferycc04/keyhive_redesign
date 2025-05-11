document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menuIcon = document.getElementById('menuIcon');
    const menuOverlay = document.getElementById('menuOverlay');
  
    const footerLinks = document.querySelector('.links');
    const backButton = document.getElementById('backToPage');
    const divider = document.querySelector('.divider');

    const productToggle = document.querySelector('.product_with_submenu');
    const arrowIcon = productToggle.querySelector('.arrow_icon');
    const subMenu = productToggle.nextElementSibling;
    const extendedMenuNav = document.getElementById('extendedMenu');
  
    function toggleMenu(){
      const isHidden = menuOverlay.classList.toggle('hidden');
  
      if (isHidden){
        menuIcon.src = 'menuicon.svg';
  
        footerLinks.classList.remove('hidden');
        backButton.classList.add('hidden');
        backButton.classList.remove('fixedbottom');
        subMenu.classList.add('hidden');
        extendedMenuNav.classList.remove('submenu-open');
        arrowIcon.src = 'arrowdown.svg';
        divider.classList.remove('hidden');
      }else{
        menuIcon.src = 'closeicon.svg';
        footerLinks.classList.add('hidden');
        backButton.classList.remove('hidden');
        backButton.classList.add('fixedbottom');
        divider.classList.add('hidden');
      }
    }
    menuButton.addEventListener('click', toggleMenu);
    backButton.addEventListener('click', toggleMenu);

    subMenu.classList.add('hidden');

    function toggleSubMenu(){
      const hidden = subMenu.classList.toggle('hidden');

      if(hidden){
        extendedMenuNav.classList.remove('submenu-open');
        arrowIcon.src = 'arrowdown.svg';
      }else{
        extendedMenuNav.classList.add('submenu-open');
        arrowIcon.src = 'arrowup.svg';
      }
    }
    productToggle.addEventListener('click', toggleSubMenu);
  });
