const closeBtn = document.querySelector('.menu-container .sidebar button div');
const openBtn = document.querySelector('.section-container .section1 .content nav ul button div');
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu-container .menu');

menuContainer.classList.add('hidden');
openBtn.addEventListener('click', ()=> {
    menuContainer.classList.remove('hidden');
    menuContainer.classList.add('active');
})
closeBtn.addEventListener('click', ()=> {
    menuContainer.classList.remove('active');
    menuContainer.classList.add('hidden');
})
