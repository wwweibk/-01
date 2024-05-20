const scrollButton = document.getElementById('scrollButton');
const targetHeading = document.getElementById('targetHeading');

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: targetHeading.offsetTop,
        behavior: 'smooth'
    });
});