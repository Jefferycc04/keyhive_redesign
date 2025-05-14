document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('backToTop');
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});