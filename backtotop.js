document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.back_to_top').forEach(button => {
      button.style.cursor = 'pointer';
      button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  });