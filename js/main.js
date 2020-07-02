const navContainer = document.querySelector('.navbar');
const navBar = navContainer.querySelector('.items');
const navToggle = navContainer.querySelector('.humberger');

navToggle.addEventListener('click', () => {
    if(navBar.classList.contains('active')) {
        navBar.classList.remove('active');
        navToggle.classList.remove('active');
    } else {
        navBar.classList.add('active');
        navToggle.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if(!navContainer.contains(e.target)) {
        e.preventDefault();
        navBar.classList.remove('active');
        navToggle.classList.remove('active');
    }
})