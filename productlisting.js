document.addEventListener('DOMContentLoaded', () => {
    const scope = window.matchMedia('(min-width:1368px)').matches
                  ? document.querySelector('.desktop_content')
                  : document;                   

    const viewBtn = scope.querySelector('.control_button[data-type="view"]');  
    const sortBtn = scope.querySelector('.control_button[data-type="sort"]');
    const filterBtn = scope.querySelector('.control_button[data-type="filter"]');
  
    const viewArrow = viewBtn   ? viewBtn.querySelector('.arrow_icon')   : null;
    const sortArrow = sortBtn.querySelector('.arrow_icon');
    const filterArrow = filterBtn.querySelector('.arrow_icon');

    const viewMenu = scope.querySelector('#viewMenuDesktop, #viewMenu'); 
    const sortMenu = scope.querySelector('#sortMenuDesktop, #sortMenu');
    const filterMenu = scope.querySelector('#filterMenuDesktop, #filterMenu');
  
    const subDivider = scope.querySelector('#subDividerDesktop, #subDivider');
    const grid = document.querySelector('.arrival_grid');
 
    function closeAll() {
      [viewMenu, sortMenu, filterMenu].forEach(m => m && m.classList.add('hidden'));
      subDivider.classList.add('hidden');
      [viewBtn, sortBtn, filterBtn].forEach(b => b && b.classList.remove('active'));
      if (viewArrow) viewArrow.src = 'arrowdown.svg';
      sortArrow.src = 'arrowdown.svg';
      filterArrow.src = 'arrowdown.svg';
    }
  
    viewBtn && viewBtn.addEventListener('click', () => toggleMenu(viewBtn, viewMenu, viewArrow));
    sortBtn && sortBtn.addEventListener('click', () => toggleMenu(sortBtn, sortMenu, sortArrow));
    filterBtn && filterBtn.addEventListener('click', () => toggleMenu(filterBtn, filterMenu, filterArrow));
  
    function toggleMenu(btn, menu, arrow){
        const isOpen = !menu.classList.contains('hidden');
        closeAll();                                 
        if (isOpen) return;     
        menu.classList.remove('hidden');
        subDivider.classList.remove('hidden');
        btn.classList.add('active');
        arrow.src = 'arrowup.svg';
    }
  
    viewMenu && viewMenu.addEventListener('click', e => {
        const li = e.target.closest('li');
        if (!li || li.classList.contains('selected')) return;
        viewMenu.querySelectorAll('li')
                .forEach(x => x.classList.toggle('selected', x===li));
        if (li.dataset.view === 'vertical') grid.classList.add('vertical');
        else grid.classList.remove('vertical');
    });
  });
  