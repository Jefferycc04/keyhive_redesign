document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.back_to_top').forEach(btn => {
    btn.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  });
});