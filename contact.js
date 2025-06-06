document.addEventListener('DOMContentLoaded', () => {
  const desktop = matchMedia('(min-width:1368px)').matches;
  const suf = desktop ? 'Desktop' : '';

  const btn = document.getElementById(`submitBtn${suf}`);
  const fields = ['nameField','subjectField','emailField','msgField']
                 .map(id => document.getElementById(`${id}${suf}`));

  btn.addEventListener('click', () => {
    const ok = fields.every(el => el.value.trim());
    btn.classList.toggle('success', ok);
    btn.classList.toggle('error', !ok);
    btn.innerHTML = ok
      ? 'SUBMITTED !<br>WE WILL RETURN TO YOU SHORTLY'
      : 'UNABLE TO SUBMIT<br>PLEASE HAVE EVERY COLUMN FILLED IN';
  });
});
