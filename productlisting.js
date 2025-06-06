document.addEventListener('DOMContentLoaded', () => {
  const desktop = matchMedia('(min-width:1368px)').matches;
  const scope = desktop ? document.querySelector('.desktop_content') : document;

  const AR_UP = 'arrowup.svg';
  const AR_DN = 'arrowdown.svg';

  const ctl = {
    view : scope.querySelector('.control_button[data-type="view"]'),
    sort : scope.querySelector('.control_button[data-type="sort"]'),
    filter: scope.querySelector('.control_button[data-type="filter"]')
  };

  const arrow = {
    view : ctl.view && ctl.view.querySelector('.arrow_icon'),
    sort : ctl.sort.querySelector('.arrow_icon'),
    filter: ctl.filter.querySelector('.arrow_icon')
  };

  const menu = {
    view : scope.querySelector('#viewMenuDesktop, #viewMenu'),
    sort : scope.querySelector('#sortMenuDesktop, #sortMenu'),
    filter : scope.querySelector('#filterMenuDesktop, #filterMenu')
  };

  const subDiv = scope.querySelector('#subDividerDesktop, #subDivider');
  const grid = document.querySelector('.arrival_grid');

  function closeAll(){
    Object.values(menu).forEach(m => m && m.classList.add('hidden'));
    subDiv.classList.add('hidden');
    Object.values(ctl).forEach(b => b && b.classList.remove('active'));
    Object.values(arrow).forEach(a => a && (a.src = AR_DN));
  }

  function open(type){
    const m = menu[type], b = ctl[type], a = arrow[type];
    const open = m && !m.classList.contains('hidden');
    closeAll();   
    if (open) return; 
    m.classList.remove('hidden');
    subDiv.classList.remove('hidden');
    b.classList.add('active');
    a.src = AR_UP;
  }

  ctl.view && ctl.view.addEventListener('click', () => open('view'));
  ctl.sort && ctl.sort.addEventListener('click', () => open('sort'));
  ctl.filter && ctl.filter.addEventListener('click', () => open('filter'));

  menu.view && menu.view.addEventListener('click', e => {
    const li = e.target.closest('li');
    if (!li || li.classList.contains('selected')) return;
    menu.view.querySelectorAll('li')
             .forEach(x => x.classList.toggle('selected', x === li));
    grid.classList.toggle('vertical', li.dataset.view === 'vertical');
  });
});
