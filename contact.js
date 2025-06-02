document.addEventListener('DOMContentLoaded', () => {
    const isDesktop = window.matchMedia('(min-width:1368px)').matches;
    const btn = document.getElementById(
                  isDesktop ? 'submitBtnDesktop' : 'submitBtn'
               );
    const inputs = [
      document.getElementById(isDesktop ? 'nameFieldDesktop'    : 'nameField'),
      document.getElementById(isDesktop ? 'subjectFieldDesktop' : 'subjectField'),
      document.getElementById(isDesktop ? 'emailFieldDesktop'   : 'emailField'),
      document.getElementById(isDesktop ? 'msgFieldDesktop'     : 'msgField')
    ];
  
    btn.addEventListener('click', () => {
      const filled = inputs.every(i => i.value.trim() !== '');
  
      if (filled){
        btn.classList.remove('error');
        btn.classList.add('success');
        btn.innerHTML = 'SUBMITTED !<br>WE WILL RETURN TO YOU SHORTLY';
      }else{
        btn.classList.remove('success');
        btn.classList.add('error');
        btn.innerHTML = 'UNABLE TO SUBMIT<br>PLEASE HAVE EVERY COLUMN FILLED IN';
      }
    });
  });
  