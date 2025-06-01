document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelector('.links');
    const dividers = document.querySelectorAll('.divider');
    
    const productMenu = document.querySelector('.product_with_submenu');
    const arrowIcon = productMenu.querySelector('.arrow_icon');
    const subMenu = productMenu.nextElementSibling;
  
    function openMenu(){
      const isHidden = menuOverlay.classList.toggle('hidden');

      mainContent.classList.toggle('hidden');
      links.classList.toggle('hidden');
      dividers.forEach(d => d.classList.toggle('hidden'));
    
      if (isHidden) {
        menuIcon.src = 'menuicon.svg';
        backToPage.classList.add('hidden');
      } else {
        menuIcon.src = 'closeicon.svg';
        backToPage.classList.remove('hidden');
      }
    }
    menuButton.addEventListener('click', openMenu);
    backToPage.addEventListener('click', openMenu);

    function openSubMenu(){
      const hidden = subMenu.classList.toggle('hidden');
 
      if(hidden){
        extendedMenu.classList.remove('submenu_opened');
        arrowIcon.src = 'arrowdown.svg';
      }else{
        extendedMenu.classList.add('submenu_opened');
        arrowIcon.src = 'arrowup.svg';
      }
    }
    productMenu.addEventListener('click', openSubMenu);

  });